import Footer from '../../components/Footer'
import './Tier2B.css'

function Tier2B() {
  return (
    <>
      <div className="t2b-page">
        <header className="t2b-header">
          <div className="t2b-logo">YOUR BUSINESS</div>
          <nav className="t2b-nav">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <section className="t2b-hero">
          <div className="t2b-hero-badge">SINCE 2010</div>
          <h1 className="t2b-hero-title">CRAFTING<br />EXPERIENCES<br />THAT LAST.</h1>
          <div className="t2b-hero-bottom">
            <p>Full-service creative studio built for modern brands.</p>
            <a href="#contact" className="t2b-hero-cta">START A PROJECT</a>
          </div>
        </section>

        <section id="services" className="t2b-services">
          <div className="t2b-services-header">
            <h2>OUR SERVICES</h2>
            <p>Everything you need to grow your brand.</p>
          </div>
          <div className="t2b-services-list">
            <div className="t2b-service-item">
              <span>01</span>
              <div>
                <h3>Brand Identity</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
              </div>
            </div>
            <div className="t2b-service-item">
              <span>02</span>
              <div>
                <h3>Web Design</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
              </div>
            </div>
            <div className="t2b-service-item">
              <span>03</span>
              <div>
                <h3>Marketing</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
              </div>
            </div>
            <div className="t2b-service-item">
              <span>04</span>
              <div>
                <h3>Consulting</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="t2b-about">
          <div className="t2b-about-content">
            <h2>ABOUT US</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
          </div>
          <div className="t2b-about-stat-block">
            <div className="t2b-stat">
              <span className="t2b-stat-num">10+</span>
              <span className="t2b-stat-label">Years Experience</span>
            </div>
            <div className="t2b-stat">
              <span className="t2b-stat-num">200+</span>
              <span className="t2b-stat-label">Projects Delivered</span>
            </div>
            <div className="t2b-stat">
              <span className="t2b-stat-num">98%</span>
              <span className="t2b-stat-label">Client Satisfaction</span>
            </div>
          </div>
        </section>

        <section id="contact" className="t2b-contact">
          <h2>LET'S WORK<br />TOGETHER.</h2>
          <a href="mailto:hello@yourbusiness.com" className="t2b-contact-link">hello@yourbusiness.com</a>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default Tier2B
