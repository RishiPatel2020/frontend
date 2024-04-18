import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";
import background from "../../../Resources/Background/kankotri1.jpg";
import "./Showcase.css";

const Showcase = () => {
  return (
    <section
      className="bg-primary text-primary p-5 p-lg-0 pt-lg-5 text-center text-sm-start backgroundImage"
      id="Showcase"
      style={{
        // Background Image
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="container">
        <div className="d-sm-flex align-items-center my-0.1">
          {/* Red Box */}
          <div className="boxing">
            {/* Big Texts */}
            <div className="bigTexts">
              {/* Text 1 */}
              <div className="text-primary">
                <strong>Stop</strong>
              </div>

              {/* Text 2 */}
              {/* <div className="text-primary">
                <strong>All In One </strong>
              </div> */}

              <div className="text-primary">
                <strong>Scrolling</strong>
              </div>

              {/* Text 3 */}
              <div className="text-primary">
                <strong>Endlessely</strong>
              </div>
            </div>

            {/* Text 4,5,6 */}
            <div className="smallTexts">
              <span className="lead text-primary" style={{ fontSize: "1.7em" }}>
                {/* <span className="text-primary">Freshly Cooked</span> */}
                <span style={{ color: "rgb(255,87,20)" }}>Save your time</span>
                <br></br>
              </span>
            </div>

            {/* ONLY if user not logged in  */}

            <Row className="my-2">
              <Col>
                <div className="d-flex justify-content-center align-items-center">
                  {/* Link to order page */}
                  <Link to="/order">
                    <Button
                      variant="primary"
                      className="text-dark"
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
      </div>
    </section>
  );
};

export default Showcase;
