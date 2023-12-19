import React from 'react';

function Conformation(props) {
    return (
        <div id='app'>
            <div class="page-checkout-confirm">
                <div class="vertical-center">
                    <div class="text-center">
                        <h1>Thank you!</h1>
                        <h5>If you haven't received it yet. click to
                            <button>resend confirmation email</button>.</h5>
                        <a href="home.html" class="thank-you-back">Back to homepage</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Conformation;