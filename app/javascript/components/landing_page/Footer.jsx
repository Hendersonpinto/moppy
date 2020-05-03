import React from "react";
import Logo from "../../../assets/images/logop.svg";

const Footer = () => {
  return (
    <div className="myfooter">
      <div className="content">
        <div className="left">
          <div className="logo">
            <img src={Logo} id="logo" alt="logo" />
            <span></span>
          </div>
          <span id="languages">English | Portuguese</span>
          <p>Moppy PT ApS</p>
          <p>Vestamager 46</p>
          <p>2300 Copenhagen S</p>
        </div>
        <div className="right">
          <div className="footer__cards">
            <div className="footer__card">
              <p className="footer__card-title">Get started</p>
              <p className="footer__card-item">Download app</p>
              <p className="footer__card-item">Become a superhero</p>
            </div>
            <div className="footer__card">
              <p className="footer__card-title">About Us</p>
              <p className="footer__card-item">Terms & Conditions</p>
              <p className="footer__card-item">Privacy policy</p>
              <p className="footer__card-item">Cookies policy</p>
            </div>
            <div className="footer__card">
              <p className="footer__card-title">Contact</p>
              <p className="footer__card-item">Newsletter</p>
              <p className="footer__card-item">Customer Support</p>
              <div className="footer__card-icons">
                <i className="fab fa-facebook"></i>
                <i className="fab fa-linkedin-in"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-twitter"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p id="copyright">Copyright © 2020 Moppy PT</p>
    </div>
  );
};

export default Footer;
