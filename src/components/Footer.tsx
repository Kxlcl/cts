import './Footer.css'

function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="/images/CT-02.png" alt="CaliTech Solutions" />
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: <a href="mailto:support@calitech-solutions.com">support@calitech-solutions.com</a></p>
          <p>Phone: <a href="tel:+16618056123">(661) 805-6123</a></p>
          <p>Website: <a href="https://www.calitech-solutions.com" target="_blank" rel="noopener noreferrer">www.calitech-solutions.com</a></p>
        </div>

        <div className="footer-section footer-hours">
          <h3>Business Hours</h3>
          <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
          <p>Saturday - Sunday: Closed</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
