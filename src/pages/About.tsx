import { useNavigate } from 'react-router-dom'
import Nav from '../components/Nav'
import ArrowButton from '../components/ArrowButton'
import './About.css'

function About() {
  const navigate = useNavigate();

  const scrollToWhatWeDo = () => {
    document.querySelector('.about-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const goToServices = () => {
    navigate('/services');
  };

  const goToContact = () => {
    navigate('/contact');
  };

  return (
    <>
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

          <button className="scroll-button" onClick={scrollToWhatWeDo}>
            <img src="/down_arrow.png" alt="Scroll down" />
          </button>
        </div>
      </div>

      <div className="about-section">
        <div className="about-content">
          <div className="about-text">
            <h2>WHAT WE DO</h2>

            <p>We keep your tech alive — and your business thriving!</p>

            <p>At CaliTech Solutions, we bridge the gap between people and technology. We design, install, secure, and maintain the digital backbone that keeps California's businesses running day and night.</p>

            <p>We're the team you call when your systems need a reboot, your network needs an upgrade, or your business needs a smarter way to connect.</p>

            <p>From cloud systems and cybersecurity to guard patrol tech and data infrastructure, we make technology simple, reliable, and built for the real world.</p>

            <p>Think of us as your on-call tech department — without the overhead!</p>

            <div className="view-services">
              <h3>CONTACT US</h3>
              <ArrowButton onClick={goToContact} />
            </div>
          </div>

          <div className="about-image">
            <img src="/home1.jpg" alt="City view" />
          </div>
        </div>
      </div>

      <div className="about-section reverse">
        <div className="about-content">
          <div className="about-image">
            <img src="/home2.png" alt="About image" />
          </div>

          <div className="about-text">
            <h2>WHY CHOOSE US</h2>

            <p>We specialize in creating efficient, secure, and future-ready technology infrastructures tailored to each client's needs. </p>

            <p>Whether you're running a security firm, logistics operation, or professional office, our mission is to keep your technology running smoothly, so you can focus on what matters most: your business.</p>

            <ul className="about-list">
              <li>
                <img src="/check_mark.png" alt="Check" />
                <span>Locally owned and operated in <strong>Bakersfield, CA</strong></span>
              </li>
              <li>
                <img src="/check_mark.png" alt="Check" />
                <span>Fast, responsive on-call IT support</span>
              </li>
              <li>
                <img src="/check_mark.png" alt="Check" />
                <span><strong>30-day service guarantee</strong> on all completed work</span>
              </li>
              <li>
                <img src="/check_mark.png" alt="Check" />
                <span>Experienced technicians with real-world problem-solving</span>
              </li>
              <li>
                <img src="/check_mark.png" alt="Check" />
                <span>Transparent pricing and <strong>no surprise fees</strong></span>
              </li>
            </ul>

            <div className="view-services">
              <h3>VIEW SERVICES</h3>
              <ArrowButton onClick={goToServices} />
            </div>
          </div>
        </div>
      </div>

      <div className="faq-section">
        <h2>FREQUENTLY ASKED <br></br>QUESTIONS</h2>

        <div className="faq-container">
          <details className="faq-item">
            <summary>What does CaliTech Solutions do?</summary>
            <p>Content goes here</p>
          </details>

          <details className="faq-item">
            <summary>Do you offer on-call or emergency IT services?</summary>
            <p>Content goes here</p>
          </details>

          <details className="faq-item">
            <summary>What types of businesses do you work with?</summary>
            <p>Content goes here</p>
          </details>

          <details className="faq-item">
            <summary>What is included in your 30-Day Service Guarantee?</summary>
            <p>Content goes here</p>
          </details>

          <details className="faq-item">
            <summary>Do you provide remote support, or do you have to come onsite?</summary>
            <p>Content goes here</p>
          </details>

          <details className="faq-item">
            <summary>Do you handle cybersecurity and data protection?</summary>
            <p>Content goes here</p>
          </details>
        </div>
      </div>
    </>
  )
}

export default About
