import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";
import background from "../../../Resources/Background/newCoupleBack1.png";
import "./Showcase.css";

const Showcase = () => {
  return (
    <section
      className="bg-light text-primary p-5 p-lg-0 pt-lg-5 text-center text-sm-start backgroundImage"
      id="Showcase"
      style={{
        // Background Image
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="container">
        <div className="align-items-center my-0.1 pb-4">
          {/* Big Texts */}
          <div className="bigTexts text-primary">
            {/* Text 1 */}
            <div>
              <strong>Stop</strong>
            </div>

            {/* Text 2 */}
            {/* <div className="text-primary">
                <strong>All In One </strong>
              </div> */}

            <div>
              <strong>Scrolling</strong>
            </div>

            {/* Text 3 */}
            <div>
              <strong>Endlessely</strong>
            </div>
          </div>

          {/* Text 4,5,6 */}
          <div className="smallTexts">
            <span className="lead" style={{ fontSize: "1.7em" }}>
              {/* <span className="text-primary">Freshly Cooked</span> */}
              <span style={{ color: "rgb(237,12,60)" }}>Save your time</span>
              <br></br>
            </span>
          </div>

          {/* ONLY if user not logged in  */}

          <Row className="my-2">
            <Col>
              <div className="justify-content-center align-items-center">
                {/* Link to order page */}
                <Link to="/register">
                  <Button
                    variant="dark"
                    className="text-primary"
                    style={{
                      height: "50px",
                      width: "150px",
                      borderRadius: "15px",
                      fontSize: "25px",
                    }}
                  >
                    Get started
                  </Button>
                </Link>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
