import { Link } from 'react-router-dom'
import Footer from '../../components/Footer'
import './Tier4.css'

function Tier4() {
  return (
    <>
      <div className="tier4-page">
        <header className="tier4-header">
          <div className="tier4-logo">YOUR BUSINESS</div>
          <Link to="/" className="tier4-back-button">← Back to Tiers</Link>
        </header>
        <div style={{ minHeight: '80vh', padding: '4rem 2rem' }}>
          <h1>Tier 4</h1>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Tier4
