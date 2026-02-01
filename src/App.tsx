import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import Contact from './pages/Contact'
import MarketingHome from './pages/marketing/MarketingHome'
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
            {/* Add more marketing routes here */}
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
