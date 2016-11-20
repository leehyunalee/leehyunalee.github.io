import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-locations">
        <div className="footer-item">berlin</div>
        <div className="footer-item">seoul</div>
        <div className="footer-item">paris</div>
      </div>
      <div className="footer-contact">
        <a className="footer-item" href="mailto:info@hyunalee.com">info@hyunalee.com</a>
        <div className="footer-item">10409, berlin, germany</div>
        <a className="footer-item" href="tel:00491718050913">+49 171 8050913</a>
      </div>
    </footer>
  );
}

export default Footer;
