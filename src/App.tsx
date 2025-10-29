import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import './App.css'

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<About />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
