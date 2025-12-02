// Cart functionality
let cartCount = 0;

// All products data for search
const allProducts = [
    // Skincare
    { name: 'Vitamin C Serum', price: 31, category: 'skincare', original: 89 },
    { name: 'Hyaluronic Acid Moisturizer', price: 34, category: 'skincare', original: 68 },
    { name: 'Green Tea Face Mask', price: 18, category: 'skincare', original: 45 },
    { name: 'SPF 50 Sunscreen', price: 19, category: 'skincare', original: 42 },
    { name: 'Rose Water Toner', price: 11, category: 'skincare', original: 35 },
    { name: 'Retinol Night Cream', price: 52, category: 'skincare', original: 95 },
    // Home Decor
    { name: 'Luxury Scented Candle Set', price: 32, category: 'homedecor', original: 79 },
    { name: 'Modern Wall Art Canvas', price: 67, category: 'homedecor', original: 149 },
    { name: 'Decorative Throw Pillows', price: 30, category: 'homedecor', original: 60 },
    { name: 'LED String Lights', price: 16, category: 'homedecor', original: 45 },
    { name: 'Ceramic Planter Set', price: 36, category: 'homedecor', original: 85 },
    { name: 'Round Wall Mirror', price: 62, category: 'homedecor', original: 120 },
    // Men's Clothing
    { name: "Men's Casual Shirt", price: 26, category: 'mens', original: 65 },
    { name: 'Slim Fit Denim Jeans', price: 40, category: 'mens', original: 89 },
    { name: "Men's Leather Jacket", price: 150, category: 'mens', original: 299 },
    { name: 'Baseball Cap Collection', price: 20, category: 'mens', original: 48 },
    { name: "Men's Running Sneakers", price: 46, category: 'mens', original: 130 },
    { name: "Men's Cargo Shorts", price: 26, category: 'mens', original: 55 },
    // Women's Clothing
    { name: 'Floral Summer Dress', price: 42, category: 'womens', original: 120 },
    { name: "Women's Blouse", price: 31, category: 'womens', original: 78 },
    { name: 'High Heel Pumps', price: 43, category: 'womens', original: 95 },
    { name: "Women's Skinny Jeans", price: 32, category: 'womens', original: 85 },
    { name: "Women's Winter Coat", price: 84, category: 'womens', original: 199 },
    { name: 'Designer Handbag', price: 45, category: 'womens', original: 150 },
    // Kids' Clothing
    { name: "Kids' Graphic T-Shirts", price: 21, category: 'kids', original: 60 },
    { name: "Girls' Party Dress", price: 30, category: 'kids', original: 75 },
    { name: "Boys' Denim Jeans", price: 20, category: 'kids', original: 45 },
    { name: "Kids' Sneakers", price: 21, category: 'kids', original: 65 },
    { name: "Kids' Hoodie", price: 19, category: 'kids', original: 50 },
    { name: "Kids' Backpack", price: 18, category: 'kids', original: 42 }
];

// Function to add items to cart
function addToCart(productName, price) {
    cartCount++;
    updateCartCount();
    showNotification(`${productName} added to cart! ($${price})`);
}

// Update cart count display
function updateCartCount() {
    const cartCountElement = document.querySelector('.cart-count');
    cartCountElement.textContent = cartCount;
    cartCountElement.style.animation = 'pulse 0.3s ease';
    setTimeout(() => {
        cartCountElement.style.animation = '';
    }, 300);
}

