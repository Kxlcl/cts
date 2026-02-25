import { useState } from 'react'
import './Tier3B.css'

type Page = 'home' | 'collections' | 'lookbook' | 'about' | 'contact'

function Tier3B() {
  const [currentPage, setCurrentPage] = useState<Page>('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <section className="t3b-hero">
            <div className="t3b-hero-content">
              <p className="t3b-season">SPRING / SUMMER 2026</p>
              <h1>TIMELESS<br />ELEGANCE</h1>
              <p className="t3b-tagline">Where sophistication meets modern minimalism</p>
              <button onClick={() => setCurrentPage('collections')} className="t3b-cta">EXPLORE COLLECTION</button>
            </div>
          </section>
        )

      case 'collections':
        return (
          <>
            <section className="t3b-categories">
              <div className="t3b-section-tag">SHOP BY CATEGORY</div>
              <div className="t3b-category-grid">
                <div className="t3b-category">
                  <div className="t3b-category-image"></div>
                  <h3>Ready-to-Wear</h3>
                  <p>Curated pieces for everyday luxury</p>
                </div>
                <div className="t3b-category">
                  <div className="t3b-category-image"></div>
                  <h3>Evening Wear</h3>
                  <p>Statement pieces for special occasions</p>
                </div>
                <div className="t3b-category">
                  <div className="t3b-category-image"></div>
                  <h3>Accessories</h3>
                  <p>Complete your look with timeless details</p>
                </div>
              </div>
            </section>

            <section className="t3b-featured">
              <div className="t3b-section-tag">NEW ARRIVALS</div>
              <h2>Latest From The Runway</h2>
              <div className="t3b-product-grid">
                <div className="t3b-product">
                  <div className="t3b-product-image"></div>
                  <div className="t3b-product-info">
                    <h3>Silk Blazer</h3>
                    <p className="t3b-product-price">$895</p>
                  </div>
                </div>
                <div className="t3b-product">
                  <div className="t3b-product-image"></div>
                  <div className="t3b-product-info">
                    <h3>Tailored Trousers</h3>
                    <p className="t3b-product-price">$425</p>
                  </div>
                </div>
                <div className="t3b-product">
                  <div className="t3b-product-image"></div>
                  <div className="t3b-product-info">
                    <h3>Cashmere Sweater</h3>
                    <p className="t3b-product-price">$675</p>
                  </div>
                </div>
                <div className="t3b-product">
                  <div className="t3b-product-image"></div>
                  <div className="t3b-product-info">
                    <h3>Leather Handbag</h3>
                    <p className="t3b-product-price">$1,250</p>
                  </div>
                </div>
              </div>
            </section>
          </>
        )

      case 'lookbook':
        return (
          <section className="t3b-lookbook">
            <div className="t3b-lookbook-content">
              <div className="t3b-lookbook-text">
                <div className="t3b-section-tag">SPRING 2026 LOOKBOOK</div>
                <h2>The Art of<br />Simplicity</h2>
                <p>
                  This season celebrates the beauty of understated elegance. Clean lines, luxurious fabrics,
                  and timeless silhouettes come together to create pieces that transcend trends.
                </p>
                <p>
                  Each garment is meticulously crafted in our Italian atelier, ensuring exceptional quality
                  and attention to detail that defines the Atelier Noir standard.
                </p>
                <button onClick={() => setCurrentPage('collections')} className="t3b-lookbook-btn">
                  SHOP THE COLLECTION
                </button>
              </div>
              <div className="t3b-lookbook-images">
                <div className="t3b-lookbook-img t3b-lookbook-large"></div>
                <div className="t3b-lookbook-img"></div>
              </div>
            </div>
          </section>
        )

      case 'about':
        return (
          <section className="t3b-philosophy">
            <div className="t3b-philosophy-content">
              <div className="t3b-section-tag">OUR PHILOSOPHY</div>
              <h2>Crafted for the Modern Woman</h2>
              <div className="t3b-philosophy-grid">
                <div className="t3b-philosophy-item">
                  <h3>Sustainable Luxury</h3>
                  <p>We believe in creating fashion that lasts—both in quality and style. Every piece is made with ethically sourced materials and produced in fair-trade facilities.</p>
                </div>
                <div className="t3b-philosophy-item">
                  <h3>Timeless Design</h3>
                  <p>Our collections are designed to transcend seasonal trends. We focus on classic silhouettes and versatile pieces that remain relevant year after year.</p>
                </div>
                <div className="t3b-philosophy-item">
                  <h3>Italian Craftsmanship</h3>
                  <p>Each garment is handcrafted in our Italian workshop by master artisans with decades of experience in haute couture.</p>
                </div>
              </div>
            </div>
          </section>
        )

      case 'contact':
        return (
          <section className="t3b-newsletter">
            <div className="t3b-newsletter-content">
              <h2>Join Our Atelier</h2>
              <p>Be the first to discover new collections, exclusive previews, and special events.</p>
              <form className="t3b-newsletter-form">
                <input type="email" placeholder="Enter your email address" />
                <button type="submit">SUBSCRIBE</button>
              </form>
              <div className="t3b-newsletter-social">
                <a href="#">Instagram</a>
                <span>•</span>
                <a href="#">Pinterest</a>
                <span>•</span>
                <a href="#">Facebook</a>
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
          ATELIER NOIR
        </div>
        <nav className="t3b-nav">
          <a onClick={() => setCurrentPage('collections')} className={currentPage === 'collections' ? 'active' : ''}>Collections</a>
          <a onClick={() => setCurrentPage('lookbook')} className={currentPage === 'lookbook' ? 'active' : ''}>Lookbook</a>
          <a onClick={() => setCurrentPage('about')} className={currentPage === 'about' ? 'active' : ''}>About</a>
          <a onClick={() => setCurrentPage('contact')} className={currentPage === 'contact' ? 'active' : ''}>Contact</a>
        </nav>
      </header>

      {renderPage()}

      <footer className="t3b-footer">
        <div className="t3b-footer-content">
          <div className="t3b-footer-section">
            <h4>ATELIER NOIR</h4>
            <p>Timeless elegance meets modern minimalism. Handcrafted in our Italian workshop since 2010.</p>
          </div>
          <div className="t3b-footer-section">
            <h4>CUSTOMER CARE</h4>
            <p>Shipping & Returns</p>
            <p>Size Guide</p>
            <p>care@ateliernoir.com</p>
          </div>
          <div className="t3b-footer-section">
            <h4>FOLLOW US</h4>
            <p>Instagram</p>
            <p>Pinterest</p>
            <p>Facebook</p>
          </div>
        </div>
        <div className="t3b-footer-bottom">
          <p>&copy; 2026 Atelier Noir. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Tier3B
