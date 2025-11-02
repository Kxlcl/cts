import Nav from '../components/Nav'
import './About.css'

function About() {
  return (
    <div className="about-hero">
      <Nav />

      <div className="hero-content">
        <div className="hero-main">
          <p className="hero-title">CALITECH <br></br>SOLUTIONS</p>

          <div className="hero-image">
            <img src="/about_image.png" alt="Beach scene" />
          </div>
        </div>

        <div className="hero-text">
          <p>CaliTech Solutions is a Bakersfield-based IT services provider dedicated to helping small and medium-sized businesses thrive through dependable, technical support.</p>
        </div>

        <button className="scroll-button">
          <img src="/down_arrow.png" alt="Scroll down" />
        </button>
      </div>
    </div>
  )
}

export default About
