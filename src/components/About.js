import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <span className="section-label">Our Story</span>
          <h2 className="section-title">About Epic Eats</h2>
          <p className="about-text">
            Founded in 2020, Epic Eats was born from a passion for creating extraordinary culinary
            experiences. Our talented chefs combine traditional techniques with modern innovation
            to craft dishes that delight all the senses.
          </p>
          <p className="about-text">
            We believe that great food brings people together. Every ingredient is carefully selected,
            every recipe meticulously perfected, and every dish prepared with love. From farm to table,
            we're committed to sustainability and supporting local producers.
          </p>
          <div className="about-features">
            <div className="feature">
              <div className="feature-icon">🍽️</div>
              <h3>Premium Quality</h3>
              <p>Only the finest ingredients make it to your plate</p>
            </div>
            <div className="feature">
              <div className="feature-icon">👨‍🍳</div>
              <h3>Expert Chefs</h3>
              <p>Award-winning culinary team with decades of experience</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🌿</div>
              <h3>Farm Fresh</h3>
              <p>Locally sourced, organic ingredients delivered daily</p>
            </div>
          </div>
        </div>
        <div className="about-image">
          <div className="image-placeholder">
            <div className="image-content">
              <span className="image-icon">🍴</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
