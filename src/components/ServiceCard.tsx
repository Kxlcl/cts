import './ServiceCard.css'

interface ServiceCardProps {
  title: string;
  description: string;
  bulletPoints: string[];
  imageUrl: string;
  currentPage: number;
  totalPages: number;
  onNext: () => void;
  sidebarColor?: string;
}

function ServiceCard({ title, description, bulletPoints, imageUrl, currentPage, onNext, sidebarColor = '#A4C8E1' }: ServiceCardProps) {
  return (
    <div className="service-card-wrapper">
      <div className="service-card-sidebar sidebar-desktop" style={{ backgroundColor: sidebarColor }}>
        <div className="sidebar-page-number">{currentPage}</div>
        <button className="sidebar-next-button" onClick={onNext}>
          <img src="/images/down_arrow.png" alt="Next" />
        </button>
      </div>
      <div className="service-card-image">
        <img src={imageUrl} alt={title} />
        <div className="service-card-overlay">
          <h2 className="service-card-title">{title}</h2>
          <p className="service-card-description">{description}</p>
          <ul className="service-card-bullets">
            {bulletPoints.map((point, index) => (
              <li key={index}>
                <img src="/images/check_mark.png" alt="Check" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="service-card-sidebar sidebar-mobile" style={{ backgroundColor: sidebarColor }}>
        <div className="sidebar-page-number">{currentPage}</div>
        <button className="sidebar-next-button" onClick={onNext}>
          <img src="/images/down_arrow.png" alt="Next" />
        </button>
      </div>
    </div>
  )
}

export default ServiceCard
