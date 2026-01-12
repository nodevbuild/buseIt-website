import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import './Footer.mobile.css';


const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="footer-container">
                {/* Watermark Text */}
                <div className="footer-watermark">BUY•USE•SELL</div>

                {/* Footer Content */}
                <div className="footer-content">
                    {/* Main Content Wrapper - Logo + Links */}
                    <div className="footer-main-wrapper">
                        {/* Left Section - Logo & Tagline */}
                        <div className="footer-left">
                            <img
                                src="/assets/logos/BUSEit..svg"
                                alt="BUSEit Logo"
                                className="footer-logo"
                            />
                            <p className="footer-tagline">
                                The trusted marketplace for verified pre-owned goods — buy safely, sell effortlessly, all inside one app.
                            </p>
                        </div>

                        {/* Right Section - Navigation & Social Links */}
                        <div className="footer-links-container">
                            {/* Navigation Links Column */}
                            <div className="footer-nav-column">
                                <a href="#about" className="footer-link">
                                    <img src="/assets/footer/ABOUTBUSEit.png" alt="" className="footer-link-icon" />
                                    <span>About BUSEit</span>
                                </a>
                                <Link to="/join-waitlist" className="footer-link">
                                    <img src="/assets/footer/contactsupport.png" alt="" className="footer-link-icon" />
                                    <span>Contact Support</span>
                                </Link>
                                <a href="#terms" className="footer-link">
                                    <img src="/assets/footer/termsandcondition.png" alt="" className="footer-link-icon" />
                                    <span>Terms & Conditions</span>
                                </a>
                                <a href="#privacy" className="footer-link">
                                    <img src="/assets/footer/privacypolicy.png" alt="" className="footer-link-icon" />
                                    <span>Privacy Policy</span>
                                </a>
                            </div>

                            {/* Social Media Links Column */}
                            <div className="footer-social-column">
                                <a href="https://www.instagram.com/buseit.club/" target="_blank" rel="noopener noreferrer" className="footer-link">
                                    <img src="/assets/footer/instagram.png" alt="" className="footer-link-icon" />
                                    <span>Instagram</span>
                                </a>
                                <a href="https://www.facebook.com/buseit.club" target="_blank" rel="noopener noreferrer" className="footer-link">
                                    <img src="/assets/footer/facebook.png" alt="" className="footer-link-icon" />
                                    <span>Facebook</span>
                                </a>
                                <a href="https://www.linkedin.com/company/buseit" target="_blank" rel="noopener noreferrer" className="footer-link">
                                    <img src="/assets/footer/linkedin.png" alt="" className="footer-link-icon" />
                                    <span>LinkedIn</span>
                                </a>
                                <a href="mailto:support@buseit.club" className="footer-link">
                                    <img src="/assets/footer/support@buseit.club.png" alt="" className="footer-link-icon" />
                                    <span>support@buseit.club</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
