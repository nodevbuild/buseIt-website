import React from 'react';
import './PriceRangeCard.css';

const PriceRangeCard = () => {
    return (
        <div className="price-range-card">
            {/* Complete chart group - waveform, prices, text, line, all in one PNG */}
            <img
                src="/howitworksILLUSTRATIONS/card1/productcard/Group 10 (1).png"
                alt="Price Range Chart"
                className="chart-group"
            />

            {/* CTA Button */}
            <button className="cta-button">Sell this now with AI</button>
        </div>
    );
};

export default PriceRangeCard;