// Show notification
function showNotification(message) {
    // Remove existing notification if any
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        z-index: 1001;
        animation: slideIn 0.3s ease;
    `;

    document.body.appendChild(notification);

    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Countdown Timer
function initCountdown() {
    // Set the sale end date (3 days from now)
    const saleEndDate = new Date();
    saleEndDate.setDate(saleEndDate.getDate() + 3);
    saleEndDate.setHours(23, 59, 59, 999);

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = saleEndDate - now;

        if (distance < 0) {
            clearInterval(countdownInterval);
            document.getElementById('countdown').innerHTML = '<h2>Sale Ended!</h2>';
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }

    updateCountdown();
    const countdownInterval = setInterval(updateCountdown, 1000);
}

// Newsletter subscription
function subscribeNewsletter(event) {
    event.preventDefault();
    const emailInput = event.target.querySelector('input[type="email"]');
    const email = emailInput.value;

    showNotification(`Thank you for subscribing! We'll send deals to ${email}`);
    emailInput.value = '';

    return false;
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Initialize countdown
    initCountdown();

    // Smooth scroll
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add scroll effect to navbar
    let lastScroll = 0;
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            navbar.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.2)';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }

        lastScroll = currentScroll;
    });

    // Animate cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all deal cards
    const dealCards = document.querySelectorAll('.deal-card');
    dealCards.forEach(card => {
        card.style.opacity = '0';
        observer.observe(card);
    });

    // Observe category cards
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.style.opacity = '0';
        observer.observe(card);
    });

    // Add pulse animation to CTA button
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('click', function() {
        const firstCategory = document.querySelector('#skincare');
        if (firstCategory) {
            firstCategory.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Function to scroll to specific category section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Function to scroll to clothing subsection
function scrollToSubsection(subsectionId) {
    const subsection = document.getElementById(subsectionId);
    if (subsection) {
        const offsetTop = subsection.offsetTop - 100;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Search functionality
function searchProducts() {
    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value.toLowerCase().trim();

    if (!query) {
        showNotification('Please enter a search term');
        return;
    }

    const results = allProducts.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
    );

    displaySearchResults(results, query);
}

// Display search results
function displaySearchResults(results, query) {
    const overlay = document.getElementById('searchOverlay');
    const resultsContainer = document.getElementById('searchResults');

    if (results.length === 0) {
        resultsContainer.innerHTML = `
            <div class="no-results">
                <p>No products found for "${query}"</p>
                <p>Try searching for:</p>
                <ul>
                    <li>Skincare products</li>
                    <li>Home decor items</li>
                    <li>Clothing (men's, women's, kids')</li>
                </ul>
            </div>
        `;
    } else {
        resultsContainer.innerHTML = results.map(product => {
            const discount = Math.round(((product.original - product.price) / product.original) * 100);
            return `
                <div class="search-result-item">
                    <div class="result-info">
                        <h4>${product.name}</h4>
                        <span class="result-category">${getCategoryName(product.category)}</span>
                    </div>
                    <div class="result-pricing">
                        <span class="result-original">$${product.original}</span>
                        <span class="result-price">$${product.price}</span>
                        <span class="result-discount">-${discount}%</span>
                    </div>
                    <button class="result-add-btn" onclick="addToCart('${product.name}', ${product.price}); closeSearch();">
                        Add to Cart
                    </button>
                </div>
            `;
        }).join('');
    }

    overlay.style.display = 'flex';
}

// Get category display name
function getCategoryName(category) {
    const names = {
        'skincare': 'Skincare',
        'homedecor': 'Home Decor',
        'mens': "Men's Clothing",
        'womens': "Women's Clothing",
        'kids': "Kids' Clothing"
    };
    return names[category] || category;
}

// Close search overlay
function closeSearch() {
    const overlay = document.getElementById('searchOverlay');
    overlay.style.display = 'none';
    document.getElementById('searchInput').value = '';
}

// Search on Enter key
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchProducts();
            }
        });
    }
});

// Track Order functionality
function trackOrder(event) {
    event.preventDefault();
    const orderNumber = event.target.querySelector('input').value;
    const statusDiv = document.getElementById('orderStatus');

    // Simulate order tracking
    statusDiv.innerHTML = `
        <div class="tracking-result">
            <h4>Order ${orderNumber}</h4>
            <div class="tracking-timeline">
                <div class="tracking-step completed">
                    <span class="step-icon">✓</span>
                    <span>Order Placed</span>
                    <small>Nov 25, 2025</small>
                </div>
                <div class="tracking-step completed">
                    <span class="step-icon">✓</span>
                    <span>Processing</span>
                    <small>Nov 26, 2025</small>
                </div>
                <div class="tracking-step active">
                    <span class="step-icon">📦</span>
                    <span>Shipped</span>
                    <small>Nov 28, 2025</small>
                </div>
                <div class="tracking-step">
                    <span class="step-icon">⏱</span>
                    <span>Out for Delivery</span>
                    <small>Pending</small>
                </div>
                <div class="tracking-step">
                    <span class="step-icon">⏱</span>
                    <span>Delivered</span>
                    <small>Expected: Dec 2, 2025</small>
                </div>
            </div>
        </div>
    `;
    showNotification('Order tracking information loaded');
}

// Initiate Return functionality
function initiateReturn(event) {
    event.preventDefault();
    const orderNumber = event.target.querySelector('input').value;
    const reason = event.target.querySelector('select').value;

    showNotification(`Return initiated for order ${orderNumber}. You will receive a confirmation email shortly.`);
    event.target.reset();
}

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }

    @keyframes pulse {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.3);
        }
    }
`;
document.head.appendChild(style);
