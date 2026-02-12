import { Link } from 'react-router-dom'
import Footer from '../../components/Footer'
import './Tier3.css'

function Tier3() {
  return (
    <>
      <div className="tier3-page">
        <header className="tier3-header">
          <div className="tier3-logo">YOUR BUSINESS</div>
          <Link to="/" className="tier3-back-button">← Back to Tiers</Link>
        </header>
        <div style={{ minHeight: '80vh', padding: '4rem 2rem' }}>
          <h1>Tier 3</h1>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Tier3
