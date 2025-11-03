import { useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import ServiceCard from '../components/ServiceCard'
import './Services.css'

const softwareServices = [
  {
    title: 'ON CALL\nIT SUPPORT',
    description: 'Fast, reliable troubleshooting for all your software-related issues!',
    bulletPoints: [
      'Remote and onsite support',
      'Software repair and re-installation',
      'Malware and virus removal',
      'Operating system tuning and optimization'
    ],
    imageUrl: '/images/service1.jpg'
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
    imageUrl: '/images/service2.jpg'
  }
]

function Services() {
  const [softwareIndex, setSoftwareIndex] = useState(0)
  const [hardwareIndex, setHardwareIndex] = useState(0)

  const handleSoftwareNext = () => {
    setSoftwareIndex((prev) => (prev === softwareServices.length - 1 ? 0 : prev + 1))
  }

  const handleHardwareNext = () => {
    setHardwareIndex((prev) => (prev === hardwareServices.length - 1 ? 0 : prev + 1))
  }

  return (
    <>
      <div className="services-hero">
        <Nav />
        <div className="hero-content">
          <h1 className="hero-title">SERVICES</h1>
          <p>All services include our 30-Day Service Guarantee — if an issue arises from our work within 30 days, we’ll fix it at no additional charge.</p>
        </div>
      </div>

      <div className="service-carousel">
        <div className="service-card-section">
          <div className="service-card-content">
            <ServiceCard
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
        <h2 className="section-title">SOFTWARE</h2>
      </div>

      <div className="service-carousel">
        <div className="service-card-section">
          <div className="service-card-content">
            <ServiceCard
              title={hardwareServices[hardwareIndex].title}
              description={hardwareServices[hardwareIndex].description}
              bulletPoints={hardwareServices[hardwareIndex].bulletPoints}
              imageUrl={hardwareServices[hardwareIndex].imageUrl}
              currentPage={hardwareIndex + 1}
              totalPages={hardwareServices.length}
              onNext={handleHardwareNext}
            />
          </div>
        </div>
      </div>

      <div className="section-title-container">
        <h2 className="section-title">HARDWARE</h2>
      </div>

      <Footer />
    </>
  )
}

export default Services
