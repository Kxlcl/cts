import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Tier1.css'

function Tier1() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <div className="tier1-page">
      <header className="tier1-header">
        <div className="tier1-logo">YOUR BUSINESS</div>
        <Link to="/" className="tier1-back-button">← Back to Tiers</Link>
      </header>

      <section className="tier1-hero">
      </section>

      <section className="tier1-about">
        <h2 className="tier1-about-title">
          SHOW OFF WHAT<br />
          YOUR BUSINESS IS<br />
          ABOUT.
        </h2>
        <p className="tier1-about-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <div className="tier1-about-image">
          {/* Circular image placeholder */}
        </div>
      </section>

      <section className="tier1-contact">
        <h2 className="tier1-contact-title">CONTACT</h2>
        <form className="tier1-form" onSubmit={handleSubmit}>
          <div className="tier1-form-group">
            <label>FULL NAME</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="tier1-form-group">
            <label>EMAIL ADDRESS</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="tier1-form-group">
            <label>MESSAGE</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              required
            />
          </div>
          <button type="submit" className="tier1-submit">SUBMIT</button>
        </form>
      </section>
    </div>
  )
}

export default Tier1
