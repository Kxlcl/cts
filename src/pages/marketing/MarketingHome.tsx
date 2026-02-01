import { useState } from 'react'
import Footer from '../../components/Footer'
import ServiceCard from '../../components/ServiceCard'
import './MarketingHome.css'

const portfolioItems = [
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

      <div className="service-carousel">
        <div className="service-card-section">
          <div className="service-card-content">
            <ServiceCard
              key={`portfolio-${currentIndex}`}
              title={portfolioItems[currentIndex].title}
              description={portfolioItems[currentIndex].description}
              bulletPoints={portfolioItems[currentIndex].bulletPoints}
              imageUrl={portfolioItems[currentIndex].imageUrl}
              currentPage={currentIndex + 1}
              totalPages={portfolioItems.length}
              onNext={handleNext}
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default MarketingHome
