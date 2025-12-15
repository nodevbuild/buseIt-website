import React from 'react';
import './Card3.css';
import './Card3.mobile.css';

const Card3 = () => {
    return (
        <div className="card3-main-card">
            {/* Illustration Container */}
            <div className="illustration-container-card3">
                {/* Background Illustration */}
                <img
                    src="/howitworksILLUSTRATIONS/card3/components/illustration.png"
                    alt="Delivery Person Illustration"
                    className="card3-background-illustration"
                />

                {/* Track Your Order Card - Already tilted in PNG */}
                <img
                    src="/howitworksILLUSTRATIONS/card3/components/trackYourOrder.png"
                    alt="Track Your Order"
                    className="track-order-card"
                />

                {/* Secure Payment Card - Already tilted in PNG */}
                <img
                    src="/howitworksILLUSTRATIONS/card3/components/securePayment.png"
                    alt="Secure Payment"
                    className="secure-payment-card"
                />
            </div>

            {/* Card Content Section */}
            <div className="card3-card-content">
                {/* Orange Circle Badge with "3" */}
                <div className="card3-badge-container">
                    <span className="card3-badge-number">3</span>
                </div>

                {/* Text Content */}
                <div className="card3-text-content">
                    {/* Heading */}
                    <h3 className="card3-card-heading">
                        Buy Or Sell, All<br />Securely With <span className="orange-text">BUSEit.</span>
                    </h3>

                    {/* Description */}
                    <p className="card3-card-description">
                        With escrow payments and transparent tracking, every transaction is safe.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Card3;
