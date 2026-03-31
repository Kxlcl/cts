import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Tier3.css'

type Page = 'home' | 'portfolio' | 'about' | 'exhibitions' | 'contact'

function Tier3() {
  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = useState<Page>('home')
  const [menuOpen, setMenuOpen] = useState(false)

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <section className="tier3-hero">
            <div className="tier3-hero-content">
              <h1>ISABELLA<br /><span>MARTINEZ</span></h1>
              <p className="tier3-hero-subtitle">Contemporary Visual Artist</p>
              <p className="tier3-hero-desc">Exploring the intersection of nature, memory, and identity through mixed media and installation art.</p>
              <button onClick={() => setCurrentPage('portfolio')} className="tier3-cta">View Portfolio</button>
            </div>
          </section>
        )

      case 'portfolio':
        return (
          <section className="tier3-portfolio">
            <div className="tier3-section-label">SELECTED WORKS</div>
            <h2>Portfolio</h2>
            <div className="tier3-portfolio-grid">
              <div className="tier3-artwork tier3-artwork-large">
                <div className="tier3-artwork-image"></div>
                <div className="tier3-artwork-info">
                  <h3>Echoes of Memory</h3>
                  <p>Mixed Media on Canvas, 2025</p>
                </div>
              </div>
              <div className="tier3-artwork">
                <div className="tier3-artwork-image"></div>
                <div className="tier3-artwork-info">
                  <h3>Urban Solitude</h3>
                  <p>Oil on Linen, 2025</p>
                </div>
              </div>
              <div className="tier3-artwork">
                <div className="tier3-artwork-image"></div>
                <div className="tier3-artwork-info">
                  <h3>Fragmented Light</h3>
                  <p>Acrylic & Gold Leaf, 2024</p>
                </div>
              </div>
              <div className="tier3-artwork">
                <div className="tier3-artwork-image"></div>
                <div className="tier3-artwork-info">
                  <h3>Still Waters</h3>
                  <p>Photography, 2024</p>
                </div>
              </div>
              <div className="tier3-artwork tier3-artwork-wide">
                <div className="tier3-artwork-image"></div>
                <div className="tier3-artwork-info">
                  <h3>Metamorphosis Series</h3>
                  <p>Installation Art, 2023</p>
                </div>
              </div>
              <div className="tier3-artwork">
                <div className="tier3-artwork-image"></div>
                <div className="tier3-artwork-info">
                  <h3>Whispers</h3>
                  <p>Charcoal on Paper, 2024</p>
                </div>
              </div>
            </div>
          </section>
        )

      case 'about':
        return (
          <section className="tier3-about">
            <div className="tier3-about-content">
              <div className="tier3-about-text">
                <div className="tier3-section-label">ABOUT THE ARTIST</div>
                <h2>Creating Meaning Through Art</h2>
                <p>
                  Isabella Martinez is a contemporary visual artist based in Brooklyn, New York. Her work explores
                  the delicate balance between nature and urban life, memory and present moment, individual identity
                  and collective consciousness.
                </p>
                <p>
                  Working primarily in mixed media, Isabella combines traditional painting techniques with found
                  objects, photography, and digital elements to create layered, textural pieces that invite viewers
                  to pause and reflect.
                </p>
                <p>
                  Her work has been exhibited in galleries across the United States and Europe, and is part of
                  several private collections. Isabella holds an MFA from Yale School of Art and a BFA from
                  Rhode Island School of Design.
                </p>
                <div className="tier3-artist-statement">
                  <h3>Artist Statement</h3>
                  <p>
                    "My work is an ongoing investigation into how we construct meaning from fragments—whether
                    they're memories, experiences, or the natural world around us. I'm drawn to the spaces
                    between things: between past and present, nature and artifice, chaos and order."
                  </p>
                </div>
              </div>
              <div className="tier3-about-image"></div>
            </div>
          </section>
        )

      case 'exhibitions':
        return (
          <section className="tier3-exhibitions">
            <div className="tier3-section-label">EXHIBITIONS</div>
            <h2>Shows & Events</h2>
            <div className="tier3-timeline">
              <div className="tier3-exhibition">
                <div className="tier3-exhibition-year">2026</div>
                <div className="tier3-exhibition-details">
                  <h3>Fragments of Tomorrow</h3>
                  <p className="tier3-exhibition-type">Solo Exhibition</p>
                  <p>Whitespace Gallery, New York, NY</p>
                  <p className="tier3-exhibition-date">Opening March 15, 2026</p>
                </div>
              </div>
              <div className="tier3-exhibition">
                <div className="tier3-exhibition-year">2025</div>
                <div className="tier3-exhibition-details">
                  <h3>Collective Consciousness</h3>
                  <p className="tier3-exhibition-type">Group Exhibition</p>
                  <p>Museum of Contemporary Art, Los Angeles, CA</p>
                  <p className="tier3-exhibition-date">September - November 2025</p>
                </div>
              </div>
              <div className="tier3-exhibition">
                <div className="tier3-exhibition-year">2025</div>
                <div className="tier3-exhibition-details">
                  <h3>Urban Nature</h3>
                  <p className="tier3-exhibition-type">Solo Exhibition</p>
                  <p>Saatchi Gallery, London, UK</p>
                  <p className="tier3-exhibition-date">June - August 2025</p>
                </div>
              </div>
              <div className="tier3-exhibition">
                <div className="tier3-exhibition-year">2024</div>
                <div className="tier3-exhibition-details">
                  <h3>Emerging Voices</h3>
                  <p className="tier3-exhibition-type">Group Exhibition</p>
                  <p>Guggenheim Museum, New York, NY</p>
                  <p className="tier3-exhibition-date">December 2024 - February 2025</p>
                </div>
              </div>
            </div>
          </section>
        )

      case 'contact':
        return (
          <section className="tier3-contact">
            <div className="tier3-contact-content">
              <div className="tier3-section-label">GET IN TOUCH</div>
              <h2>Let's Connect</h2>
              <p className="tier3-contact-intro">
                For inquiries about available works, commissions, or exhibition opportunities,
                please reach out using the form below.
              </p>
              <form className="tier3-contact-form">
                <div className="tier3-form-row">
                  <input type="text" placeholder="Your Name" required />
                  <input type="email" placeholder="Email Address" required />
                </div>
                <input type="text" placeholder="Subject" required />
                <textarea placeholder="Your Message" rows={6}></textarea>
                <button type="submit">SEND MESSAGE</button>
              </form>
              <div className="tier3-contact-info">
                <p><strong>Studio:</strong> Brooklyn, New York</p>
                <p><strong>Email:</strong> hello@isabellamartinez.art</p>
                <p><strong>Instagram:</strong> @isabella.martinez.art</p>
              </div>
            </div>
          </section>
        )

      default:
        return null
    }
  }

  return (
    <div className="tier3-page">
      <div className="sample-navigation-header">
        <button className="back-to-marketing-btn" onClick={() => navigate('/?marketing=true')}>
          ← Back to Home
        </button>
        <h2 className="sample-page-title">TIER 3 SAMPLE 1</h2>
      </div>
      <header className="tier3-header">
        <div className="tier3-logo" onClick={() => setCurrentPage('home')} style={{ cursor: 'pointer' }}>
          IM
        </div>
        <button
          className={`tier3-hamburger ${menuOpen ? 'tier3-hamburger-open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={`tier3-nav ${menuOpen ? 'tier3-nav-open' : ''}`}>
          <a onClick={() => { setCurrentPage('portfolio'); setMenuOpen(false); }} className={currentPage === 'portfolio' ? 'active' : ''}>Portfolio</a>
          <a onClick={() => { setCurrentPage('about'); setMenuOpen(false); }} className={currentPage === 'about' ? 'active' : ''}>About</a>
          <a onClick={() => { setCurrentPage('exhibitions'); setMenuOpen(false); }} className={currentPage === 'exhibitions' ? 'active' : ''}>Exhibitions</a>
          <a onClick={() => { setCurrentPage('contact'); setMenuOpen(false); }} className={currentPage === 'contact' ? 'active' : ''}>Contact</a>
        </nav>
      </header>
      {menuOpen && <div className="tier3-menu-backdrop" onClick={() => setMenuOpen(false)}></div>}

      {renderPage()}

      <footer className="tier3-footer">
        <div className="tier3-footer-content">
          <div className="tier3-footer-section">
            <h4>ISABELLA MARTINEZ</h4>
            <p>Contemporary visual artist exploring nature, memory, and identity through mixed media.</p>
          </div>
          <div className="tier3-footer-section">
            <h4>FOLLOW</h4>
            <p>Instagram</p>
            <p>Pinterest</p>
            <p>Artsy</p>
          </div>
          <div className="tier3-footer-section">
            <h4>CONTACT</h4>
            <p>hello@isabellamartinez.art</p>
            <p>Brooklyn, NY</p>
          </div>
        </div>
        <div className="tier3-footer-bottom">
          <p>&copy; 2026 Isabella Martinez. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Tier3
