import { useContext } from "react";
import AuthContext from "../../../Components/AuthContext/AuthContext";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";
import { useNavigate } from "react-router-dom";
import { sendAnalytics } from "../../../Service/Api";
const CallToAction = () => {
  const { isAuthenticated } = useContext(AuthContext);
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
      <div className="d-flex justify-content-center mb-3 text-center">
        {!isAuthenticated && (
          <Link to="/onboard">
            <Button
              variant="dark"
              className="text-primary mt-3 bold"
              style={{
                height: "50px",
                width: "171px",
                borderRadius: "15px",
                fontSize: "20px",
                boxShadow: "2px 2px 2px rgb(0,0,0)",
              }}
              onClick={() => {
                sendAnalytics("Privacy", "Join Ria Button", "Click");
              }}
            >
              Join for Free
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default CallToAction;
