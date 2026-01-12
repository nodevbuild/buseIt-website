import React from 'react';
import './WaitlistConfirmation.css';
import './WaitlistConfirmation.mobile.css';


const WaitlistConfirmation = () => {
    // This would come from backend/state in production
    const placeInLine = 1256;

    return (
        <div className="waitlist-confirmation-page">
            <div className="confirmation-card">
                {/* Content Section */}
                <div className="confirmation-content">
                    <h1 className="confirmation-heading">
                        Yay, you are<br />on the waitlist
                    </h1>

                    <div className="place-in-line-group">
                        <p className="place-label">Your Place in line</p>
                        <p className="place-number">{placeInLine}</p>
                    </div>
                </div>

                {/* Illustration */}
                <img
                    src="/WaitListConfirmation/illustration.png"
                    alt="BUSEit character celebrating"
                    className="confirmation-illustration"
                />
            </div>
        </div>
    );
};

export default WaitlistConfirmation;
