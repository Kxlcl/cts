import { useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('/send-email.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          inquiryType: '',
          message: ''
        });
      } else {
        setStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      setStatus('Failed to send message. Please try again.');
    }
  };

  return (
    <>
      <div className="contact-hero">
        <Nav />
        <div className="hero-content">
          <h1 className="hero-title">CONTACT US</h1>
        </div>
      </div>

      <div className="contact-form-section">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>FULL NAME</label>
            <input
              type="text"
              name="fullName"
              placeholder="First Name, Last Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>EMAIL ADDRESS</label>
            <input
              type="email"
              name="email"
              placeholder="email@email.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>PHONE NUMBER</label>
            <input
              type="tel"
              name="phone"
              placeholder="000-000-0000"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              title="Please enter a valid phone number in format: 123-456-7890"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>INQUIRY TYPE</label>
            <select
              name="inquiryType"
              value={formData.inquiryType}
              onChange={handleChange}
              required
            >
              <option value="">Select an option</option>
              <option value="general">General Inquiry</option>
              <option value="support">Technical Support</option>
              <option value="quote">Request a Quote</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label>MESSAGE</label>
            <textarea
              name="message"
              placeholder="Begin typing..."
              value={formData.message}
              onChange={handleChange}
              rows={8}
              required
            />
          </div>

          <div className="submit-container">
            <p>SUBMIT</p>
            <button type="submit" className="submit-button">
              <img src="/images/down_arrow.png" alt="Submit" />
            </button>
          </div>

          {status && <p className="form-status">{status}</p>}
        </form>
      </div>

      <Footer />
    </>
  )
}

export default Contact
