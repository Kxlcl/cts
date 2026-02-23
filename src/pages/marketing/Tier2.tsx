import Footer from '../../components/Footer'
import './Tier2.css'

function Tier2() {
  return (
    <>
      <div className="tier2-page">
        <header className="tier2-header">
          <div className="tier2-logo">YOUR BUSINESS</div>
          <nav className="tier2-nav">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <section className="tier2-hero">
          <div className="tier2-hero-text">
            <h1>Your Business,<br /><span>Elevated.</span></h1>
            <p>We help companies of all sizes achieve their goals through smart strategy and dedicated service.</p>
            <a href="#contact" className="tier2-cta">Work With Us</a>
          </div>
        </section>

        <section id="services" className="tier2-services">
          <h2>WHAT WE OFFER</h2>
          <div className="tier2-services-grid">
            <div className="tier2-service-card">
              <div className="tier2-service-icon">◆</div>
              <h3>Strategy</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            </div>
            <div className="tier2-service-card">
              <div className="tier2-service-icon">◆</div>
              <h3>Design</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            </div>
            <div className="tier2-service-card">
              <div className="tier2-service-icon">◆</div>
              <h3>Growth</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            </div>
          </div>
        </section>

        <section id="about" className="tier2-about">
          <div className="tier2-about-image"></div>
          <div className="tier2-about-text">
            <h2>WHO WE ARE</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </section>

        <section id="contact" className="tier2-contact">
          <h2>GET IN TOUCH</h2>
          <p>We'd love to hear from you. Send us a message and we'll respond within 24 hours.</p>
          <form className="tier2-form">
            <div className="tier2-form-row">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
            </div>
            <textarea placeholder="Your Message" rows={5}></textarea>
            <button type="submit">SEND MESSAGE</button>
          </form>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default Tier2
