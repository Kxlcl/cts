import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './MarketingHome.css'
import Footer from '../../components/Footer'

function MarketingHome() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('/send-email.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          inquiryType: '',
          message: ''
        });
      } else {
        setStatus('Failed to send message. Please try again.');
      }
    } catch {
      setStatus('Failed to send message. Please try again.');
    }
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const scrollableSection = document.querySelector('.marketing-split-right')

    const handleScroll = () => {
      if (scrollableSection) {
        const scrollTop = scrollableSection.scrollTop
        const scrollHeight = scrollableSection.scrollHeight - scrollableSection.clientHeight
        const progress = (scrollTop / scrollHeight) * 100
        setScrollProgress(progress)
      }
    }

    if (scrollableSection) {
      scrollableSection.addEventListener('scroll', handleScroll)
    }

    return () => {
      if (scrollableSection) {
        scrollableSection.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  return (
    <>
      <div className="marketing-split-container">
        <div className="marketing-split-left">
          <div className="marketing-text">
            <img src="/images/CT-02.png" alt="CaliTech Solutions" className="marketing-logo" />
          </div>
          <nav className="marketing-nav">
            <button onClick={() => scrollToSection('website-design')} className="marketing-nav-button">
              Website Design
            </button>
            <button onClick={() => scrollToSection('design-marketing')} className="marketing-nav-button">
              Graphic Design & Marketing
            </button>
            <button onClick={() => scrollToSection('contact')} className="marketing-nav-button">
              Contact
            </button>
          </nav>
        </div>
        <div className="marketing-split-right">
          <div className="scroll-progress-bar">
            <div className="scroll-progress-fill" style={{ width: `${scrollProgress}%` }}></div>
          </div>
          <div className="marketing-content">
            <section id="website-design" className="marketing-section">
              <div className="marketing-section-content">
                <img src="/images/WebsiteHero_Design.png" alt="Website Design" className="marketing-section-image" />
                <p className="marketing-section-text">Want a custom website design but not sure what fits your needs? Explore our tiers to learn more and view designs.</p>
              </div>
              <div className="tier-cards-container">
                <div className="tier-card">
                  <h3>Landing Page</h3>
                  <div className="tier-card-overlay">
                    <div className="tier-card-overlay-content">
                      <h3>Landing Page</h3>
                      <p>A basic, minimally functional website that showcases your brand and promotes a clear call to action.</p>
                    </div>
                    <Link to="/tier1" className="tier-card-button">
                      <span>VIEW SAMPLE</span>
                      <div className="tier-card-button-icon">
                        <img src="/images/down_arrow.png" alt="View" />
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="tier-card">
                  <h3>Single Page</h3>
                  <div className="tier-card-overlay">
                    <div className="tier-card-overlay-content">
                      <h3>Single Page</h3>
                      <p>A comprehensive single-page website with multiple sections, perfect for presenting your complete story in one scrollable experience.</p>
                    </div>
                    <Link to="/tier2" className="tier-card-button">
                      <span>VIEW SAMPLE</span>
                      <div className="tier-card-button-icon">
                        <img src="/images/down_arrow.png" alt="View" />
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="tier-card">
                  <h3>Full Website</h3>
                  <div className="tier-card-overlay">
                    <div className="tier-card-overlay-content">
                      <h3>Full Website</h3>
                      <p>A multi-page website with advanced features, custom functionality, and professional design for established businesses.</p>
                    </div>
                    <Link to="/tier3" className="tier-card-button">
                      <span>VIEW SAMPLE</span>
                      <div className="tier-card-button-icon">
                        <img src="/images/down_arrow.png" alt="View" />
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="tier-card">
                  <h3>Custom</h3>
                  <div className="tier-card-overlay">
                    <div className="tier-card-overlay-content">
                      <h3>Custom</h3>
                      <p>Enterprise-level custom development tailored to your specific needs with unlimited possibilities and full creative control.</p>
                    </div>
                    <Link to="/tier4" className="tier-card-button">
                      <span>VIEW SAMPLE</span>
                      <div className="tier-card-button-icon">
                        <img src="/images/down_arrow.png" alt="View" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            <section id="design-marketing" className="marketing-section marketing-section-compact">
              <h2>Graphic Design & Marketing</h2>
              <p>Coming Soon!</p>
              <img src="/images/tab_image.png" alt="Coming soon" style={{ maxWidth: '200px', marginTop: '2rem' }} />
            </section>

            <section id="contact" className="marketing-section">
              <h2>Contact</h2>
              <p>Get in touch with us to discuss your project.</p>
              <form className="marketing-contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>FULL NAME</label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="First Name, Last Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>EMAIL ADDRESS</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>PHONE NUMBER</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="000-000-0000"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    title="Please enter a valid phone number in format: 123-456-7890"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>INQUIRY TYPE</label>
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select an option</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="quote">Request a Quote</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>MESSAGE</label>
                  <textarea
                    name="message"
                    placeholder="Begin typing..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={8}
                    required
                  />
                </div>

                <div className="submit-container">
                  <p>SUBMIT</p>
                  <button type="submit" className="submit-button">
                    <img src="/images/down_arrow.png" alt="Submit" />
                  </button>
                </div>

                {status && <p className="form-status">{status}</p>}
              </form>
            </section>
          </div>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default MarketingHome
