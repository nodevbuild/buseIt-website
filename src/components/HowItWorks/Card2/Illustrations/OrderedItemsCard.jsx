import React from 'react';
import './OrderedItemsCard.css';

const OrderedItemsCard = () => {
    return (
        <div className="ordered-items-card">
            {/* Icon and Text Container */}
            <div className="card-content-group">
                {/* Verify Icon */}
                <img
                    src="/assets/howitworksILLUSTRATIONS/card2/components/verify.png"
                    alt="Verify"
                    className="verify-icon"
                />

                {/* Text */}
                <h4 className="card-text">
                    Ordered<br />Items Verified
                </h4>
            </div>
        </div>
    );
};

export default OrderedItemsCard;
