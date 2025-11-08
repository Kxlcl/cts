import { NavLink } from 'react-router-dom'
import './Nav.css'

function Nav() {
  return (
    <nav className="main-nav">
      <img src="/images/logo.png" alt="CaliTech Solutions" className="nav-logo" />
      <div className="nav-links">
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/services">SERVICES</NavLink>
        <NavLink to="/contact">CONTACT</NavLink>
      </div>
    </nav>
  )
}

export default Nav
