import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";
import "./Showcase.css";

const Showcase = () => {
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

            <Row className="my-2">
              <Col>
                <div className="justify-content-center align-items-center">
                  {/* Link to order page */}
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
                  <Button
                    variant="dark"
                    className="text-primary mx-4 mt-3"
                    style={{
                      height: "50px",
                      width: "150px",
                      borderRadius: "15px",
                      fontSize: "20px",
                      boxShadow: "2px 2px 2px rgb(0,0,0)",
                    }}
                  >
                    Log In
                  </Button>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
