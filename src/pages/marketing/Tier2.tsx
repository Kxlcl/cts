import { Link } from 'react-router-dom'
import Footer from '../../components/Footer'
import './Tier2.css'

function Tier2() {
  return (
    <>
      <div className="tier2-page">
        <header className="tier2-header">
          <div className="tier2-logo">YOUR BUSINESS</div>
          <Link to="/" className="tier2-back-button">← Back to Tiers</Link>
        </header>
        <div style={{ minHeight: '80vh', padding: '4rem 2rem' }}>
          <h1>Tier 2</h1>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Tier2
