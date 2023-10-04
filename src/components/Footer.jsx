import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section about">
            <h3>About Us</h3>
            <p>
              The Muslin International Limited is a Private Limited Company and it has a sister concern company named Cotton Muslin International. The Muslin International Limited is a 100% export-oriented garments.
            </p>
          </div>
          <div className="footer-section contact">
            <h3>Contact Us</h3>
            <p>29, Sector 13, Uttara 13, Dhaka, Bangladesh</p>
            <p>Email: armanicepust9@gmail.com</p>
            <p>Phone: +880 181 130 2984</p>
          </div>
          <div className="footer-section social">
            <h3>Follow Us</h3>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Zonesparks</p>
      </div>
    </footer>
  );
}
