import "./Footer.css";

import { Link } from "react-router-dom";

import { Phone, MapPin, Clock, MessageCircle, ArrowUpRight } from "lucide-react";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <Link to="/" className="logo">
              <img
                src="/images/logo.webp"
                alt="Vanshika Manav"
              />
            </Link>

          <p>
            Your trusted local pharmacy for genuine medicines,
            healthcare essentials, and personalized care.
          </p>

          <a
            href="https://maps.google.com/?q=Atul+Medicos+Jeewan+Park+Uttam+Nagar+New+Delhi"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-location"
          >
            <MapPin size={16} />
            Jeewan Park, Uttam Nagar, New Delhi
            <ArrowUpRight size={14} />
          </a>
        </div>


        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>

          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact Us</a>
        </div>


        {/* Contact */}
        <div className="footer-contact">
          <h4>Get In Touch</h4>

          <a href="tel:9818125138">
            <span className="footer-icon">
              <Phone size={17} />
            </span>
            9818125138
          </a>

          <a
            href="https://wa.me/919818125138"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="footer-icon">
              <MessageCircle size={17} />
            </span>
            WhatsApp 
          </a>

          <div className="footer-hours">
            <span className="footer-icon">
              <Clock size={17} />
            </span>

            <div>
              <span>Opening Hours</span>
              <strong>9:00 AM – 11:00 PM</strong>
            </div>
          </div>
        </div>

      </div>


      {/* Bottom */}
      <div className="footer-bottom">

        <p>
          © 2025 Atul Medicos. All rights reserved.
        </p>

        <p className="footer-credit">
          Website designed & developed by{" "}
          <span>Vanshika</span>
        </p>

      </div>

    </footer>
  );
}

export default Footer;