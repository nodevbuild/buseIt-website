import React from 'react';
import { Link } from 'react-router-dom';
import './Error404.css';
import './Error404.mobile.css';


const Error404 = () => {
    return (
        <div className="error-404-page">
            <div className="error-404-container">
                {/* Error Content */}
                <div className="error-content">
                    <h1 className="error-code">
                        404<span className="error-dot">.</span>
                    </h1>

                    <h2 className="error-title">
                        Error occured.
                    </h2>

                    <p className="error-description">
                        Woops. Looks like there is a problem.<br />
                        We are trying to fix it. Check back in sometime
                    </p>

                    <p className="error-back-link">
                        back to <Link to="/" className="home-link">home</Link>
                    </p>
                </div>

                {/* Illustration */}
                <img
                    src="/404Screen/illustration.png"
                    alt="404 Error - Server maintenance"
                    className="error-illustration"
                />
            </div>
        </div>
    );
};

export default Error404;
