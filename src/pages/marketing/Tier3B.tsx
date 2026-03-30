import { useState } from 'react'
import './Tier3B.css'

type Page = 'home' | 'collections' | 'about' | 'appointments' | 'contact'

function Tier3B() {
  const [currentPage, setCurrentPage] = useState<Page>('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <section className="t3b-hero">
            <div className="t3b-hero-content">
              <p className="t3b-season">BRIDAL COUTURE</p>
              <h1>WHERE DREAMS<br />BECOME REALITY</h1>
              <p className="t3b-tagline">Find the wedding dress of your dreams at our boutique</p>
              <button onClick={() => setCurrentPage('collections')} className="t3b-cta">EXPLORE COLLECTIONS</button>
            </div>
          </section>
        )

      case 'collections':
        return (
          <>
            <section className="t3b-categories">
              <div className="t3b-section-tag">DISCOVER YOUR PERFECT DRESS</div>
              <h2>Our Collections</h2>
              <div className="t3b-category-grid">
                <div className="t3b-category">
                  <div className="t3b-category-image"></div>
                  <h3>Ball Gown</h3>
                  <p>Classic princess silhouette with full skirt</p>
                </div>
                <div className="t3b-category">
                  <div className="t3b-category-image"></div>
                  <h3>A-Line</h3>
                  <p>Timeless and flattering for every body type</p>
                </div>
                <div className="t3b-category">
                  <div className="t3b-category-image"></div>
                  <h3>Mermaid</h3>
                  <p>Fitted silhouette that flares at the knee</p>
                </div>
                <div className="t3b-category">
                  <div className="t3b-category-image"></div>
                  <h3>Sheath</h3>
                  <p>Sleek and sophisticated modern elegance</p>
                </div>
                <div className="t3b-category">
                  <div className="t3b-category-image"></div>
                  <h3>Bohemian</h3>
                  <p>Relaxed and romantic with flowing fabrics</p>
                </div>
                <div className="t3b-category">
                  <div className="t3b-category-image"></div>
                  <h3>Vintage</h3>
                  <p>Inspired by timeless classic designs</p>
                </div>
              </div>
            </section>

            <section className="t3b-featured">
              <div className="t3b-section-tag">NEW ARRIVALS</div>
              <h2>Latest Collection</h2>
              <div className="t3b-product-grid">
                <div className="t3b-product">
                  <div className="t3b-product-image"></div>
                  <div className="t3b-product-info">
                    <h3>Aurora</h3>
                    <p className="t3b-product-desc">Romantic lace ball gown</p>
                    <p className="t3b-product-price">$3,200</p>
                  </div>
                </div>
                <div className="t3b-product">
                  <div className="t3b-product-image"></div>
                  <div className="t3b-product-info">
                    <h3>Serenity</h3>
                    <p className="t3b-product-desc">Classic A-line with train</p>
                    <p className="t3b-product-price">$2,800</p>
                  </div>
                </div>
                <div className="t3b-product">
                  <div className="t3b-product-image"></div>
                  <div className="t3b-product-info">
                    <h3>Valencia</h3>
                    <p className="t3b-product-desc">Elegant mermaid silhouette</p>
                    <p className="t3b-product-price">$3,500</p>
                  </div>
                </div>
                <div className="t3b-product">
                  <div className="t3b-product-image"></div>
                  <div className="t3b-product-info">
                    <h3>Celestia</h3>
                    <p className="t3b-product-desc">Bohemian lace gown</p>
                    <p className="t3b-product-price">$2,600</p>
                  </div>
                </div>
              </div>
            </section>
          </>
        )

      case 'about':
        return (
          <section className="t3b-philosophy">
            <div className="t3b-philosophy-content">
              <div className="t3b-section-tag">OUR STORY</div>
              <h2>A Tradition of Excellence</h2>
              <div className="t3b-about-layout">
                <div className="t3b-about-text">
                  <p>
                    For over 30 years, Bella Rosa Bridal has been helping brides find their perfect wedding dress.
                    Our boutique offers an intimate, personalized experience where every bride receives individual
                    attention and expert guidance.
                  </p>
                  <p>
                    We carefully curate our collections from the world's finest designers, ensuring that every gown
                    in our boutique meets our exacting standards for quality, craftsmanship, and timeless beauty.
                  </p>
                </div>
                <div className="t3b-about-image"></div>
              </div>
              <div className="t3b-philosophy-grid">
                <div className="t3b-philosophy-item">
                  <h3>Personalized Service</h3>
                  <p>Private appointments with experienced bridal consultants who understand your vision and help you find the perfect dress.</p>
                </div>
                <div className="t3b-philosophy-item">
                  <h3>Designer Collections</h3>
                  <p>Exclusive gowns from renowned designers, carefully selected to offer something special for every bride.</p>
                </div>
                <div className="t3b-philosophy-item">
                  <h3>Expert Alterations</h3>
                  <p>Our in-house seamstresses ensure your dress fits perfectly, with meticulous attention to every detail.</p>
                </div>
              </div>
            </div>
          </section>
        )

      case 'appointments':
        return (
          <section className="t3b-appointments">
            <div className="t3b-appointments-content">
              <div className="t3b-section-tag">BOOK YOUR VISIT</div>
              <h2>Schedule Your Appointment</h2>
              <p className="t3b-appointments-intro">
                Experience the magic of finding your dream dress in our private, luxurious boutique.
                Each appointment is 90 minutes of personalized attention.
              </p>
              <div className="t3b-appointment-info">
                <div className="t3b-info-card">
                  <h3>What to Expect</h3>
                  <ul>
                    <li>Private appointment with dedicated bridal consultant</li>
                    <li>Try on up to 10 gowns from our curated collection</li>
                    <li>Expert styling advice and accessory recommendations</li>
                    <li>Complimentary champagne and refreshments</li>
                    <li>Bring up to 3 guests to share the experience</li>
                  </ul>
                </div>
                <div className="t3b-info-card">
                  <h3>Booking Information</h3>
                  <p><strong>Appointment Duration:</strong> 90 minutes</p>
                  <p><strong>Weekday Appointments:</strong> Tuesday - Friday, 10am - 6pm</p>
                  <p><strong>Weekend Appointments:</strong> Saturday - Sunday, 10am - 5pm</p>
                  <p><strong>Closed:</strong> Mondays</p>
                  <button onClick={() => setCurrentPage('contact')} className="t3b-book-btn">
                    REQUEST APPOINTMENT
                  </button>
                </div>
              </div>
            </div>
          </section>
        )

      case 'contact':
        return (
          <section className="t3b-newsletter">
            <div className="t3b-newsletter-content">
              <div className="t3b-section-tag">GET IN TOUCH</div>
              <h2>Contact Us</h2>
              <p>Ready to find your dream dress? Fill out the form below to schedule an appointment or inquire about our collections.</p>
              <form className="t3b-newsletter-form">
                <div className="t3b-form-row">
                  <input type="text" placeholder="Your Name" required />
                  <input type="email" placeholder="Email Address" required />
                </div>
                <div className="t3b-form-row">
                  <input type="tel" placeholder="Phone Number" />
                  <input type="date" placeholder="Wedding Date" />
                </div>
                <textarea placeholder="Tell us about your vision..." rows={4}></textarea>
                <button type="submit">SEND REQUEST</button>
              </form>
              <div className="t3b-contact-details">
                <div className="t3b-contact-item">
                  <h3>Visit Our Boutique</h3>
                  <p>123 Main Street</p>
                  <p>Greenwich, CT 06830</p>
                </div>
                <div className="t3b-contact-item">
                  <h3>Contact</h3>
                  <p>hello@bellarosabridal.com</p>
                  <p>(203) 555-BRIDE</p>
                </div>
                <div className="t3b-contact-item">
                  <h3>Follow Us</h3>
                  <div className="t3b-newsletter-social">
                    <a href="#">Instagram</a>
                    <span>•</span>
                    <a href="#">Pinterest</a>
                    <span>•</span>
                    <a href="#">Facebook</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )

      default:
        return null
    }
  }

  return (
    <div className="t3b-page">
      <header className="t3b-header">
        <div className="t3b-logo" onClick={() => setCurrentPage('home')} style={{ cursor: 'pointer' }}>
          BELLA ROSA BRIDAL
        </div>
        <nav className="t3b-nav">
          <a onClick={() => setCurrentPage('collections')} className={currentPage === 'collections' ? 'active' : ''}>Collections</a>
          <a onClick={() => setCurrentPage('about')} className={currentPage === 'about' ? 'active' : ''}>About</a>
          <a onClick={() => setCurrentPage('appointments')} className={currentPage === 'appointments' ? 'active' : ''}>Appointments</a>
          <a onClick={() => setCurrentPage('contact')} className={currentPage === 'contact' ? 'active' : ''}>Contact</a>
        </nav>
      </header>

      {renderPage()}

      <footer className="t3b-footer">
        <div className="t3b-footer-content">
          <div className="t3b-footer-section">
            <h4>BELLA ROSA BRIDAL</h4>
            <p>Creating unforgettable moments for brides since 1994. Your dream dress awaits.</p>
          </div>
          <div className="t3b-footer-section">
            <h4>BOUTIQUE HOURS</h4>
            <p>Tue - Fri: 10am - 6pm</p>
            <p>Sat - Sun: 10am - 5pm</p>
            <p>By Appointment Only</p>
          </div>
          <div className="t3b-footer-section">
            <h4>CONNECT</h4>
            <p>hello@bellarosabridal.com</p>
            <p>(203) 555-BRIDE</p>
            <p>123 Main St, Greenwich, CT</p>
          </div>
        </div>
        <div className="t3b-footer-bottom">
          <p>&copy; 2026 Bella Rosa Bridal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Tier3B
