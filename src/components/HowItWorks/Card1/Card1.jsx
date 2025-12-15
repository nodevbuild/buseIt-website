import React from 'react';
import './Card1.css';
import './Card1.mobile.css';

import ProductCard from './Illustrations/ProductCard';
import StarsBadge from './Illustrations/StarsBadge';
import PriceRangeCard from './Illustrations/PriceRangeCard';

const Card1 = () => {
    return (
        <div className="main-card">
            {/* Illustration Container */}
            <div className="illustration-container">
                {/* Price Range Card - LAYER 1 (behind person) */}
                <PriceRangeCard />

                {/* Illustration Person - LAYER 2 (in front of price card) */}
                <img
                    src="/assets/howitworksILLUSTRATIONS/card1/productcard/illustartion.png"
                    alt="Person Illustration"
                    className="illustration-image"
                />

                {/* Stars Badge - LAYER 3 (in front of person) */}
                <StarsBadge />

                {/* Product Card - LAYER 3 (in front of person) */}
                <ProductCard />
            </div>

            {/* Card Content Section */}
            <div className="card-content">
                {/* Orange Circle Badge with "1" */}
                <div className="badge-container">
                    <img
                        src="/assets/howitworksILLUSTRATIONS/card1/productcard/oneImage.png"
                        alt="Step 1"
                        className="step-badge"
                    />
                </div>

                {/* Text Content */}
                <div className="text-content">
                    {/* Heading */}
                    <h3 className="card-heading">Start With A Smarter Choice</h3>

                    {/* Description */}
                    <p className="card-description">
                        List your item quickly or browse high-quality, verified finds — all in one trusted place.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Card1;
