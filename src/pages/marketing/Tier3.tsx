import Footer from '../../components/Footer'
import './Tier3.css'

function Tier3() {
  return (
    <>
      <div className="tier3-page">
        <header className="tier3-header">
          <div className="tier3-logo">YOUR BUSINESS</div>
          <nav className="tier3-nav">
            <a href="#services">Services</a>
            <a href="#work">Our Work</a>
            <a href="#team">Team</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <section className="tier3-hero">
          <div className="tier3-hero-content">
            <p className="tier3-hero-label">FULL-SERVICE AGENCY</p>
            <h1>Where Vision<br />Meets Execution.</h1>
            <p className="tier3-hero-desc">We partner with forward-thinking companies to build digital products that define industries.</p>
            <div className="tier3-hero-actions">
              <a href="#contact" className="tier3-btn-primary">Start a Project</a>
              <a href="#work" className="tier3-btn-secondary">View Our Work</a>
            </div>
          </div>
          <div className="tier3-hero-image"></div>
        </section>

        <section id="services" className="tier3-services">
          <div className="tier3-section-label">WHAT WE DO</div>
          <h2>End-to-end digital solutions for growing businesses.</h2>
          <div className="tier3-services-grid">
            <div className="tier3-service">
              <h3>Web Development</h3>
              <p>Custom-built websites and web applications engineered for performance and scale.</p>
            </div>
            <div className="tier3-service">
              <h3>Brand Strategy</h3>
              <p>Identity systems, messaging, and positioning that make you impossible to ignore.</p>
            </div>
            <div className="tier3-service">
              <h3>Digital Marketing</h3>
              <p>Data-driven campaigns across all channels to grow your audience and revenue.</p>
            </div>
            <div className="tier3-service">
              <h3>UX/UI Design</h3>
              <p>User-centered interfaces that are beautiful, intuitive, and conversion-focused.</p>
            </div>
          </div>
        </section>

        <section id="work" className="tier3-work">
          <div className="tier3-section-label">RECENT WORK</div>
          <h2>Projects we're proud of.</h2>
          <div className="tier3-work-grid">
            <div className="tier3-work-item tier3-work-large">
              <div className="tier3-work-overlay">
                <h3>Project Alpha</h3>
                <p>Brand Identity + Web</p>
              </div>
            </div>
            <div className="tier3-work-item">
              <div className="tier3-work-overlay">
                <h3>Project Beta</h3>
                <p>E-Commerce</p>
              </div>
            </div>
            <div className="tier3-work-item">
              <div className="tier3-work-overlay">
                <h3>Project Gamma</h3>
                <p>Web App</p>
              </div>
            </div>
          </div>
        </section>

        <section id="team" className="tier3-team">
          <div className="tier3-section-label">OUR TEAM</div>
          <h2>The people behind the work.</h2>
          <div className="tier3-team-grid">
            <div className="tier3-team-card">
              <div className="tier3-team-avatar"></div>
              <h3>Jane Smith</h3>
              <p>Creative Director</p>
            </div>
            <div className="tier3-team-card">
              <div className="tier3-team-avatar"></div>
              <h3>John Doe</h3>
              <p>Lead Developer</p>
            </div>
            <div className="tier3-team-card">
              <div className="tier3-team-avatar"></div>
              <h3>Sara Lee</h3>
              <p>Strategy Lead</p>
            </div>
          </div>
        </section>

        <section id="contact" className="tier3-contact">
          <div className="tier3-contact-inner">
            <h2>Ready to build something great?</h2>
            <p>Tell us about your project and we'll get back to you within one business day.</p>
            <form className="tier3-form">
              <div className="tier3-form-row">
                <div className="tier3-form-group">
                  <label>Name</label>
                  <input type="text" placeholder="Your full name" />
                </div>
                <div className="tier3-form-group">
                  <label>Email</label>
                  <input type="email" placeholder="your@email.com" />
                </div>
              </div>
              <div className="tier3-form-group">
                <label>What are you looking for?</label>
                <select>
                  <option>Web Development</option>
                  <option>Brand Strategy</option>
                  <option>Digital Marketing</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="tier3-form-group">
                <label>Tell us more</label>
                <textarea placeholder="Describe your project..." rows={5}></textarea>
              </div>
              <button type="submit">SEND MESSAGE</button>
            </form>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default Tier3
