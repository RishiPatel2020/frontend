import React from "react";
import "./Congrats.css";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";

const Congrats = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const header = location.state?.title || "Congrats!";
  const description =
    location.state?.description ||
    "You've been added to the Ria database to be matched with premium members!"; // Default description if state is undefined

  return (
    <div className="congrats-container">
      <div className="congrats-card">
        <h1>{header}</h1>
        <p>{description}</p>
        <button
          className="next-button"
          onClick={() => {
            navigate("/dashboard");
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Congrats;
