import Footer from '../../components/Footer'
import './Tier3B.css'

function Tier3B() {
  return (
    <>
      <div className="t3b-page">
        <header className="t3b-header">
          <div className="t3b-logo">YOUR BUSINESS</div>
          <nav className="t3b-nav">
            <a href="#services">Services</a>
            <a href="#work">Work</a>
            <a href="#team">Team</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <section className="t3b-hero">
          <h1 className="t3b-hero-title">WE MAKE<br />THE FUTURE<br />HAPPEN.</h1>
          <div className="t3b-hero-side">
            <p>Award-winning creative studio specializing in digital experiences, branding, and growth strategy.</p>
            <a href="#contact" className="t3b-hero-cta">LET'S TALK �</a>
          </div>
        </section>

        <div className="t3b-ticker">
          <span>BRAND IDENTITY</span>
          <span>�</span>
          <span>WEB DESIGN</span>
          <span>�</span>
          <span>DIGITAL MARKETING</span>
          <span>�</span>
          <span>UX/UI</span>
          <span>�</span>
          <span>DEVELOPMENT</span>
          <span>�</span>
        </div>

        <section id="services" className="t3b-services">
          <div className="t3b-services-left">
            <div className="t3b-section-tag">SERVICES</div>
            <h2>Everything<br />you need.</h2>
          </div>
          <div className="t3b-services-right">
            <div className="t3b-service-row">
              <h3>Brand Identity</h3>
              <p>Strategy, identity systems, and positioning that set you apart from the competition.</p>
            </div>
            <div className="t3b-service-row">
              <h3>Web Design & Dev</h3>
              <p>Pixel-perfect, high-performance websites and applications built for results.</p>
            </div>
            <div className="t3b-service-row">
              <h3>Content & SEO</h3>
              <p>Content strategies and search optimization that bring the right people to you.</p>
            </div>
            <div className="t3b-service-row">
              <h3>Growth Marketing</h3>
              <p>Paid media, analytics, and conversion optimization to maximize your ROI.</p>
            </div>
          </div>
        </section>

        <section id="work" className="t3b-work">
          <div className="t3b-section-tag">SELECTED WORK</div>
          <div className="t3b-work-list">
            <div className="t3b-work-row">
              <span className="t3b-work-num">01</span>
              <span className="t3b-work-title">Project Alpha</span>
              <span className="t3b-work-tag">Brand + Web</span>
              <span className="t3b-work-year">2024</span>
            </div>
            <div className="t3b-work-row">
              <span className="t3b-work-num">02</span>
              <span className="t3b-work-title">Project Beta</span>
              <span className="t3b-work-tag">E-Commerce</span>
              <span className="t3b-work-year">2024</span>
            </div>
            <div className="t3b-work-row">
              <span className="t3b-work-num">03</span>
              <span className="t3b-work-title">Project Gamma</span>
              <span className="t3b-work-tag">Web App</span>
              <span className="t3b-work-year">2023</span>
            </div>
            <div className="t3b-work-row">
              <span className="t3b-work-num">04</span>
              <span className="t3b-work-title">Project Delta</span>
              <span className="t3b-work-tag">Marketing</span>
              <span className="t3b-work-year">2023</span>
            </div>
          </div>
        </section>

        <section id="team" className="t3b-team">
          <div className="t3b-section-tag">TEAM</div>
          <h2>Who's behind it all.</h2>
          <div className="t3b-team-grid">
            <div className="t3b-team-member">
              <div className="t3b-team-photo"></div>
              <div className="t3b-team-info">
                <h3>Jane Smith</h3>
                <p>Creative Director</p>
              </div>
            </div>
            <div className="t3b-team-member">
              <div className="t3b-team-photo"></div>
              <div className="t3b-team-info">
                <h3>John Doe</h3>
                <p>Lead Developer</p>
              </div>
            </div>
            <div className="t3b-team-member">
              <div className="t3b-team-photo"></div>
              <div className="t3b-team-info">
                <h3>Sara Lee</h3>
                <p>Strategy Lead</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="t3b-contact">
          <h2>START A PROJECT.</h2>
          <p>We work with brands who want to do something meaningful. Let's talk.</p>
          <a href="mailto:hello@yourbusiness.com" className="t3b-contact-email">hello@yourbusiness.com</a>
          <div className="t3b-contact-divider"></div>
          <form className="t3b-form">
            <input type="text" placeholder="Your name" />
            <input type="email" placeholder="Your email" />
            <textarea placeholder="Tell us about your project" rows={4}></textarea>
            <button type="submit">SEND �</button>
          </form>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default Tier3B
