import React from "react";
import { useNavigate } from "react-router-dom";
import { sendAnalytics } from "../../../Service/Api";
const CallToAction = () => {
  const navigate = useNavigate();
  return (
    <div className="call-to-action bg-light">
      <h2 className="text-info bold">Ready to Find Love?</h2>
      <p className="text-secondary light">
        Are you ready to change the way you experience finding that spark? Join
        Ria today and start your journey towards meaningful connections. No more
        swiping through endless profiles. No more matches that don’t match. Just
        real, deep connections tailored to you. Sign up now to explore a
        hands-off fully compatible matchmaking experience. Let's make
        connections meaningful again.
      </p>
      <button
        className="text-light bg-dark bold"
        onClick={() => {
          sendAnalytics("About", "Join Ria Button", "Click");
          navigate("/frontend");
        }}
      >
        Join Ria
      </button>
    </div>
  );
};

export default CallToAction;
