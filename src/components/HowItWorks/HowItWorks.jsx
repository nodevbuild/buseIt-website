import React, { useState } from 'react';
import Card1 from './Card1/Card1';
import Card2 from './Card2/Card2';
import Card3 from './Card3/Card3';
import NavigationArrows from './NavigationArrows';
import './HowItWorks.css';
import './HowItWorks.mobile.css';

const HowItWorks = () => {
    const [currentCard, setCurrentCard] = useState(1);

    const handleNext = () => {
        setCurrentCard((prev) => (prev === 3 ? 1 : prev + 1));
    };

    const handlePrev = () => {
        setCurrentCard((prev) => (prev === 1 ? 3 : prev - 1));
    };

    return (
        <section className="how-it-works-section" id="how-it-works">
            <div className="how-it-works-container">
                {/* Header Section */}
                <div className="how-it-works-header">
                    {/* Pill Badge */}
                    <div className="section-pill">
                        <span className="pill-text">How it Works</span>
                    </div>

                    {/* Text Group */}
                    <div className="text-group">
                        <h2 className="section-heading">Ownership, Made Circular</h2>
                        <p className="section-description">
                            Sell what you don't need. Shop what you can trust. We handle the rest.
                        </p>
                    </div>
                </div>

                {/* Cards Container */}
                <div className="cards-container">
                    <div className="cards-wrapper">
                        {currentCard === 1 && <Card1 />}
                        {currentCard === 2 && <Card2 />}
                        {currentCard === 3 && <Card3 />}
                    </div>
                </div>

                {/* Navigation Arrows */}
                <NavigationArrows
                    onPrev={handlePrev}
                    onNext={handleNext}
                    currentCard={currentCard}
                />
            </div>
        </section>
    );
};

export default HowItWorks;
