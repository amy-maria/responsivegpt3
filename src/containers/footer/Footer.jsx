import React from "react";
import "./footer.css";
import logo from "../../assets/logo.svg";

const Footer = () => (
  <div className="gpt3__footer section">
    <div className="gpt3__footer-section-heading">
      <h1>Do you want to step in to the future before others</h1>
      <button>Request Early Access</button>
    </div>
    <div className="gpt3__footer-logo_container">
      <img src={logo} alt="gpt_logo" />
      <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
    </div>
    <div className="gpt3__footer-links_container">
      <h6>Links</h6>
      <ul>
        <li>Overons</li>
        <li>Social Media</li>
        <li>Counters</li>
        <li>Contact</li>
      </ul>
    </div>
    <div className="gpt3__footer-company_container">
      <h6>Company</h6>
      <ul>
        <li>Terms & Conditions</li>
        <li>Privacy Policy</li>
        <li>Contact</li>
      </ul>
    </div>
    <div className="gpt3__footer-contact_container">
      <h6>Get In Touch</h6>
      <ul>
        <li>Crechterwoord K12 182 DK Alknjkcb</li>
        <li>085-132567</li>
        <li>info@payme.net</li>
      </ul>
      <div className="gpt3__footer-copyright">
        <footer>© 2021 GPT-3. All rights reserved.</footer>
      </div>
    </div>
  </div>
);

export default Footer;
