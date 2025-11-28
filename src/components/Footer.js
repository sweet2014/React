import React from 'react';
import './Footer.css';

function Footer() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">Epic Eats</h3>
            <p className="footer-description">
              Crafting unforgettable dining experiences since 2020. Where every meal tells a story.
            </p>
            <div className="footer-social">
              <a href="#" className="footer-social-icon">📘</a>
              <a href="#" className="footer-social-icon">📷</a>
              <a href="#" className="footer-social-icon">🐦</a>
              <a href="#" className="footer-social-icon">📌</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><button onClick={() => scrollToSection('home')}>Home</button></li>
              <li><button onClick={() => scrollToSection('about')}>About</button></li>
              <li><button onClick={() => scrollToSection('menu')}>Menu</button></li>
              <li><button onClick={() => scrollToSection('reservations')}>Reservations</button></li>
              <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <ul className="footer-contact">
              <li>📍 123 Culinary Street</li>
              <li>Gourmet City, GC 12345</li>
              <li>📞 (555) 123-4567</li>
              <li>✉️ info@epiceats.com</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Opening Hours</h4>
            <ul className="footer-hours">
              <li><strong>Monday - Friday</strong></li>
              <li>11:00 AM - 10:00 PM</li>
              <li><strong>Saturday - Sunday</strong></li>
              <li>10:00 AM - 11:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Epic Eats. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <span>•</span>
            <a href="#">Terms of Service</a>
            <span>•</span>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
