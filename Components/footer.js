import React from 'react';
import './Footer.css'; // Import the CSS file
import { FaInstagram, FaFacebook, FaTiktok, FaLinkedin, FaYoutube } from 'react-icons/fa';


const Footer = () => {
  return (
    <div className='main'>
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img src="https://a.storyblok.com/f/165154/x/b69011fb22/_logo.svg" alt="Gelato" className="footer-logo-img" />
          <p className="footer-description">
            Gelato has created the world's largest network for local production and distribution of customized products. Together we bring creativity to life - and into business.
          </p>
          <button className="footer-button">Get started</button>
        </div>
        <div className="footer-app">
          <p className="footer-app-title">Get the app</p>
          <div className="footer-app-icons">
            <img src="https://a.storyblok.com/f/165154/x/de4bf52166/badge-1.svg" alt="App Store" className="footer-app-icon" />
            <img src="https://a.storyblok.com/f/165154/x/61c51d3d38/badge.svg" alt="Google Play" className="footer-app-icon" />
          </div>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h4>Print on demand</h4>
            <ul>
              <li>What is print on demand?</li>
              <li>Product catalog</li>
              <li>Shipping and delivery</li>
              <li>Dropshipping products</li>
              <li>Pro sellers</li>
              <li>White label products</li>
              <li>Returns policy</li>
              <li>Global, yet local</li>
              <li>Sustainability</li>
              <li>Support</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Integrations</h4>
            <ul>
              <li>Shopify</li>
              <li>Etsy</li>
              <li>WooCommerce</li>
              <li>Wix</li>
              <li>Squarespace</li>
              <li>BigCommerce</li>
              <li>API</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Start selling</h4>
            <ul>
              <li>Embroidery</li>
              <li>Print on demand t-shirts</li>
              <li>Print on demand hoodies</li>
              <li>Print on demand posters</li>
              <li>Print on demand canvas</li>
              <li>Print on demand calendars</li>
              <li>Print on demand mugs</li>
              <li>Custom products</li>
              <li>Custom clothing</li>
              <li>Custom merchandise</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li>GelatoConnect</li>
              <li>About Gelato</li>
              <li>Leadership team</li>
              <li>Board & investors</li>
              <li>Newsroom</li>
              <li>Blog</li>
              <li>Customer Stories</li>
              <li>Partners</li>
              <li>Careers</li>
              <li>Affiliates program</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-social">
          <p>Find Gelato on:</p>
          <div className="social-icons">
            <FaInstagram className="social-icon" />
            <FaFacebook className="social-icon" />
            <FaTiktok className="social-icon" />
            <FaLinkedin className="social-icon" />
            <FaYoutube className="social-icon" />
          </div>
        </div>
        <div className="footer-language">
          <select>
            <option>English (India)</option>
            <option>Hindi</option>
            {/* Add more options if needed */}
          </select>
        </div>
        <div className="footer-legal">
          <a href="#">Contact us</a>
          <a href="#">Legal</a>
          <a href="#">Privacy policy</a>
          <a href="#">Cookie policy</a>
          <a href="#">API terms</a>
          <a href="#">Sitemap</a>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
