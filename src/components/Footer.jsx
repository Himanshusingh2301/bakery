import React from 'react';
import { Phone, Mail, Send, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-premium">
      <div className="footer-overlay"></div>
      <div className="container footer-content-wrapper mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 footer-grid">
          
          {/* Brand & About */}
          <div className="footer-col brand-col">
            <div className="nav-logo footer-logo flex items-center gap-2 mb-4">
              <span className="text-3xl font-bold" style={{ fontFamily: "'Dancing Script', cursive", color: "var(--primary-color)" }}>Fresh</span>
              <span className="text-xl font-bold text-white">Bakery</span>
            </div>
            <p className="footer-text">
              Baking happiness every day. We combine traditional recipes with the finest ingredients to bring you the best artisanal breads and pastries.
            </p>
            <div className="social-links-premium">
              <a href="#" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" aria-label="YouTube">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Menu</a></li>
              <li><a href="#">Special Offers</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="footer-col">
            <h3 className="footer-title">Our Products</h3>
            <ul className="footer-links">
              <li><a href="#">Artisan Breads</a></li>
              <li><a href="#">Cakes & Pastries</a></li>
              <li><a href="#">Cookies & Biscuits</a></li>
              <li><a href="#">Custom Orders</a></li>
              <li><a href="#">Vegan Options</a></li>
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div className="footer-col">
            <h3 className="footer-title">Stay Connected</h3>
            <p className="footer-text mb-4">Subscribe to get special offers and updates.</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your email address" required />
              <button type="submit" aria-label="Subscribe">
                <Send size={18} />
              </button>
            </form>
            
            <div className="footer-contact-mini mt-4">
              <p><Phone size={16} /> +91 98765 43210</p>
              <p><Mail size={16} /> hello@freshbakery.com</p>
              <p><MapPin size={16} /> 123 Bakery Lane, Food City</p>
            </div>
          </div>

        </div>
      </div>

      <div className="footer-bottom">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="footer-bottom-flex">
            <p>&copy; {new Date().getFullYear()} Fresh Bakery. All rights reserved.</p>
            <div className="footer-legal">
              <a href="#">Privacy Policy</a>
              <span className="divider">|</span>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
