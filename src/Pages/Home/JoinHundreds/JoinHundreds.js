import { sendAnalytics } from "../../../Service/Api";
import React from "react";
import { useContext } from "react";
import {Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import AuthContext from "../../../Components/AuthContext/AuthContext";
const JoinHundreds = () => {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <section className="text-center bg-light mt-4">
      <div style={{ textAlign: "center" }}>
        {/* Main Title eg. "How you Save Time"  */}
        <h1
          style={{ margin: "0px 0px 10px", fontSize: "48px" }}
          className="text-dark"
        >
          Quality Over Quantity
        </h1>
        {/* <h2
          style={{ margin: "0px 0px 10px", fontSize: "34px" }}
          className="text-info"
        >
          Tons of Singles
        </h2> */}
      </div>
      {/* Desktop image (hidden on xs to md screens) */}
      <img
        src={require("../../../Resources/Background/newBack3.png")}
        alt="Desktop View"
        className="img-fluid d-none d-md-block"
      />
      {/* Mobile image (visible on xs to md screens, hidden on larger screens) */}
      <img
        src={require("../../../Resources/Background/newBack2.png")}
        alt="Mobile View"
        className="img-fluid d-block d-md-none"
      />
      {/* <h2
        style={{ margin: "0px 0px 10px", fontSize: "34px" }}
        className="text-info"
      >
        Tons of Singles
      </h2> */}
      {/* Common Content for desktop and mobile */}
      <div>
        <p className="text-secondary light">
          Our matchmakers work with hundreds of Indian, Pakistani, Bangladeshi,
          Sri Lankan, Nepali, Guyanese, and more singles to find their perfect
          match
        </p>

        {!isAuthenticated && (
          <div className="mb-4 py-4">
            <Link to="/onboard">
              <Button
                variant="dark"
                className="text-primary bold"
                style={{
                  height: "50px",
                  width: "171px",
                  borderRadius: "15px",
                  fontSize: "20px",
                  boxShadow: "2px 2px 2px rgb(0,0,0)",
                }}
                onClick={() => {
                  sendAnalytics(
                    "Join Hundreds(Home Page)",
                    "Join Ria Button",
                    "Click"
                  );
                }}
              >
                Join for Free
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default JoinHundreds;
