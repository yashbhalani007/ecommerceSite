import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { forgotPassword, loginRequest, loginResponse, userLoginRequest } from '../../../redux/action/adminauth.action';

function AdminAuth(props) {
    const [formName, setFormName] = useState('login')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogin = (data) => {
        dispatch(loginRequest({
            data: data,
            callback : (route) => {
                navigate(route)
            }
        }))
    }

    const handleForgot = (data) => {
        dispatch(forgotPassword(data))
    }

    let initialValues, authObj;
    if (formName === 'login') {
        initialValues = {
            email: '',
            password: '',
        }
        authObj = {
            email: yup.string().email().required(),
            password: yup
                .string()
                .required('Please Enter your password')
                .matches(
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                    "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
                )
        }
    } else {
        initialValues = {
            email: ''
        }
        authObj = {
            email: yup.string().email().required()
        }
    }

    const authSchema = yup.object().shape(authObj);

    const formikObj = useFormik({
        initialValues,
        onSubmit: values => {
            // alert(values.email, values.password)
            if (formName === 'login') {
                handleLogin(values)
            } else if (formName === 'forgot') {
                handleForgot(values)
            }
        },
        enableReinitialize: true,
        validationSchema: authSchema
    })

    const { handleSubmit, handleBlur, handleChange, handleReset, errors, touched, values } = formikObj;

    return (
        <div className='relative'>
            <div className='container'>
                <div className="col-lg-6 center">
                    <div className="login-wrapper ">
                        {formName === 'login' ? <h2 className="account-h2 u-s-m-b-20">Login</h2> : <h2 className="account-h2 u-s-m-b-20">Forgot Password ?</h2>}
                        {formName === 'login' ? <h6 className="account-h6 u-s-m-b-30">Welcome back Supplier! Sign in to your account.</h6> : <h6 className="account-h6 u-s-m-b-30">Enter your email or username below and we will send you a link to reset your password.</h6>}
                        <form onSubmit={handleSubmit}>
                            <div className="u-s-m-b-30">
                                <label htmlFor="user-name-email">Email
                                    <span className="astk">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="user-name-email"
                                    name='email'
                                    className="text-field"
                                    placeholder="Email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.email && touched.email ? <p style={{ color: 'red' }}>{errors.email}</p> : ''}
                            </div>
                            {formName !== 'forgot' ?
                                <div className="u-s-m-b-30">
                                    <label htmlFor="login-password">Password
                                        <span className="astk">*</span>
                                    </label>
                                    <input
                                        type="password"
                                        id="login-password"
                                        name='password'
                                        className="text-field"
                                        placeholder="Password"
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.password && touched.password ? <p style={{ color: 'red' }}>{errors.password}</p> : ''}
                                </div> : null
                            }
                            {
                                formName === 'login' ?
                                    <div className="group-inline u-s-m-b-30">
                                        <div className="group-1">
                                            <div className="page-anchor">
                                                <Link to='/admin/panel/register' className='anchor'>
                                                    <i className="fas fa-circle-o-notch u-s-m-r-9" />Create supplier account?</Link>
                                            </div>
                                        </div>
                                        <div className="group-2 text-right">
                                            <div className="page-anchor">
                                                <a onClick={() => setFormName('forgot')} className='anchor'>
                                                    <i className="fas fa-circle-o-notch u-s-m-r-9" />Lost your password?</a>
                                            </div>
                                        </div>
                                    </div> : null
                            }
                            <div className="m-b-45">
                                {formName === 'login' ?
                                    <button className="button button-outline-secondary w-100 loginbtn" type='submit'>Login</button> :
                                    <div className="page-anchor">
                                        <button className="button button-outline-secondary" type='submit'>Get Reset Link</button>
                                        <a onClick={() => setFormName('login')}>
                                            <i className="fas fa-long-arrow-alt-left u-s-m-r-9" style={{ marginLeft: '225px' }} />Back to Login</a>

                                    </div>}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminAuth;