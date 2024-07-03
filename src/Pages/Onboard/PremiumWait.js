import React from "react";
import "./PremiumWait.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { scrollToTop } from "../../Service/Scroll/ScrollTop";

const PremiumWait = () => {
  useEffect(() => {
    scrollToTop();
  }, []);
  const navigate = useNavigate();
  const onNext = () => {
    navigate("/premium");
  };
  return (
    <div className="congrats-container">
      <div className="congrats-card">
        <h1>Congrats!</h1>
        <p>
          Thanks, our team will get back to you in 2-4 days after reviewing your
          profile and the number of seats currently available. Keep an eye on
          your e-mail inbox.
        </p>
      </div>
    </div>
  );
};

export default PremiumWait;
