import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
const MealPlans = ({}) => {
  const navigate = useNavigate();

  const buttonClicked = () => {
    navigate("/order");
  };

  return (
    <section
      className="mealPlans bg-dark row"
      style={{ fontFamily: "Signika", padding: "64px 32px" }}
    >
      <div className="container text-center" style={{ marginLeft: "auto" }}>
        <div
          style={{
            marginRight: "auto",
            marginBottom: "33px",
            marginLeft: "auto",
          }}
        >
          {/* Main Title: Meal Plans For You */}
          <h1
            className="text-light"
            style={{ margin: "0px 0px 10px", fontSize: "48px" }}
          >
            Stop wasting time, life is short
          </h1>

          {/* Main description */}
          {/* <h5 className="text-primary">Stop Endlessly swiping for love</h5> */}
          <h4 className="text-primary">
            Stop scrolling endlessly on stale, fake, and inauthentic profiles
          </h4>
          <h5 className="text-primary">
            Stop scrolling endlessly, let your personalized match making AI do
            its job
          </h5>
          <h6 className="text-primary">
            Review bold and relevant profiles of candidates right to your inbox
            monthly for free
          </h6>
        </div>

        <Container className="text-primary">
          <Row style={{ marginTop: "66px", marginBottom: "32px" }}>
            <Col sm style={{ marginLeft: "8px", marginRight: "8px" }}>
              <div className="card-body text-center">
                {/* Image button 1  */}
                <button
                  onClick={() => buttonClicked()}
                  style={{ background: "transparent", border: "none" }}
                >
                  <img
                    className="h1 mb-3"
                    src={require("../../../Resources/Meals/meal1.png")}
                    alt="lorem"
                    style={{
                      height: "auto",
                      width: "100%",
                      borderRadius: "17px",
                      marginBottom: "6px",
                    }}
                  />
                </button>
                {/* Text below Img 1 */}
                <h4>2 meals</h4>
              </div>
            </Col>

            <Col sm style={{ marginLeft: "8px", marginRight: "8px" }}>
              <div className="card-body text-center">
                {/* Image button 2 */}
                <button
                  onClick={() => buttonClicked()}
                  style={{ background: "transparent", border: "none" }}
                >
                  <img
                    className="h1 mb-3"
                    src={require("../../../Resources/Meals/meal2.png")}
                    alt="lorem"
                    style={{
                      height: "auto",
                      width: "100%",
                      borderRadius: "17px",
                      marginBottom: "6px",
                    }}
                  />
                </button>
                {/* Text below Img 2 */}
                <h4>
                  4 meals
                  {/* <i>
                    <super>*</super>Save 5%<super>*</super>
                  </i> */}
                </h4>
              </div>
            </Col>

            <Col sm style={{ marginLeft: "8px", marginRight: "8px" }}>
              <div className="card-body text-center">
                {/* Image button 3 */}
                <button
                  onClick={() => buttonClicked()}
                  style={{ background: "transparent", border: "none" }}
                >
                  <img
                    className="h1 mb-3"
                    src={require("../../../Resources/Meals/meal3.png")}
                    alt="lorem"
                    style={{
                      height: "auto",
                      width: "100%",
                      borderRadius: "17px",
                      marginBottom: "6px",
                    }}
                  />
                </button>
                {/* Text below Img 3 */}
                <h4>
                  6 meals
                  {/* <i>
                    <super>*</super>Save 8%<super>*</super>
                  </i> */}
                </h4>
              </div>
            </Col>

            <Col sm style={{ marginLeft: "8px", marginRight: "8px" }}>
              <div className="card-body text-center">
                {/* Image button 4 */}
                <button
                  onClick={() => buttonClicked()}
                  style={{ background: "transparent", border: "none" }}
                >
                  <img
                    className="h1 mb-3"
                    src={require("../../../Resources/Meals/meal4.png")}
                    alt="lorem"
                    style={{
                      height: "auto",
                      width: "100%",
                      borderRadius: "17px",
                      marginBottom: "6px",
                    }}
                  />
                </button>
                {/* Text below Img 4 */}
                <h4>
                  8+ meals
                  {/* <i>
                    <super>*</super>Save 10%<super>*</super>
                  </i> */}
                </h4>
              </div>
            </Col>
          </Row>

          <Row>
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
                      borderRadius: "25px",
                      fontSize: "25px",
                    }}
                  >
                    Get Started
                  </Button>
                </Link>
              </div>
            </Col>
          </Row>
          <Row>
            <p className="text-primary">#1 South Asian Matchmaker</p>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default MealPlans;
