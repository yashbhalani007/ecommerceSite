import React from 'react';

function TrackOrder(props) {
    return (
        <div id='app'>
            <div>
                <div className="page-style-a">
                    <div className="container">
                        <div className="page-intro">
                            <h2>Track Order</h2>
                            <ul className="bread-crumb">
                                <li className="has-separator">
                                    <i className="ion ion-md-home" />
                                    <a href="home.html">Home</a>
                                </li>
                                <li className="is-marked">
                                    <a href="track-order.html">Track Order</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Page Introduction Wrapper /- */}
                {/* Track-Order-Page */}
                <div className="page-track-order u-s-p-t-80">
                    <div className="container">
                        <div className="track-order-wrapper">
                            <h2 className="track-order-h2 u-s-m-b-20 text-center">Track Your Order</h2>
                            <h6 className="track-order-h6 u-s-m-b-30">To track your order please enter your Order ID in the box below and press the "Track" button. This was given to you on your receipt and in the confirmation email you should have received.</h6>
                            <form>
                                <div className="u-s-m-b-30">
                                    <label htmlFor="order-id">Order ID
                                        <span className="astk">*</span>
                                    </label>
                                    <input type="text" id="order-id" className="text-field" placeholder="Found in your order confirmation email" />
                                </div>
                                <div className="u-s-m-b-30">
                                    <label htmlFor="billing-email">Billing Email
                                        <span className="astk">*</span>
                                    </label>
                                    <input type="text" id="billing-email" className="text-field" placeholder="Email you used during checkout." />
                                </div>
                                <div className="u-s-m-b-30">
                                    <button className="button button-outline-secondary w-100">TRACK</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default TrackOrder;