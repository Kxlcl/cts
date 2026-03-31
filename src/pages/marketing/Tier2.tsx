import { useNavigate } from 'react-router-dom'
import './Tier2.css'

function Tier2() {
  const navigate = useNavigate()

  return (
    <div className="tier2-page">
        <div className="sample-navigation-header">
          <button className="back-to-marketing-btn" onClick={() => navigate('/?marketing=true')}>
            ← Back to Home
          </button>
          <h2 className="sample-page-title">TIER 2 SAMPLE 1</h2>
        </div>
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

        <section id="team" className="tier2-team">
          <h2>MEET THE TEAM</h2>
          <div className="tier2-team-grid">
            <div className="tier2-team-card">
              <div className="tier2-team-photo"></div>
              <h3>Sarah Mitchell</h3>
              <p className="tier2-team-role">CEO & Founder</p>
              <p className="tier2-team-bio">Leading EcoVolt's vision for a sustainable energy future with 15+ years of renewable energy expertise.</p>
            </div>
            <div className="tier2-team-card">
              <div className="tier2-team-photo"></div>
              <h3>David Chen</h3>
              <p className="tier2-team-role">Chief Technology Officer</p>
              <p className="tier2-team-bio">Innovating cutting-edge solar and energy storage solutions to maximize efficiency and performance.</p>
            </div>
            <div className="tier2-team-card">
              <div className="tier2-team-photo"></div>
              <h3>Emily Rodriguez</h3>
              <p className="tier2-team-role">Head of Operations</p>
              <p className="tier2-team-bio">Ensuring seamless project execution and customer satisfaction across all installations.</p>
            </div>
            <div className="tier2-team-card">
              <div className="tier2-team-photo"></div>
              <h3>Michael Johnson</h3>
              <p className="tier2-team-role">Lead Engineer</p>
              <p className="tier2-team-bio">Designing custom renewable energy systems tailored to each client's unique needs and goals.</p>
            </div>
            <div className="tier2-team-card">
              <div className="tier2-team-photo"></div>
              <h3>Lisa Anderson</h3>
              <p className="tier2-team-role">Customer Success Manager</p>
              <p className="tier2-team-bio">Building lasting relationships and ensuring every client achieves their sustainability objectives.</p>
            </div>
            <div className="tier2-team-card">
              <div className="tier2-team-photo"></div>
              <h3>James Park</h3>
              <p className="tier2-team-role">Installation Director</p>
              <p className="tier2-team-bio">Overseeing all field operations with a commitment to safety, quality, and timely completion.</p>
            </div>
            <div className="tier2-team-card">
              <div className="tier2-team-photo"></div>
              <h3>Amanda Foster</h3>
              <p className="tier2-team-role">Finance Director</p>
              <p className="tier2-team-bio">Making renewable energy affordable through innovative financing and incentive programs.</p>
            </div>
            <div className="tier2-team-card">
              <div className="tier2-team-photo"></div>
              <h3>Ryan Williams</h3>
              <p className="tier2-team-role">Marketing Director</p>
              <p className="tier2-team-bio">Spreading awareness about sustainable energy and connecting communities with clean power solutions.</p>
            </div>
          </div>
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
