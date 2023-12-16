import React, { useState } from 'react';

function DemoAuth(props) {
    const [formName, setFormName] = useState('login')

    return (
        <div className='relative'>
            <div className='container'>
                {formName === 'login' ?
                    <div className="col-lg-6 center">
                        <div className="login-wrapper ">
                            <h2 className="account-h2 u-s-m-b-20">Login</h2>
                            <h6 className="account-h6 u-s-m-b-30">Welcome back Supplier! Sign in to your account.</h6>
                            <form>
                                <div className="u-s-m-b-30">
                                    <label htmlFor="user-name-email">Username or Email
                                        <span className="astk">*</span>
                                    </label>
                                    <input type="text" id="user-name-email" className="text-field" placeholder="Username / Email" />
                                </div>
                                <div className="u-s-m-b-30">
                                    <label htmlFor="login-password">Password
                                        <span className="astk">*</span>
                                    </label>
                                    <input type="text" id="login-password" className="text-field" placeholder="Password" />
                                </div>
                                <div className="group-inline u-s-m-b-30">
                                    <div className="group-1">
                                        {/* <input type="checkbox" className="check-box" id="remember-me-token" />
                                        <label className="label-text" htmlFor="remember-me-token">Remember me</label> */}
                                        <div className="page-anchor">
                                            <a onClick={() => setFormName('signup')}>
                                                <i className="fas fa-circle-o-notch u-s-m-r-9" />Create supplier account?</a>
                                        </div>
                                    </div>
                                    <div className="group-2 text-right">
                                        <div className="page-anchor">
                                            <a onClick={() => setFormName('forgot')}>
                                                <i className="fas fa-circle-o-notch u-s-m-r-9" />Lost your password?</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="m-b-45">
                                    <button className="button button-outline-secondary w-100">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    : formName === 'forgot' ? <div className='center'>
                        {/* Lost-password-Page */}
                        <div className="page-lost-password ">
                            <div className="container">
                                <div className="page-lostpassword">
                                    <h2 className="account-h2 u-s-m-b-20">Forgot Password ?</h2>
                                    <h6 className="account-h6 u-s-m-b-30">Enter your email or username below and we will send you a link to reset your password.</h6>
                                    <form>
                                        <div className="w-50">
                                            <div className="u-s-m-b-13">
                                                <label htmlFor="user-name-email">Username or Email
                                                    <span className="astk">*</span>
                                                </label>
                                                <input type="text" id="user-name-email" className="text-field" placeholder="Username / Email" />
                                            </div>
                                            <div className="u-s-m-b-13">
                                                <button className="button button-outline-secondary">Get Reset Link</button>
                                            </div>
                                        </div>
                                        <div className="page-anchor">
                                            <a onClick={() => setFormName('login')}>
                                                <i className="fas fa-long-arrow-alt-left u-s-m-r-9"/>Back to Login</a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div> : <div className="col-lg-6 center">
                        <div className="reg-wrapper">
                            <h2 className="account-h2 u-s-m-b-20">Register</h2>
                            <h6 className="account-h6 u-s-m-b-30">Registering for this site allows you to access your order status and history.</h6>
                            <form>
                                <div className="u-s-m-b-30">
                                    <label htmlFor="user-name">Username
                                        <span className="astk">*</span>
                                    </label>
                                    <input type="text" id="user-name" className="text-field" placeholder="Username" />
                                </div>
                                <div className="u-s-m-b-30">
                                    <label htmlFor="email">Email
                                        <span className="astk">*</span>
                                    </label>
                                    <input type="text" id="email" className="text-field" placeholder="Email" />
                                </div>
                                <div className="u-s-m-b-30">
                                    <label htmlFor="password">Password
                                        <span className="astk">*</span>
                                    </label>
                                    <input type="text" id="password" className="text-field" placeholder="Password" />
                                </div>
                                <div className="u-s-m-b-30">
                                    <input type="checkbox" className="check-box" id="accept" />
                                    <label className="label-text no-color" htmlFor="accept">I’ve read and accept the
                                        <a href="terms-and-conditions.html" className="u-c-brand">terms &amp; conditions</a>
                                    </label>
                                </div>
                                <div className="u-s-m-b-45">
                                    <button className="button button-primary w-100" onClick={() => setFormName('login')}>Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}

export default DemoAuth;