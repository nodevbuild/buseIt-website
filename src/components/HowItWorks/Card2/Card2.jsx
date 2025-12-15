import React from 'react';
import './Card2.css';
import './Card2.mobile.css';

import OrderedItemsCard from './Illustrations/OrderedItemsCard';
import PickedUpCard from './Illustrations/PickedUpCard';
import DeliveredCard from './Illustrations/DeliveredCard';

const Card2 = () => {
    return (
        <div className="card2-main-card">
            {/* Illustration Container */}
            <div className="illustration-container-card2">
                {/* Background Illustration */}
                <img
                    src="/assets/howitworksILLUSTRATIONS/card2/components/illustration.png"
                    alt="Illustration"
                    className="background-illustration"
                />

                {/* Ordered Items Verified Card */}
                <OrderedItemsCard />

                {/* Items Has Been Picked Up Card */}
                <PickedUpCard />

                {/* Your Order Was Delivered Card */}
                <DeliveredCard />

                {/* Gift Box Decoration */}
                <img
                    src="/assets/howitworksILLUSTRATIONS/card2/components/giftBox.png"
                    alt="Gift Box"
                    className="gift-box-decoration"
                />

                {/* Carry Bag Decoration */}
                <img
                    src="/assets/howitworksILLUSTRATIONS/card2/components/carryBag.png"
                    alt="Shopping Bag"
                    className="carry-bag-decoration"
                />
            </div>

            {/* Card Content Section */}
            <div className="card2-card-content">
                {/* Orange Circle Badge with "2" */}
                <div className="card2-badge-container">
                    <span className="card2-badge-number">2</span>
                </div>

                {/* Text Content */}
                <div className="card2-text-content">
                    {/* Heading */}
                    <h3 className="card2-card-heading">
                        We Handle<br />The Heavy Lifting
                    </h3>

                    {/* Description */}
                    <p className="card2-card-description">
                        Our team manages the complete logistics - pickup, verification, and delivery end-to-end.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Card2;
