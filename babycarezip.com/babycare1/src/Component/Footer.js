import React from 'react';
import '../Component/Footer.css'; // Importing custom CSS for footer styling

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Section 1: About BABYCare */}
        <div className="footer-section">
          <h2 className="title">BABYCare</h2>
          <div className="footer-subcontainer">
            <p>
              Welcome to BABYCare, your trusted resource for expert guidance on caring for your baby 
              and supporting pregnant mothers. Discover free, expert-approved tips and resources to give 
              your little one the best start in life. From pregnancy to parenthood, explore our comprehensive 
              guides for confident parenting!
            </p>
            <p>&copy; 2024 | All Rights Reserved</p>
          </div>
        </div>

        {/* Section 2: Contact Information */}
        <div className="footer-section">
          <h2 className="title">Contact Us</h2>
          <div className="footer-subcontainer">
            <p>
              <strong>Yuvraj:</strong> 8830205140
            </p>
            <p>
              <strong>Sanika:</strong> 8446216171
            </p>
            <p>
              <strong>pimpaletushar00@gmail.com | pritiwalke4@gmail.com</strong>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
