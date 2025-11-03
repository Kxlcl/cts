import { useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import ServiceCard from '../components/ServiceCard'
import './Services.css'

const softwareServices = [
  {
    title: 'ON-CALL\nIT SUPPORT',
    description: 'Fast, reliable troubleshooting for all your software-related issues!',
    bulletPoints: [
      'Remote and onsite support',
      'Software repair and reinstallation',
      'Malware and virus removal',
      'Operating system tuning and optimization'
    ],
    imageUrl: '/images/software.png'
  },
  {
    title: 'CLOUD & DATA\nSERVICES',
    description: 'Secure, cloud-based systems to store, protect, and access your data anywhere!',
    bulletPoints: [
      'Microsoft 365 & Google Workspace setup',
      'Data migration and recovery',
      'Cloud backups and synchronization',
      'File-sharing solutions for teams'
    ],
    imageUrl: '/images/software.png'
  },
  {
    title: 'SOFTWARE SETUP FOR\nSECURITY OPERATIONS',
    description: 'Custom software installations for private security companies!',
    bulletPoints: [
      'Guard touring software (Trackforce, Silvertrac, Deggy etc.)',
      'Dispatch and reporting systems',
      'Patrol management apps for mobile devices'
    ],
    imageUrl: '/images/software.png'
  }
]

const hardwareServices = [
  {
    title: 'NETWORK\nDESIGN & SETUP',
    description: 'Build strong, secure, and efficient business networks!',
    bulletPoints: [
      'Router, switch, and firewall configuration',
      'Cabling and access point installation',
      'Secure Wi-Fi deployment'
    ],
    imageUrl: '/images/hardware.png'
  },
  {
    title: 'SYSTEM MAINTENANCE\n& MONITORING',
    description: 'Ensure your hardware runs smoothly with proactive support!',
    bulletPoints: [
      'Preventative maintenance',
      'Hardware diagnostics and performance tuning'
    ],
    imageUrl: '/images/hardware.png'
  },
  {
    title: 'SECURITY HARDWARE\nINTEGRATION',
    description: 'Full setup and support for security company equipment!',
    bulletPoints: [
      'CCTV camera configuration and networking',
      'Access control hardware setup',
      'Patrol tablet/phone configuration'
    ],
    imageUrl: '/images/hardware.png'
  }
]

const informationServices = [
  {
    title: 'IT CONSULTING\n& PLANNING',
    description: 'Strategic advice to align your technology with business goals.',
    bulletPoints: [
      'Technology audits and infrastructure reviews',
      'Upgrade and migration planning',
      'Cybersecurity best-practice consulting'
    ],
    imageUrl: '/images/info.png'
  },
  {
    title: 'DATA SECURITY &\nCOMPLIANCE GUIDANCE',
    description: 'Protect sensitive business information and stay compliant!',
    bulletPoints: [
      'Data handling policies',
      'Security training for staff'
    ],
    imageUrl: '/images/info.png'
  },
  {
    title: 'DOCUMENTATION\n& TRAINING',
    description: 'Help your team understand and manage systems effectively!',
    bulletPoints: [
      'Staff IT training (Basic to advanced)',
      'Procedure documentation',
      'Technology onboarding sessions'
    ],
    imageUrl: '/images/info.png'
  }
]

function Services() {
  const [softwareIndex, setSoftwareIndex] = useState(0)
  const [hardwareIndex, setHardwareIndex] = useState(0)
  const [informationIndex, setInformationIndex] = useState(0)

  const handleSoftwareNext = () => {
    setSoftwareIndex((prev) => (prev === softwareServices.length - 1 ? 0 : prev + 1))
  }

  const handleHardwareNext = () => {
    setHardwareIndex((prev) => (prev === hardwareServices.length - 1 ? 0 : prev + 1))
  }

  const handleInformationNext = () => {
    setInformationIndex((prev) => (prev === informationServices.length - 1 ? 0 : prev + 1))
  }

  return (
    <>
      <div className="services-hero">
        <Nav />
        <div className="hero-content">
          <h1 className="hero-title">SERVICES</h1>
          <p className="guarantee-text">All services include our 30-Day Service Guarantee. <br></br>If an issue arises from our work within 30 days, we’ll fix it at no additional charge.</p>
        </div>
      </div>

      <div className="section-title-container">
        <h2 className="section-title">SOFTWARE</h2>
        <p className="section-subtitle">Modern solutions to keep your business running efficiently and SECURELY!</p>
      </div>

      <div className="service-carousel">
        <div className="service-card-section">
          <div className="service-card-content">
            <ServiceCard
              key={`software-${softwareIndex}`}
              title={softwareServices[softwareIndex].title}
              description={softwareServices[softwareIndex].description}
              bulletPoints={softwareServices[softwareIndex].bulletPoints}
              imageUrl={softwareServices[softwareIndex].imageUrl}
              currentPage={softwareIndex + 1}
              totalPages={softwareServices.length}
              onNext={handleSoftwareNext}
            />
          </div>
        </div>
      </div>

      <div className="section-title-container">
        <h2 className="section-title">HARDWARE</h2>
        <p className="section-subtitle">Dependable setup, installation, and maintenance for all your business tech!</p>
      </div>

      <div className="service-carousel">
        <div className="service-card-section">
          <div className="service-card-content">
            <ServiceCard
              key={`hardware-${hardwareIndex}`}
              title={hardwareServices[hardwareIndex].title}
              description={hardwareServices[hardwareIndex].description}
              bulletPoints={hardwareServices[hardwareIndex].bulletPoints}
              imageUrl={hardwareServices[hardwareIndex].imageUrl}
              currentPage={hardwareIndex + 1}
              totalPages={hardwareServices.length}
              onNext={handleHardwareNext}
              sidebarColor="#f9e1ba"
            />
          </div>
        </div>
      </div>

      <div className="section-title-container">
        <h2 className="section-title">INFO BASED SERVICES</h2>
        <p className="section-subtitle">Guidance, analysis, and management of your company's IT environment!</p>
      </div>

      <div className="service-carousel">
        <div className="service-card-section">
          <div className="service-card-content">
            <ServiceCard
              key={`information-${informationIndex}`}
              title={informationServices[informationIndex].title}
              description={informationServices[informationIndex].description}
              bulletPoints={informationServices[informationIndex].bulletPoints}
              imageUrl={informationServices[informationIndex].imageUrl}
              currentPage={informationIndex + 1}
              totalPages={informationServices.length}
              onNext={handleInformationNext}
              sidebarColor="#80ad8e"
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Services
