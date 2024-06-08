import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h1 className="logo-text">IQB</h1>
          <p>
            Learn Full Stack Development From The Ground Up. Gain in-demand tech
            skills like Javascript, React, and Node.js and build a solid
            portfolio to demonstrate your abilities to potential employers.
          </p>
          <div className="contact">
            <span>
              <i className="fas fa-phone"></i> &nbsp; +1-234-567-890
            </span>
            <span>
              <i className="fas fa-envelope"></i> &nbsp; info@company.com
            </span>
          </div>
          <div className="socials">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <a href="#">Free Courses</a>
            </li>

            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Full Stack Course</a>
            </li>
            <li>
              <a href="#">Placements</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-section contact-form">
          <h2>Contact Us</h2>
          <form action="#" method="post">
            <input
              type="email"
              name="email"
              className="text-input contact-input"
              placeholder="Your email address..."
            />
            <textarea
              name="message"
              className="text-input contact-input"
              placeholder="Your message..."
            ></textarea>
            <button type="submit" className="btn btn-big contact-btn">
              <i className="fas fa-envelope"></i> Send
            </button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">&copy; iqb.com | Designed by IQB</div>
    </footer>
  );
};

export default Footer;
