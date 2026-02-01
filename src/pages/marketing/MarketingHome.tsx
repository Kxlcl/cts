import { useState } from 'react'
import Footer from '../../components/Footer'
import ServiceCard from '../../components/ServiceCard'
import './MarketingHome.css'

const portfolioItems = [
  {
    title: 'TIER 1',
    description: 'Includes:',
    bulletPoints: [
      'One custom designed landing page',
      'Business descriptions as needed',
      'Contact information and addresses'
    ],
    imageUrl: '/src/pages/marketing/website_images/website1.png'
  },
  {
    title: '',
    description: '',
    bulletPoints: [],
    imageUrl: ''
  },
  {
    title: '',
    description: '',
    bulletPoints: [],
    imageUrl: ''
  },
  {
    title: '',
    description: '',
    bulletPoints: [],
    imageUrl: ''
  }
]

function MarketingHome() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === portfolioItems.length - 1 ? 0 : prev + 1))
  }

  return (
    <>
      <div className="marketing-hero">
        <div className="hero-content">
          <h1 className="hero-title">WEBSITE DESIGN</h1>
        </div>
      </div>

      <div className="portfolio-container">
        <div className="portfolio-text-section">
          <h2 className="portfolio-title">{portfolioItems[currentIndex].title}</h2>
          <p className="portfolio-description">{portfolioItems[currentIndex].description}</p>
          <ul className="portfolio-bullets">
            {portfolioItems[currentIndex].bulletPoints.map((point, index) => (
              <li key={index}>
                <img src="/images/check_mark.png" alt="Check" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="service-carousel">
          <div className="service-card-section">
            <div className="service-card-content">
              <ServiceCard
                key={`portfolio-${currentIndex}`}
                title=""
                description=""
                bulletPoints={[]}
                imageUrl={portfolioItems[currentIndex].imageUrl}
                currentPage={currentIndex + 1}
                totalPages={portfolioItems.length}
                onNext={handleNext}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default MarketingHome
