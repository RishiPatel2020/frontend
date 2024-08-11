import React from "react";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../Service/Scroll/ScrollTop";

const Footer = () => {
  return (
    <footer className="p-5 bg-dark text-white text-center position-relative">
      <div className="container">
        <p className="lead bold">Made with Love in NYC</p>

        <p className="lead bold">Copyright &copy; 2022 Riamatchmaking.com</p>
        <p>
          <Link to="/terms" className="text-light">
            Terms and Conditions
          </Link>
        </p>
        <p>
          <Link to="/privacy" className="text-light">
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
