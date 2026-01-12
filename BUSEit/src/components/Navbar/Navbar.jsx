import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import './Navbar.mobile.css';
import './Navbar.menu.css';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    // Close mobile menu after clicking
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleContactClick = () => {
    navigate('/join-waitlist');
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo */}
          <div className="navbar-logo">
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>
              <img
                src="/logos/BUSEit..svg"
                alt="BUSEit Logo"
                className="logo-image"
              />
            </Link>
          </div>

          {/* Hamburger Menu Button (Mobile Only) */}
          <button
            className={`hamburger-menu ${mobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span className="hamburger-line"></span>
          </button>

          {/* Navigation Links (Desktop) */}
          <div className="navbar-links">
            <button
              className="nav-link"
              onClick={() => scrollToSection('how-it-works')}
            >
              How It Works
            </button>

            <button
              className="nav-link"
              onClick={() => scrollToSection('for-busy-users')}
            >
              For Busy Users
            </button>

            <button
              className="nav-link"
              onClick={() => scrollToSection('features')}
            >
              Features
            </button>

            <button
              className="nav-link"
              onClick={() => scrollToSection('faqs')}
            >
              FAQs
            </button>
          </div>

          {/* Contact Button (Desktop) */}
          <Link to="/join-waitlist" className="contact-button">
            Contact
          </Link>
        </div>
      </nav>

      {/* Mobile Menu Backdrop */}
      <div
        className={`mobile-menu-backdrop ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      ></div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <button
          className="mobile-nav-link"
          onClick={() => scrollToSection('how-it-works')}
        >
          How It Works
        </button>

        <button
          className="mobile-nav-link"
          onClick={() => scrollToSection('for-busy-users')}
        >
          For Busy Users
        </button>

        <button
          className="mobile-nav-link"
          onClick={() => scrollToSection('features')}
        >
          Features
        </button>

        <button
          className="mobile-nav-link"
          onClick={() => scrollToSection('faqs')}
        >
          FAQs
        </button>

        <button
          className="mobile-contact-button"
          onClick={handleContactClick}
        >
          Contact
        </button>
      </div>
    </>
  );
};

export default Navbar;
