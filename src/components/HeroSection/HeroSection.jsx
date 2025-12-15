import React from 'react';
import './HeroSection.css';
import './HeroSection.mobile.css';

const HeroSection = () => {
    // Detect device and redirect to appropriate store
    const handleDownloadApp = () => {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;

        // iOS detection
        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            // Redirect to App Store (placeholder - replace with actual link)
            window.open('https://apps.apple.com/app/buseit', '_blank');
        }
        // Android detection
        else if (/android/i.test(userAgent)) {
            // Redirect to Play Store (placeholder - replace with actual link)
            window.open('https://play.google.com/store/apps/details?id=com.buseit', '_blank');
        }
        // Default fallback
        else {
            window.open('https://apps.apple.com/app/buseit', '_blank');
        }
    };

    return (
        <section className="hero-section">
            <div className="hero-container">
                {/* Mobile Layout */}
                <div className="hero-content-wrapper">
                    {/* Main Heading */}
                    <h1 className="hero-heading">
                        Buy Better<br />
                        Sell Smarter
                    </h1>

                    {/* Description */}
                    <p className="hero-subtitle">
                        The trusted marketplace for verified pre-owned goods. Buy safely, sell effortlessly, all inside one app.
                    </p>

                    {/* Download App Button - Mobile Only */}
                    <button
                        className="download-app-button"
                        onClick={handleDownloadApp}
                    >
                        Download The App
                        <img
                            src="/assets/For Busy Users/arrow-circle-right (1).png"
                            alt="Arrow"
                            className="download-arrow-icon"
                        />
                    </button>
                </div>

                {/* GIF/Illustration */}
                <img
                    src="/assets/heroSectionComponents/newAnimation.gif"
                    alt="BUSEit Hero Animation"
                    className="hero-illustration"
                />

                {/* Desktop Layout (Hidden on mobile) */}
                <div className="hero-animation">
                    <img
                        src="/assets/heroSectionComponents/newAnimation.gif"
                        alt="BUSEit Hero Animation"
                        className="hero-gif"
                    />
                </div>

                <div className="hero-content">
                    <h1 className="hero-headline">
                        Buy Better<br />
                        Sell Smarter
                    </h1>

                    <p className="hero-description">
                        The trusted marketplace for verified pre-owned goods. Buy safely, sell effortlessly, all inside one app.
                    </p>

                    {/* Desktop App Store Badges */}
                    <div className="app-badges">
                        <a
                            href="https://apps.apple.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="badge-link"
                        >
                            <img
                                src="/assets/Apple and google download/Download_on_the_App_Store_Badge.svg"
                                alt="Download on App Store"
                                className="app-badge apple-badge"
                            />
                        </a>

                        <a
                            href="https://play.google.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="badge-link"
                        >
                            <img
                                src="/assets/Apple and google download/Google_Play_Store_badge_EN.svg"
                                alt="Get it on Google Play"
                                className="app-badge google-badge"
                            />
                        </a>
                    </div>
                </div>
            </div>

            {/* Footer Banner */}
            <div className="hero-footer-banner">
                <p className="hero-footer-text">everything preowned</p>
            </div>
        </section>
    );
};

export default HeroSection;
