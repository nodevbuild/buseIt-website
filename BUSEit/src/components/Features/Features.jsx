import React from 'react';
import FeatureCard from './FeatureCard';
import './Features.css';
import './Features.mobile.css';


const Features = () => {
    return (
        <section id="features" className="features-section">
            <div className="features-container">
                {/* Pill Badge */}
                <div className="section-pill-features">
                    <span className="pill-text-features">Features</span>
                </div>

                {/* Main Heading */}
                <h2 className="features-heading">The BUSEit Advantage</h2>

                {/* Feature Cards Grid */}
                <div className="features-grid">
                    <FeatureCard
                        title="Expert Verified Quality"
                        imagePath="/FeaturesSection/components/Card-1/card1.png"
                        cardClass="card-1"
                    />
                    <FeatureCard
                        title="Doorstep Pickup & Delivery"
                        imagePath="/FeaturesSection/components/Card-2/card2.png"
                        cardClass="card-2"
                    />
                    <FeatureCard
                        title="Secure Escrow Payments"
                        imagePath="/FeaturesSection/components/Card-3/card3.png"
                        cardClass="card-3"
                    />
                    <FeatureCard
                        title="Smart AI Listing Assistant"
                        imagePath="/FeaturesSection/components/Card-4/star and background.png"
                        overlayImage="/FeaturesSection/components/Card-4/screens.png"
                        cardClass="card-4"
                    />
                    <FeatureCard
                        title="Sell In A Snap"
                        imagePath="/FeaturesSection/components/Card-5/card5.png"
                        cardClass="card-5"
                    />
                    <FeatureCard
                        title="Smart Deals, Great Value"
                        imagePath="/FeaturesSection/components/Card-6/card6.png"
                        cardClass="card-6"
                    />
                </div>
            </div>
        </section>
    );
};

export default Features;
