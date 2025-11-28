import React from 'react';
import './Hero.css';

function Hero() {
  const scrollToReservations = () => {
    const element = document.getElementById('reservations');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToMenu = () => {
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Epic Eats</h1>
        <p className="hero-subtitle">Where Every Meal Becomes a Memory</p>
        <p className="hero-description">
          Experience culinary excellence with our chef-crafted dishes made from the finest ingredients
        </p>
        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={scrollToReservations}>
            Book a Table
          </button>
          <button className="btn btn-secondary" onClick={scrollToMenu}>
            View Menu
          </button>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <div className="mouse"></div>
      </div>
    </section>
  );
}

export default Hero;
