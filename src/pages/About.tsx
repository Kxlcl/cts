import Nav from '../components/Nav'
import './About.css'

function About() {
  return (
    <div className="about-hero">
      <Nav />

      <div className="hero-content">
        <div className="hero-text">
          <h1>CALITECH SOLUTIONS</h1>
          <p>CaliTech Solutions is a Bakersfield-based IT services provider dedicated to helping small and medium-sized businesses thrive through dependable, technical support.</p>
        </div>

        <div className="hero-image">
          <img src="/about_image.png" alt="Beach scene" />
        </div>
      </div>

      <button className="scroll-button">
        <span>↓</span>
      </button>
    </div>
  )
}

export default About
