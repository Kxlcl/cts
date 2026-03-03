import './Tier2B.css'

function Tier2B() {
  return (
    <div className="t2b-page">
        <header className="t2b-header">
          <div className="t2b-logo">HealthGuard Insurance</div>
        </header>

        <section className="t2b-hero">
          <div className="t2b-hero-content">
            <h1 className="t2b-hero-title">Healthcare Coverage<br />You Can Trust</h1>
            <p className="t2b-hero-subtitle">
              Comprehensive health insurance plans designed for individuals, families, and businesses.
              Affordable coverage with nationwide network.
            </p>
            <a href="#contact" className="t2b-hero-cta">GET A FREE QUOTE</a>
          </div>
        </section>

        <section id="plans" className="t2b-plans">
          <h2>OUR PLANS</h2>
          <div className="t2b-plans-grid">
            <div className="t2b-plan-card">
              <h3>Essential</h3>
              <div className="t2b-plan-price">$199<span>/month</span></div>
              <ul>
                <li>✓ Preventive care</li>
                <li>✓ Emergency services</li>
                <li>✓ Generic prescriptions</li>
                <li>✓ Telehealth visits</li>
              </ul>
              <button className="t2b-plan-btn">Choose Plan</button>
            </div>
            <div className="t2b-plan-card t2b-plan-featured">
              <div className="t2b-plan-badge">MOST POPULAR</div>
              <h3>Complete</h3>
              <div className="t2b-plan-price">$349<span>/month</span></div>
              <ul>
                <li>✓ Everything in Essential</li>
                <li>✓ Specialist visits</li>
                <li>✓ Mental health services</li>
                <li>✓ Dental & vision coverage</li>
                <li>✓ All prescriptions</li>
              </ul>
              <button className="t2b-plan-btn">Choose Plan</button>
            </div>
            <div className="t2b-plan-card">
              <h3>Premium</h3>
              <div className="t2b-plan-price">$549<span>/month</span></div>
              <ul>
                <li>✓ Everything in Complete</li>
                <li>✓ $0 deductible</li>
                <li>✓ International coverage</li>
                <li>✓ Concierge service</li>
                <li>✓ Wellness programs</li>
              </ul>
              <button className="t2b-plan-btn">Choose Plan</button>
            </div>
          </div>
        </section>

        <section id="coverage" className="t2b-coverage">
          <h2>COMPREHENSIVE COVERAGE</h2>
          <p className="t2b-coverage-subtitle">We've got you covered for life's unexpected moments</p>
          <div className="t2b-coverage-grid">
            <div className="t2b-coverage-item">
              <div className="t2b-coverage-icon">🏥</div>
              <h3>Hospital Care</h3>
              <p>Full coverage for inpatient and outpatient services at 10,000+ facilities nationwide.</p>
            </div>
            <div className="t2b-coverage-item">
              <div className="t2b-coverage-icon">💊</div>
              <h3>Prescription Drugs</h3>
              <p>Access to a comprehensive formulary with low copays on all medications.</p>
            </div>
            <div className="t2b-coverage-item">
              <div className="t2b-coverage-icon">👨‍⚕️</div>
              <h3>Primary Care</h3>
              <p>Unlimited visits to your primary care physician with no referrals needed.</p>
            </div>
            <div className="t2b-coverage-item">
              <div className="t2b-coverage-icon">🦷</div>
              <h3>Dental & Vision</h3>
              <p>Complete dental and vision coverage included in select plans.</p>
            </div>
          </div>
        </section>

        <section id="why-us" className="t2b-why">
          <div className="t2b-why-content">
            <h2>WHY CHOOSE HEALTHGUARD?</h2>
            <p>
              For over 25 years, we've been protecting families with reliable, affordable healthcare coverage.
              Our commitment to exceptional service and comprehensive benefits sets us apart.
            </p>
            <div className="t2b-why-stats">
              <div className="t2b-why-stat">
                <h3>2M+</h3>
                <p>Members Protected</p>
              </div>
              <div className="t2b-why-stat">
                <h3>99.2%</h3>
                <p>Claims Approval Rate</p>
              </div>
              <div className="t2b-why-stat">
                <h3>24/7</h3>
                <p>Customer Support</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="t2b-contact">
          <h2>READY TO GET COVERED?</h2>
          <p>Get a personalized quote in under 2 minutes. No obligation.</p>
          <form className="t2b-contact-form">
            <div className="t2b-form-row">
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email Address" required />
            </div>
            <div className="t2b-form-row">
              <input type="tel" placeholder="Phone Number" />
              <select required>
                <option value="">Select Plan Type</option>
                <option value="individual">Individual</option>
                <option value="family">Family</option>
                <option value="business">Business</option>
              </select>
            </div>
            <button type="submit">GET MY FREE QUOTE</button>
          </form>
        </section>

        <footer className="t2b-footer">
          <div className="t2b-footer-content">
            <div className="t2b-footer-section">
              <h4>HEALTHGUARD INSURANCE</h4>
              <p>Trusted healthcare coverage for over 25 years. Protecting families nationwide.</p>
            </div>
            <div className="t2b-footer-section">
              <h4>RESOURCES</h4>
              <p>Find a Doctor</p>
              <p>Member Portal</p>
              <p>Claims Center</p>
            </div>
            <div className="t2b-footer-section">
              <h4>SUPPORT</h4>
              <p>support@healthguard.com</p>
              <p>1-800-HEALTH-1</p>
              <p>24/7 Customer Service</p>
            </div>
          </div>
          <div className="t2b-footer-bottom">
            <p>&copy; 2026 HealthGuard Insurance. All rights reserved.</p>
          </div>
        </footer>
      </div>
  )
}

export default Tier2B
