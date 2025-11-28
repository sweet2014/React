import React, { useState } from 'react';
import './Menu.css';

function Menu() {
  const [activeCategory, setActiveCategory] = useState('starters');

  const menuItems = {
    starters: [
      {
        name: 'Bruschetta Al Pomodoro',
        description: 'Toasted bread with fresh tomatoes, garlic, basil, and olive oil',
        price: '$12'
      },
      {
        name: 'Crispy Calamari',
        description: 'Lightly fried squid rings with spicy marinara sauce',
        price: '$16'
      },
      {
        name: 'Caesar Salad',
        description: 'Romaine lettuce, parmesan, croutons, classic Caesar dressing',
        price: '$14'
      },
      {
        name: 'Soup of the Day',
        description: 'Chef\'s special creation made fresh daily',
        price: '$10'
      }
    ],
    mains: [
      {
        name: 'Grilled Ribeye Steak',
        description: '12oz premium ribeye with roasted vegetables and garlic mashed potatoes',
        price: '$42'
      },
      {
        name: 'Pan-Seared Salmon',
        description: 'Fresh Atlantic salmon with lemon butter sauce and asparagus',
        price: '$32'
      },
      {
        name: 'Mushroom Risotto',
        description: 'Creamy arborio rice with wild mushrooms and truffle oil',
        price: '$28'
      },
      {
        name: 'Chicken Parmesan',
        description: 'Breaded chicken breast with marinara, mozzarella, and pasta',
        price: '$26'
      },
      {
        name: 'Lobster Linguine',
        description: 'Fresh lobster meat with garlic, white wine, and cherry tomatoes',
        price: '$38'
      },
      {
        name: 'Vegetable Curry',
        description: 'Seasonal vegetables in aromatic coconut curry with basmati rice',
        price: '$24'
      }
    ],
    desserts: [
      {
        name: 'Tiramisu',
        description: 'Classic Italian dessert with espresso-soaked ladyfingers',
        price: '$10'
      },
      {
        name: 'Chocolate Lava Cake',
        description: 'Warm chocolate cake with molten center and vanilla ice cream',
        price: '$12'
      },
      {
        name: 'Crème Brûlée',
        description: 'Vanilla custard with caramelized sugar crust',
        price: '$11'
      },
      {
        name: 'New York Cheesecake',
        description: 'Rich and creamy cheesecake with berry compote',
        price: '$10'
      }
    ],
    drinks: [
      {
        name: 'House Red Wine',
        description: 'Full-bodied Cabernet Sauvignon',
        price: '$9/glass'
      },
      {
        name: 'House White Wine',
        description: 'Crisp Chardonnay',
        price: '$9/glass'
      },
      {
        name: 'Craft Cocktails',
        description: 'Ask about our specialty cocktail menu',
        price: '$14'
      },
      {
        name: 'Fresh Juice',
        description: 'Orange, apple, or cranberry',
        price: '$6'
      }
    ]
  };

  return (
    <section id="menu" className="menu">
      <div className="menu-container">
        <span className="section-label">Discover</span>
        <h2 className="section-title">Our Menu</h2>
        <p className="menu-description">
          Explore our carefully curated selection of dishes, crafted with passion and the finest ingredients
        </p>

        <div className="menu-categories">
          <button
            className={`category-btn ${activeCategory === 'starters' ? 'active' : ''}`}
            onClick={() => setActiveCategory('starters')}
          >
            Starters
          </button>
          <button
            className={`category-btn ${activeCategory === 'mains' ? 'active' : ''}`}
            onClick={() => setActiveCategory('mains')}
          >
            Main Courses
          </button>
          <button
            className={`category-btn ${activeCategory === 'desserts' ? 'active' : ''}`}
            onClick={() => setActiveCategory('desserts')}
          >
            Desserts
          </button>
          <button
            className={`category-btn ${activeCategory === 'drinks' ? 'active' : ''}`}
            onClick={() => setActiveCategory('drinks')}
          >
            Drinks
          </button>
        </div>

        <div className="menu-items">
          {menuItems[activeCategory].map((item, index) => (
            <div key={index} className="menu-item">
              <div className="menu-item-header">
                <h3 className="menu-item-name">{item.name}</h3>
                <span className="menu-item-price">{item.price}</span>
              </div>
              <p className="menu-item-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Menu;
