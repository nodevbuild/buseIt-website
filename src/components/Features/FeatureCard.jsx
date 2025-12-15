import React from 'react';
import './FeatureCard.css';


const FeatureCard = ({ title, imagePath, overlayImage, cardClass }) => {
    return (
        <div className={`feature-card ${cardClass}`}>
            {/* Card Image Container */}
            <div className="feature-card-image-container">
                <img
                    src={imagePath}
                    alt={title}
                    className="feature-card-image"
                />

                {/* Overlay Image (optional - for layered cards) */}
                {overlayImage && (
                    <img
                        src={overlayImage}
                        alt={`${title} overlay`}
                        className="feature-card-overlay"
                    />
                )}
            </div>

            {/* Card Title */}
            <h3 className="feature-card-title">{title}</h3>
        </div>
    );
};

export default FeatureCard;
