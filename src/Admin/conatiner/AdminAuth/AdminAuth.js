import React, { useState } from 'react';

function AdminAuth(props) {
    const [formName, setFormName] = useState('login')

    return (
        <div className='relative'>
        <div className='container'>
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
                                <input type="checkbox" className="check-box" id="remember-me-token" />
                                <label className="label-text" htmlFor="remember-me-token">Remember me</label>
                            </div>
                            <div className="group-2 text-right">
                                <div className="page-anchor">
                                    <a href="lost-password.html">
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
        </div>
        </div>
    );
}

export default AdminAuth;