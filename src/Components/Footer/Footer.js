import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="p-5 bg-dark text-white text-center position-relative">
      <div className="container">
        <p className="lead">Copyright &copy; 2022 Riamatchmaking.com</p>
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
      <a onClick={scrollTop} class="position-absolute bottom-0 end-0 p-5">
        <i class="bi bi-arrow-up-circle h1"></i>
      </a>
    </footer>
  );
};

export default Footer;
