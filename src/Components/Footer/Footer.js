import React from "react";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../Service/Scroll/ScrollTop";

const Footer = () => {
  return (
    <footer className="p-5 bg-dark text-white text-center position-relative" style={{fontSize:"small"}}>
      <div className="container">
        <p className="lead light "style={{fontSize:"small"}}>Made with Love in NYC</p>

        <p className="lead light" style={{fontSize:"small"}}>Copyright &copy; 2022 Riameets.com</p>
        <p>
          <Link to="/terms" className="text-light light">
            Terms and Conditions
          </Link>
        </p>
        <p>
          <Link to="/privacy" className="text-light light">
            Privacy Policy
          </Link>
        </p>
      </div>
      <a onClick={scrollToTop} class="position-absolute bottom-0 end-0 p-5">
        <i class="bi bi-arrow-up-circle h1"></i>
      </a>
    </footer>
  );
};

export default Footer;
