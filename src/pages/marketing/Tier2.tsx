import './Tier2.css'

function Tier2() {
  return (
    <div className="tier2-page">
        <header className="tier2-header">
          <div className="tier2-logo">EcoVolt Energy</div>
        </header>

        <section className="tier2-hero">
          <div className="tier2-hero-text">
            <h1>Powering a<br /><span>Sustainable Future</span></h1>
            <p>Clean energy solutions for homes and businesses. Join the renewable revolution.</p>
            <a href="#contact" className="tier2-cta">Get Started</a>
          </div>
        </section>

        <section id="solutions" className="tier2-solutions">
          <h2>OUR SOLUTIONS</h2>
          <div className="tier2-solutions-grid">
            <div className="tier2-solution-card">
              <div className="tier2-solution-icon">☀</div>
              <h3>Solar Power</h3>
              <p>Harness the sun's energy with cutting-edge solar panel technology. Reduce your carbon footprint while lowering energy costs.</p>
            </div>
            <div className="tier2-solution-card">
              <div className="tier2-solution-icon">🌬</div>
              <h3>Wind Energy</h3>
              <p>Small-scale wind turbines designed for residential and commercial applications. Reliable, sustainable power.</p>
            </div>
            <div className="tier2-solution-card">
              <div className="tier2-solution-icon">🔋</div>
              <h3>Energy Storage</h3>
              <p>Advanced battery systems store excess energy for use when you need it most. Maximize your energy independence.</p>
            </div>
          </div>
        </section>

        <section className="tier2-stats">
          <div className="tier2-stat">
            <h3>10,000+</h3>
            <p>Homes Powered</p>
          </div>
          <div className="tier2-stat">
            <h3>50MW</h3>
            <p>Clean Energy Generated</p>
          </div>
          <div className="tier2-stat">
            <h3>25,000</h3>
            <p>Tons CO₂ Reduced</p>
          </div>
        </section>

        <section id="mission" className="tier2-mission">
          <div className="tier2-mission-content">
            <h2>OUR MISSION</h2>
            <p>
              We believe everyone deserves access to clean, affordable energy. Our mission is to accelerate
              the transition to renewable power by making sustainable energy solutions accessible to homes
              and businesses everywhere.
            </p>
            <p>
              Since 2015, we've been installing solar panels, wind turbines, and energy storage systems
              that help reduce carbon emissions while saving our customers money on their energy bills.
            </p>
          </div>
          <div className="tier2-mission-image"></div>
        </section>

        <section id="contact" className="tier2-contact">
          <h2>LET'S TALK ABOUT YOUR ENERGY NEEDS</h2>
          <p>Get a free consultation and find out how much you can save with clean energy.</p>
          <form className="tier2-form">
            <div className="tier2-form-row">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="tier2-form-row">
              <input type="tel" placeholder="Phone Number" />
              <input type="text" placeholder="Zip Code" />
            </div>
            <textarea placeholder="Tell us about your property and energy goals..." rows={4}></textarea>
            <button type="submit">REQUEST CONSULTATION</button>
          </form>
        </section>

        <footer className="tier2-footer">
          <div className="tier2-footer-content">
            <div className="tier2-footer-section">
              <h4>ECOVOLT ENERGY</h4>
              <p>Leading the renewable energy revolution with sustainable solutions for a cleaner tomorrow.</p>
            </div>
            <div className="tier2-footer-section">
              <h4>SERVICES</h4>
              <p>Solar Power Installation</p>
              <p>Wind Energy Systems</p>
              <p>Energy Storage Solutions</p>
            </div>
            <div className="tier2-footer-section">
              <h4>CONTACT</h4>
              <p>info@ecovoltenergy.com</p>
              <p>(555) 789-0123</p>
            </div>
          </div>
          <div className="tier2-footer-bottom">
            <p>&copy; 2026 EcoVolt Energy. All rights reserved.</p>
          </div>
        </footer>
      </div>
  )
}

export default Tier2
