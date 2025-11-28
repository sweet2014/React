import React, { useState } from 'react';
import './Reservations.css';

function Reservations() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2'
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '2'
      });
    }, 3000);
  };

  return (
    <section id="reservations" className="reservations">
      <div className="reservations-container">
        <div className="reservations-info">
          <span className="section-label">Book Your Table</span>
          <h2 className="section-title">Make a Reservation</h2>
          <p className="reservations-description">
            Join us for an unforgettable dining experience. Reserve your table today and let us take care of the rest.
          </p>
          <div className="reservations-details">
            <div className="detail-item">
              <div className="detail-icon">📍</div>
              <div>
                <h4>Location</h4>
                <p>123 Culinary Street<br/>Gourmet City, GC 12345</p>
              </div>
            </div>
            <div className="detail-item">
              <div className="detail-icon">🕒</div>
              <div>
                <h4>Opening Hours</h4>
                <p>Mon-Fri: 11:00 AM - 10:00 PM<br/>Sat-Sun: 10:00 AM - 11:00 PM</p>
              </div>
            </div>
            <div className="detail-item">
              <div className="detail-icon">📞</div>
              <div>
                <h4>Contact</h4>
                <p>Phone: (555) 123-4567<br/>Email: info@epiceats.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="reservations-form-wrapper">
          {submitted ? (
            <div className="success-message">
              <div className="success-icon">✓</div>
              <h3>Reservation Confirmed!</h3>
              <p>We've received your reservation request and will contact you shortly to confirm.</p>
            </div>
          ) : (
            <form className="reservations-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="(555) 123-4567"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="date">Date</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="time">Time</label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="guests">Number of Guests</label>
                <select
                  id="guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  required
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5">5 Guests</option>
                  <option value="6">6 Guests</option>
                  <option value="7">7 Guests</option>
                  <option value="8">8+ Guests</option>
                </select>
              </div>

              <button type="submit" className="submit-btn">
                Reserve Table
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default Reservations;
