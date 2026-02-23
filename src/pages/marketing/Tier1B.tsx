import './Tier1B.css'

function Tier1B() {
  return (
    <div className="t1b-page">
      <header className="t1b-header">
        <div className="t1b-logo">YOUR BUSINESS</div>
      </header>

      <section className="t1b-hero">
        <div className="t1b-hero-inner">
          <p className="t1b-hero-tag">EST. 2024</p>
          <h1 className="t1b-hero-title">WE BUILD<br />THINGS THAT<br />MATTER.</h1>
          <a href="#contact" className="t1b-hero-cta">GET STARTED</a>
        </div>
      </section>

      <section className="t1b-features">
        <div className="t1b-features-grid">
          <div className="t1b-feature">
            <span className="t1b-feature-num">01</span>
            <h3>Quality First</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          </div>
          <div className="t1b-feature">
            <span className="t1b-feature-num">02</span>
            <h3>Built for You</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          </div>
          <div className="t1b-feature">
            <span className="t1b-feature-num">03</span>
            <h3>Always There</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="t1b-contact">
        <h2 className="t1b-contact-title">LET'S TALK</h2>
        <p className="t1b-contact-sub">Ready to get started? Reach out below.</p>
        <a href="mailto:hello@yourbusiness.com" className="t1b-contact-btn">hello@yourbusiness.com</a>
      </section>
    </div>
  )
}

export default Tier1B
