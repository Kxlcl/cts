import { useEffect } from 'react'
import './Tier1.css'

function Tier1() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible')
        }
      })
    }, observerOptions)

    const fadeElements = document.querySelectorAll('.fade-in-on-scroll')
    fadeElements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="tier1-page">
      <header className="tier1-header">
        <div className="tier1-logo">
          <span className="tier1-logo-icon">▼</span>
          <span className="tier1-logo-text">DELTA CONSULTING</span>
        </div>
      </header>

      <section className="tier1-hero">
        <div className="tier1-hero-content">
          <h1 className="tier1-hero-title">
            We'll help you find<br />
            your business<br />
            <span className="tier1-hero-accent">POTENTIAL.</span>
          </h1>
          <button className="tier1-cta-button">SCHEDULE A CONSULTATION</button>
          <p className="tier1-hero-disclaimer">
            If you are not satisfied with your first consult, we have<br />
            a money back guarantee. <span className="tier1-hero-link">Terms and Conditions apply.</span>
          </p>
        </div>
      </section>

      <section className="tier1-featured">
        <div className="tier1-featured-label">AS FEATURED IN:</div>
        <div className="tier1-featured-logos">
          <div className="tier1-featured-logos-track">
            <img src="/images/marketing/tier1/forbeslogo.png" alt="Forbes" className="tier1-featured-logo" />
            <img src="/images/marketing/tier1/ntylogo.png" alt="The New York Times" className="tier1-featured-logo" />
            <img src="/images/marketing/tier1/wiredlogo.png" alt="WIRED" className="tier1-featured-logo" />
            <img src="/images/marketing/tier1/forbeslogo.png" alt="Forbes" className="tier1-featured-logo" />
            <img src="/images/marketing/tier1/ntylogo.png" alt="The New York Times" className="tier1-featured-logo" />
            <img src="/images/marketing/tier1/wiredlogo.png" alt="WIRED" className="tier1-featured-logo" />
            <img src="/images/marketing/tier1/forbeslogo.png" alt="Forbes" className="tier1-featured-logo" />
            <img src="/images/marketing/tier1/ntylogo.png" alt="The New York Times" className="tier1-featured-logo" />
            <img src="/images/marketing/tier1/wiredlogo.png" alt="WIRED" className="tier1-featured-logo" />
            <img src="/images/marketing/tier1/forbeslogo.png" alt="Forbes" className="tier1-featured-logo" />
            <img src="/images/marketing/tier1/ntylogo.png" alt="The New York Times" className="tier1-featured-logo" />
            <img src="/images/marketing/tier1/wiredlogo.png" alt="WIRED" className="tier1-featured-logo" />
          </div>
        </div>
      </section>

      <section className="tier1-testimonials">
        <div className="tier1-testimonial-block fade-in-on-scroll">
          <p className="tier1-testimonial-quote">
            "Industry winning consulting that<br />
            brings your business to the next<br />
            level."
          </p>
          <div className="tier1-stars">★★★★★</div>
        </div>

        <div className="tier1-decorative-graphic fade-in-on-scroll"></div>

        <div className="tier1-testimonial-block fade-in-on-scroll">
          <p className="tier1-testimonial-quote">"Amazing customer service!"</p>
          <div className="tier1-stars">★★★★★</div>
        </div>
      </section>

      <section className="tier1-footer-cta">
        <h2 className="tier1-footer-text">
          Ready to transform<br />
          your business?
        </h2>
        <button className="tier1-footer-button">GET STARTED TODAY</button>
      </section>

      <footer className="tier1-footer">
        <div className="tier1-footer-bottom">
          <p>&copy; 2026 Delta Consulting. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Tier1
