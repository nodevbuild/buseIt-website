import React from 'react';
import './NavigationArrows.css';

const NavigationArrows = ({ onPrev, onNext }) => {
    return (
        <div className="navigation-arrows">
            {/* Up Arrow Button */}
            <button className="arrow-button" onClick={onPrev} aria-label="Previous">
                <img
                    src="/assets/howitworksILLUSTRATIONS/arrows/upArrow.svg"
                    alt="Previous"
                    className="arrow-icon"
                />
            </button>

            {/* Down Arrow Button */}
            <button className="arrow-button" onClick={onNext} aria-label="Next">
                <img
                    src="/assets/howitworksILLUSTRATIONS/arrows/downArrow.svg"
                    alt="Next"
                    className="arrow-icon"
                />
            </button>
        </div>
    );
};

export default NavigationArrows;
