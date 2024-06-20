import React from "react";
import "./Congrats.css";
import { useNavigate } from "react-router-dom";

const Congrats = () => {
    const navigate = useNavigate();
    const onNext = ()=>{
        navigate("/afterSignUp")
    }
  return (
    <div className="congrats-container">
      <div className="congrats-card">
        <h1>Application Submitted!</h1>
        <p>
          You’ve been added to the Ria database to be matched with premium members!
        </p>
        <button className="next-button" onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Congrats;
