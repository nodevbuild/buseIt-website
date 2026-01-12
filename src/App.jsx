import './App.css'

function App() {
  return (
    <div className="app-container">
      {/* Fixed background pattern layer */}
      <div className="background-pattern" aria-hidden="true"></div>

      {/* Content layer */}
      <div className="content">
        {/* Logo positioned exactly per Figma specs */}
        <div className="logo-container">
          <img
            src="/images/BUSEit..svg"
            alt="BUSEit - Buy & Sell Everything Preloved"
            width="136"
            height="31"
          />
        </div>

        {/* Hero text - BUY & SELL */}
        <div className="hero-text-container">
          <img
            src="/images/Buy&Sell.svg"
            alt="BUY & SELL EVERYTHING PRELOVED"
            width="265.56"
            height="324.35"
          />
        </div>

        {/* Tagline */}
        <p className="tagline">
          aka your trusted second hand marketplace
        </p>

        {/* CTA Button */}
        <button className="cta-button">
          <span>Get Started</span>
          <img
            src="/images/arrow-circle-right.svg"
            alt=""
            className="cta-button-icon"
          />
        </button>

        {/* Footer Icons */}
        <div className="footer-icons">
          <button className="icon-button" aria-label="Jobs">
            <img src="/images/icons/briefcase.svg" alt="Jobs" className="icon-svg" />
          </button>
          <button className="icon-button" aria-label="Q&A">
            <img src="/images/icons/q&a.svg" alt="Q&A" className="icon-svg" />
          </button>
          <button className="icon-button" aria-label="Terms & Conditions">
            <img src="/images/icons/t&c.svg" alt="T&C" className="icon-svg" />
          </button>
          <button className="icon-button" aria-label="Contact">
            <img src="/images/icons/contact.svg" alt="Contact" className="icon-svg" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
