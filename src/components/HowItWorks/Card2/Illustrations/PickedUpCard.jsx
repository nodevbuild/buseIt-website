import React from 'react';
import './PickedUpCard.css';

const PickedUpCard = () => {
    return (
        <div className="picked-up-card">
            {/* Icon and Text Container */}
            <div className="card-content-group-pickup">
                {/* Box Icon */}
                <img
                    src="/howitworksILLUSTRATIONS/card2/components/box.png"
                    alt="Box"
                    className="box-icon"
                />

                {/* Text */}
                <h4 className="card-text-pickup">
                    Items has been<br />Picked up
                </h4>
            </div>
        </div>
    );
};

export default PickedUpCard;
