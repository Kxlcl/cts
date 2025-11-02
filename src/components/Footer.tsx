import './Footer.css'

function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="/logo2.png" alt="CaliTech Solutions" />
        </div>

        <div className="footer-section">
          <h3>Business Hours:</h3>
          <p>Mon–Fri: 10:00 AM – 9:00 PM</p>
          <p>Sat-Sun: 10:00 AM – 8:00 PM</p>
        </div>

        <div className="footer-section">
          <p>Email: <a href="mailto:support@calitech-solutions.com">support@calitech-solutions.com</a></p>
          <p>Phone: <a href="tel:+16618056123">(661) 805-6123</a></p>
          <p>Website: <a href="https://www.calitech-solutions.com" target="_blank" rel="noopener noreferrer">www.calitech-solutions.com</a></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
