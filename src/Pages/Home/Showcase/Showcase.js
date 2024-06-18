import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";
import "./Showcase.css";
import { useContext } from "react";
import AuthContext from "../../../Components/AuthContext/AuthContext";
import Login from "../../../Components/Login/Login";

const Showcase = () => {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <div class="background-image-container">
      <div class="overlay-text my-5">
        <div className="container">
          <div className="align-items-center my-0.1 pb-4">
            <div className="bigTexts text-primary">
              <div style={{ textShadow: "2px 2px 2px rgb(0,0,0)" }}>
                <strong>Stop Endlessly Swiping for Love.</strong>
              </div>
            </div>

            {/* ONLY if user not logged in  */}

            {!isAuthenticated && (
              <Row className="my-2">
                <Col>
                  <div className="justify-content-center align-items-center">
                    {/* Link to order page */}
                    {!isAuthenticated && (
                      <Link to="/onboard">
                        <Button
                          variant="dark"
                          className="text-primary mt-3"
                          style={{
                            height: "50px",
                            width: "163px",
                            borderRadius: "15px",
                            fontSize: "20px",
                            boxShadow: "2px 2px 2px rgb(0,0,0)",
                          }}
                        >
                          Join for Free
                        </Button>
                      </Link>
                    )}
                    <Login />
                  </div>
                </Col>
              </Row>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
