import './Tier1B.css'

function Tier1B() {
  return (
    <div className="t1b-page">
      <header className="t1b-header">
        <div className="t1b-logo">BELLA CUCINA</div>
      </header>

      <section className="t1b-hero">
        <div className="t1b-hero-content">
          <h1 className="t1b-hero-title">Authentic Italian<br />Dining Experience</h1>
          <p className="t1b-hero-subtitle">Fresh ingredients. Traditional recipes. Modern ambiance.</p>
          <a href="#reservation" className="t1b-hero-cta">RESERVE A TABLE</a>
        </div>
      </section>

      <section id="about" className="t1b-about">
        <div className="t1b-about-content">
          <h2 className="t1b-section-title">Our Story</h2>
          <p>
            For over 20 years, Bella Cucina has been serving authentic Italian cuisine
            in the heart of the city. Our chef brings traditional recipes from Tuscany,
            combined with locally-sourced ingredients to create unforgettable dining experiences.
          </p>
          <p>
            Every dish is prepared with passion and attention to detail, ensuring each guest
            feels the warmth of Italian hospitality.
          </p>
        </div>
        <div className="t1b-about-image"></div>
      </section>

      <section id="reservation" className="t1b-reservation">
        <h2 className="t1b-section-title">Make a Reservation</h2>
        <p className="t1b-reservation-text">Open Tuesday - Sunday | 5:00 PM - 10:00 PM</p>
        <div className="t1b-contact-info">
          <p>(555) 123-4567</p>
          <p>reservations@bellacucina.com</p>
          <p>123 Main Street, Downtown</p>
        </div>
        <button className="t1b-reservation-btn">BOOK NOW</button>
      </section>

      <footer className="t1b-footer">
        <div className="t1b-footer-content">
          <div className="t1b-footer-section">
            <h4>BELLA CUCINA</h4>
            <p>Authentic Italian dining in the heart of the city.</p>
          </div>
          <div className="t1b-footer-section">
            <h4>HOURS</h4>
            <p>Tuesday - Sunday</p>
            <p>5:00 PM - 10:00 PM</p>
          </div>
          <div className="t1b-footer-section">
            <h4>CONTACT</h4>
            <p>(555) 123-4567</p>
            <p>reservations@bellacucina.com</p>
          </div>
        </div>
        <div className="t1b-footer-bottom">
          <p>&copy; 2026 Bella Cucina. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Tier1B
