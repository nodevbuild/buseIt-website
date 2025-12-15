import React from 'react';
import './DeliveredCard.css';

const DeliveredCard = () => {
    return (
        <div className="delivered-card">
            {/* Icon and Text Container */}
            <div className="card-content-group-delivered">
                {/* Truck Icon */}
                <img
                    src="/howitworksILLUSTRATIONS/card2/components/truck-fast.png"
                    alt="Truck"
                    className="truck-icon"
                />

                {/* Text */}
                <h4 className="card-text-delivered">
                    Your order<br />was Delivered
                </h4>
            </div>
        </div>
    );
};

export default DeliveredCard;
