import React from "react";
import "./footer.css";
import logo from "../../assets/logo.svg";

const Footer = () => (
  <div className="gpt3__footer section">
    <div className="gpt3__footer-section-heading">
      <h1>Do you want to step in to the future before others</h1>
      <button>Request Early Access</button>
    </div>
    <div className="gpt3__footer-links">
      <div className="gpt3__footer-logo_container">
        <img src={logo} alt="gpt_logo" />
        <p>
          Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved
        </p>
      </div>
      <div className="gpt3__footer-links_container">
        <h6>Links</h6>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-company_container">
        <h6>Company</h6>

        <p>Terms & Conditions</p>
        <p>Privacy Popcy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-contact_container">
        <h6>Get In Touch</h6>

        <p>
          Crechterwoord K12 <br />
          182 DK Alknjkcb
        </p>
        <p>085-132567</p>
        <p>info@payme.net</p>
      </div>
      <div className="gpt3__footer-copyright">
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  </div>
);

export default Footer;
