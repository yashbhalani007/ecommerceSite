import React, { useState } from 'react';
import * as yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from 'react-redux';
import { handleSignup } from '../../../redux/action/adminauth.action';

function Register(props) {
    const [step, setStep] = useState(1)
    const dispatch = useDispatch()

    const initialValues = {
        full_name: '',
        email: '',
        mobile_number: '',
        store_name: '',
        gst_number: '',
        password: '',
    }

    const validationSchema = yup.object().shape({
        full_name: yup.string().min(13).required(),
        email: yup.string().email().required(),
        mobile_number: yup.string().matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Mobile number is not valid').required(),
        store_name: yup.string().min(5, 'Enter minimum 5 charachters store_name').required(),
        gst_number: yup.string().matches(/^\d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z\d]{1}[Z]{1}[A-Z\d]{1}$/, 'Please enter valid GST number').required(),
        password: yup
            .string()
            .required('Please Enter your password')
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
            ),
        pickup: yup.string().required().required(),
        pincode: yup.string().matches(/^[1-9][0-9]{5}$/, 'Enter valid pincode').required()
    })

    return (
        <div className='relative'>
            <div className='container'>
                <div className="col-lg-6 center">
                    <div className="login-wrapper ">
                        <h2 className="account-h2 u-s-m-b-20">Create Supplier Account</h2>
                        <h6 className="account-h6 u-s-m-b-30">Sell your products to crores of buyers</h6>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={(values, actions) => {
                                dispatch(handleSignup(values))
                                setTimeout(() => {
                                    alert("Form submitted successfully");
                                    actions.setSubmitting(false);
                                }, 1000);
                            }}
                        >
                            {({
                                isSubmitting, values, errors, touched
                                /* and other goodies */
                            }) => (
                                <Form>
                                    {step === 2 &&
                                        <div className="page-anchor">
                                            <a onClick={() => setStep(step - 1)} style={{ color: '#d90429' }}>
                                                <i className="fas fa-long-arrow-alt-left u-s-m-r-9" style={{ marginBottom: '15px' }} />Previous</a>
                                        </div>
                                    }
                                    {step === 1 &&
                                        <>
                                            <div className="u-s-m-b-30">
                                                <label htmlFor="user-name-fname">Full Name
                                                    <span className="astk">*</span>
                                                </label>
                                                <Field type="text" id="user-name-fname" name='full_name' className="text-field" placeholder="Full Name" />
                                                <ErrorMessage name="full_name" component="div" style={{ color: 'red' }} />
                                            </div>
                                            <div className="u-s-m-b-30">
                                                <label htmlFor="user-name-email">Email
                                                    <span className="astk">*</span>
                                                </label>
                                                <Field type="email" id="user-name-email" name='email' className="text-field" placeholder="Email" />
                                                <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
                                            </div>
                                            <div className="u-s-m-b-30">
                                                <label htmlFor="user-name-mobilenumber">Mobile Number
                                                    <span className="astk">*</span>
                                                </label>
                                                <Field type="text" id="user-name-mobilenumber" name='mobile_number' className="text-field" placeholder="Mobile Number" />
                                                <ErrorMessage name="mobile_number" component="div" style={{ color: 'red' }} />
                                            </div>
                                            <div className="u-s-m-b-30">
                                                <label htmlFor="login-password">Password
                                                    <span className="astk">*</span>
                                                </label>
                                                <Field type="password" id="login-password" name='password' className="text-field" placeholder="Password" />
                                                <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
                                            </div>
                                        </>
                                    }
                                    {
                                        step === 2 &&
                                        <>
                                            <div className="u-s-m-b-30">
                                                <label htmlFor="user-name-storename">Display Name/Store Name
                                                    <span className="astk">*</span>
                                                </label>
                                                <Field type="text" id="user-name-storename" name='store_name' className="text-field" placeholder="Store Name" />
                                                <ErrorMessage name="store_name" component="div" style={{ color: 'red' }} />
                                            </div>
                                            <div className="u-s-m-b-30">
                                                <label htmlFor="user-name-gstnumber">GST No.
                                                    <span className="astk">*</span>
                                                </label>
                                                <Field type="text" id="user-name-gstnumber" name='gst_number' className="text-field" placeholder="GST Number" />
                                                <ErrorMessage name="gst_number" component="div" style={{ color: 'red' }} />
                                            </div>
                                            <div className="u-s-m-b-30">
                                                <label htmlFor="user-name-pickup">Pickup Address
                                                    <span className="astk">*</span>
                                                </label>
                                                <Field as="textarea" id="user-name-pickup" name='pickup' className="text-field" placeholder="Pickup Address" style={{ paddingTop: '10px', height: '100px' }} />
                                                <ErrorMessage name="pickup" component="div" style={{ color: 'red' }} />
                                            </div>
                                            <div className="u-s-m-b-30">
                                                <label htmlFor="user-name-pincode">Pincode
                                                    <span className="astk">*</span>
                                                </label>
                                                <Field type="text" id="user-name-pincode" name='pincode' className="text-field" placeholder="Pincode" />
                                                <ErrorMessage name="pincode" component="div" style={{ color: 'red' }} />
                                            </div>
                                        </>
                                    }
                                    {step === 1 &&
                                        <button className="button button-primary w-100 registerbtn" onClick={() => setStep(step + 1)}>Next</button>
                                    }
                                    {step === 2 &&
                                        <button className="button button-primary w-100 registerbtn" type='submit'>Register</button>
                                    }
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;