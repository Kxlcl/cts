import { useNavigate } from 'react-router-dom'
import Nav from '../components/Nav'
import ArrowButton from '../components/ArrowButton'
import Accordion from '../components/Accordion'
import Footer from '../components/Footer'
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
          <Accordion items={[
            { question: "What does CaliTech Solutions do?", answer: "CaliTech Solutions provides full-service IT support for small and medium-sized businesses. We handle everything from hardware installation and software setup to network design, cybersecurity, and data protection. Whether you need emergency assistance or long-term IT management, we ensure your technology performs reliably and efficiently." },
            { question: "Do you offer on-call or emergency IT services?", answer: "Yes. We specialize in on-call IT support for businesses that need immediate technical assistance. Our technicians can provide remote or onsite support to resolve urgent issues quickly and minimize downtime." },
            { question: "What types of businesses do you work with?", answer: "We work with a wide range of industries, including private security, logistics, professional services, retail, and industrial operations. Our services are customized to meet the specific technology requirements of each business." },
            { question: "What is included in your 30-Day Service Guarantee?", answer: "All of our work is backed by a 30-Day Service Guarantee. If any issue arises as a result of our service within 30 days of completion, we will correct it at no additional cost. Our goal is to ensure lasting reliability and complete client satisfaction." },
            { question: "Do you provide remote support, or do you have to come onsite?", answer: "We offer both. Many issues can be resolved remotely using secure access tools, but for hardware, networking, or infrastructure problems, we also provide onsite visits throughout Bakersfield and nearby areas." },
            { question: "Do you handle cybersecurity and data protection?", answer: "Yes. We provide comprehensive cybersecurity solutions including firewall configuration, system monitoring, data backups, and recovery plans. We also help clients develop secure data handling practices and maintain compliance with industry standards." },
            { question: "Can you help our company move or relocate our technology to a new location?", answer: "Yes. We provide complete IT relocation services to ensure a smooth transition when your business moves to a new facility. Our team can plan, disconnect, transport, and reconfigure your equipment, servers, and network systems so everything is fully operational in the new location with minimal downtime." },
            { question: "Can you help us move to the cloud?", answer: "Absolutely. We set up and manage Microsoft 365, Google Workspace, and other secure cloud platforms. We also handle data migration and user training to ensure your team can work efficiently from anywhere." },
            { question: "Do you offer contracts or one-time services?", answer: "We offer both. Businesses can hire us for one-time support or choose an ongoing service agreement for continuous monitoring, maintenance, and priority response." },
            { question: "How can I schedule service or request a quote?", answer: "You can contact us directly by phone at (661) 805-6123 or by email at support@calitech-solutions.com. You can also fill out the contact form on our website. We respond to most inquiries within one business day." }
          ]} />
        </div>
      </div>

      <Footer />
    </>
  )
}

export default About
