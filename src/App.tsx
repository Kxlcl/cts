import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import Contact from './pages/Contact'
import MarketingHome from './pages/marketing/MarketingHome'
import Tier1 from './pages/marketing/Tier1'
import Tier2 from './pages/marketing/Tier2'
import Tier3 from './pages/marketing/Tier3'
import Tier4 from './pages/marketing/Tier4'
import './App.css'

function App() {
  // Detect subdomain
  const hostname = window.location.hostname
  const searchParams = new URLSearchParams(window.location.search)

  // Check for marketing subdomain OR query parameter for local testing
  const isMarketing = hostname.startsWith('marketing.') ||
                      searchParams.get('marketing') === 'true'

  return (
    <Router>
      <main>
        {isMarketing ? (
          // Marketing subdomain routes
          <Routes>
            <Route path="/" element={<MarketingHome />} />
            <Route path="/tier1" element={<Tier1 />} />
            <Route path="/tier2" element={<Tier2 />} />
            <Route path="/tier3" element={<Tier3 />} />
            <Route path="/tier4" element={<Tier4 />} />
          </Routes>
        ) : (
          // Main site routes
          <Routes>
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<Home />} />
          </Routes>
        )}
      </main>
    </Router>
  )
}

export default App
