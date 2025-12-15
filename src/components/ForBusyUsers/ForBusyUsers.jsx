import React from 'react';
import './ForBusyUsers.css';
import './ForBusyUsers.mobile.css';


const ForBusyUsers = () => {
  return (
    <section id="for-busy-users" className="for-busy-users-section">
      <div className="for-busy-users-container">
        {/* Pill Badge - Centered */}
        <div className="section-pill-busy">
          <span className="pill-text-busy">For Busy Users</span>
        </div>

        {/* Content Wrapper */}
        <div className="content-wrapper-busy">
          {/* Left Content */}
          <div className="left-content-busy">
            {/* Header Group - Heading + Subtitle */}
            <div className="header-group-busy">
              <h2 className="main-heading-busy">Busy? We've Got The Rest.</h2>
              <p className="subtitle-busy">Time Is Money. Save Both.</p>
            </div>

            {/* Description */}
            <p className="description-busy">
              Zero hassle, zero risk. We manage everything from verification to logistics,
              so you never have to negotiate or meet a stranger.
            </p>

            {/* Features List */}
            <div className="features-list-busy">
              {/* Feature 1 - Zero Hassle */}
              <div className="feature-item-busy">
                <img src="/assets/for-busy-users/convertshape-2.png" alt="Zero Hassle" className="feature-icon-busy" />
                <div className="feature-text-busy">
                  <h4 className="feature-title-busy">Zero Hassle</h4>
                  <p className="feature-description-busy">
                    We take care of pickup, delivery, and coordination end-to-end.
                  </p>
                </div>
              </div>

              {/* Feature 2 - Save Time */}
              <div className="feature-item-busy">
                <img src="/assets/for-busy-users/timer.png" alt="Save Time" className="feature-icon-busy" />
                <div className="feature-text-busy">
                  <h4 className="feature-title-busy">Save Time</h4>
                  <p className="feature-description-busy">
                    List in seconds. Buy with confidence.<br />No endless messaging.
                  </p>
                </div>
              </div>

              {/* Feature 3 - Safe & Secure */}
              <div className="feature-item-busy">
                <img src="/assets/for-busy-users/shield-tick.png" alt="Safe & Secure" className="feature-icon-busy" />
                <div className="feature-text-busy">
                  <h4 className="feature-title-busy">Safe & Secure</h4>
                  <p className="feature-description-busy">
                    Items verified by us, payments<br />protected by secure escrow.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Illustration */}
          <div className="illustration-container-busy">
            {/* Background SVG */}
            <img
              src="/assets/for-busy-users/BACKGROUND.svg"
              alt="Background"
              className="background-illustration-busy"
            />

            {/* Person Illustration */}
            <img
              src="/assets/for-busy-users/OBJECTS.png"
              alt="Person"
              className="person-illustration-busy"
            />
          </div>
        </div>

        {/* Call to Action Button - Centered Below Content */}
        <button className="cta-button-busy">
          <span className="cta-button-text">Let<span className="cta-button-text-bold">BUSEit</span>handle it.</span>
          <img
            src="/assets/for-busy-users/arrow-circle-right.png"
            alt="Arrow"
            className="cta-button-arrow"
          />
        </button>
      </div>
    </section>
  );
};

export default ForBusyUsers;
