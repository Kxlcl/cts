import { NavLink } from 'react-router-dom'
import './Nav.css'

function Nav() {
  return (
    <nav className="main-nav">
      <NavLink to="/about">ABOUT</NavLink>
      <NavLink to="/services">SERVICES</NavLink>
      <NavLink to="/contact">CONTACT</NavLink>
    </nav>
  )
}

export default Nav
