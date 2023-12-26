import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import { forgotPassword, handleSignup, userLoginRequest } from "../../../redux/action/adminauth.action";


function Auth(props) {
  const [formName, setFormName] = useState("sign-up");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSign = (values) => {
    dispatch(handleSignup(values))
  }

  const handleLogged = (values) => {
    dispatch(userLoginRequest({values :values, callback : (route) => {
      navigate(route)
    }}))
  }

  const handlefPassw = (data) => {
    dispatch(forgotPassword(data))
  }


  let authobj, initialValues;

  if (formName === "login") {
    authobj = {
      email: yup.string().email('Please Enter a Valid Email').required('Please Enter a Email'),
      password: yup.string().required('Please Enter a Password')
    };

    initialValues = {
      email: "",
      password: ""
    };
  } else if (formName === "sign-up") {
    authobj = {
      email: yup.string().email('Please Enter a Valid Email').required('Please Enter a Email'),
      full_name: yup.string().required('Please Enter a Valid Name'),
      password :yup.string().required('Please Enter a Valid Password')
    };

    initialValues = {
      email: "",
      full_name: "",
      password : ""
    };
  } else if (formName === "fpassword") {
    authobj = {
      email: yup.string().email('Please Enter a valid Email').required('Please Enter a Email')
    };

    initialValues = {
      email: ""
    };
  }


  const authSchema = yup.object().shape(authobj);

  const {
    values,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    touched
  } = useFormik({
    initialValues: initialValues,
    validationSchema: authSchema,
    enableReinitialize: true,
    onSubmit: (values, action) => {
      if(formName === "sign-up"){
        console.log('kkkk');
        handleSign(values);
      }else if(formName === "login"){
        console.log('kkkkkkk');
        handleLogged(values);
      }else if(formName === "fpassword"){
        handlefPassw(values);
      }
      console.log(values);
      action.resetForm();
    }
  });

  return (
    <div id="app">
      <div>
        <div className="page-style-a">
          <div className="container">
            <div className="page-intro">
              <h2>Account</h2>
              <ul className="bread-crumb">
                <li className="has-separator">
                  <i className="ion ion-md-home" />
                  <a href="home.html">Home</a>
                </li>
                <li className="is-marked">
                  <a href="account.html">Account</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Page Introduction Wrapper /- */}
        {/* Account-Page */}
        <div className="page-account u-s-p-t-80">
          <div className="container">
            <div className="row">      
              <div className="col-lg-12">
                <div className="reg-wrapper">
               
                    {formName === 'fpassword' ?   <h2 className="account-h2 u-s-m-b-20">Forgot Password</h2>:
                    formName === 'login' ?  <h2 className="account-h2 u-s-m-b-20">Login</h2> :
                    <h2 className="account-h2 u-s-m-b-20">Sign-Up</h2>
                    } 
                  <h6 className="account-h6 u-s-m-b-30">
                    Registering for this site allows you to access your order
                    status and history.
                  </h6>
                  <form onSubmit={handleSubmit}>
                      <div className="u-s-m-b-30">
                      
                        {formName === 'sign-up' ?
                             <>
                         <label htmlFor="user-name">
                           Username
                           <span className="astk">*</span>
                         </label>
                         
                         <input
                           type="text"
                           id="user-name"
                           name="full_name"
                           className="text-field"
                           placeholder="Username"
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.name}
                         />
                         
                     {touched.name && errors.name
                      ? <div className="error-handle">
                          {errors.name}
                        </div>
                      : null} 
                         </> : ''
                        }
                         
                       </div>
                 
                    <div className="u-s-m-b-30">
                      <label htmlFor="email">
                        Email
                        <span className="astk">*</span>
                      </label>
                      <input
                        type="text"
                        id="email"
                        name="email"
                        className="text-field"
                        placeholder="Email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                      />

                        {touched.email && errors.email
                      ? <div className="error-handle">
                          {errors.email}
                        </div>
                      : null}


                    </div>
                    <div className="u-s-m-b-30">
                        {
                            formName === 'fpassword' ? '' :
                            <>
                            <label htmlFor="password">
                            Password
                            <span className="astk">*</span>
                          </label>
                          <input
                            type="text"
                            id="password"
                            name="password"
                            className="text-field"
                            placeholder="Password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                          />

                        {touched.password && errors.password
                      ? <div className="error-handle">
                          {errors.password}
                        </div>
                      : null}


                          </>
                        }
                      
                    </div>
                    <div className="u-s-m-b-30">
                      <input
                        type="checkbox"
                        className="check-box"
                        id="accept"
                      />
                      <label className="label-text no-color" htmlFor="accept">
                        I’ve read and accept the
                        <a
                          href="terms-and-conditions.html"
                          className="u-c-brand"
                        >
                          terms &amp; conditions
                        </a>
                      </label>
                    </div>

                    <div className="m-b-45">
                      {formName === "sign-up" ? (
                        <div className="formsignup">
                        
                          <Link>
                            <a
                                className="clickhere"
                              onClick={() => {
                                setFormName("login");
                            
                              }}
                            >
                               <p className="login">Already Have An Account ?</p>
                            </a>
                          </Link>
                        </div>
                      ) : formName === "login" ? (
                        <>                        <div className="formsignup">

                          <a
                           className="clickhere"
                            onClick={() => {
                              setFormName("sign-up");
                            }}
                          >
                        <p className="login">Create An Account?</p>

                          </a>
                          </div>
                          <div className="formsignup">

                            <a
                             className="clickhere"
                              onClick={() => {
                                setFormName("fpassword");
                              }}
                            >
                            <p className="login">Forgot Password ?</p>

                            </a>
                         
                        </div>
                        </>

                      ) : (
                        <div className="formsignup">
                          <Link>
                            <a
                             className="clickhere"
                              onClick={() => {
                                setFormName("login");
                              }}><p className="login">Back to Login</p>
                              </a>
                          </Link>
                        </div>
                      )}
                    </div>
                    <div className="m-b-45">
                      {formName === "fpassword" ? (
                        <button className="button button-primary w-100" type="submit">
                          Reset Password
                        </button>
                      ) : formName === "login" ? (
                        <div>
                          <button className="button button-primary w-100" type="submit">
                            Login
                          </button>
                        </div>
                      ) : (
                        <button className="button button-primary w-100" type="submit">
                          Register
                        </button>
                      )}
                    </div>
                  </form>
                </div>
              </div>
              {/* Register /- */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
