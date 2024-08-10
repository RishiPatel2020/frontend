import { sendAnalytics } from "../../Service/Api";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./InformationGrid.css";
import AuthContext from "../AuthContext/AuthContext";

const InformationGrid = ({ data }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <section
      className={
        "row align-items-center justify-content-between bg-" + data.backColor
      }
    >
      <Container style={{ padding: "64px 32px" }}>
        <div style={{ textAlign: "center" }}>
          {/* Main Title eg. "How you Save Time"  */}
          <h1
            style={{ margin: "0px 0px 10px", fontSize: "48px" }}
            className={"text-" + data.headingColor}
          >
            {data.heading}
          </h1>
        </div>

        <Row>
          <Col sm>
            <div className="card-body text-center">
              {/* Vector Image */}
              <img
                className="h1 mb-3 imgAdjustments"
                src={data.image1}
                style={{ height: data.image1Height, width: data.image1Width }}
                alt="lorem"
              />

              {/* Sub Title eg. "Enjoy Your Meals" */}
              <h4 className={"text-" + data.titleColor}>{data.title1}</h4>

              {/* Description */}
              <p className={"light card-text text-" + data.textColor}>
                {data.description1}
              </p>
            </div>
          </Col>

          <Col sm>
            <div className="card-body text-center">
              <img
                className="h1 mb-3 imgAdjustments"
                src={data.image2}
                style={{ height: data.image2Height, width: data.image2Width }}
                alt="lorem"
              />

              <h4 className={"text-" + data.titleColor}>{data.title2}</h4>
              <p className={"light card-text text-" + data.textColor}>
                {data.description2}
              </p>
            </div>
          </Col>
          <Col sm>
            <div className="card-body text-center">
              <img
                className="h1 mb-3 imgAdjustments"
                src={data.image3}
                style={{ height: data.image3Height, width: data.image3Width }}
                alt="lorem"
              />

              <h4 className={"text-" + data.titleColor}>{data.title3}</h4>
              <p className={"light card-text text-" + data.textColor}>
                {data.description3}
              </p>
            </div>
          </Col>

          <Col sm>
            <div className="card-body text-center">
              <img
                className="h1 mb-3 imgAdjustments"
                src={data.image4}
                style={{ height: data.image4Height, width: data.image4Width }}
                alt="lorem"
              />

              <h4 className={"text-" + data.titleColor}>{data.title4}</h4>
              <p className={"light card-text text-" + data.textColor}>
                {data.description4}
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="justify-content-center align-items-center text-center">
              {/* Link to order page */}
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
                    onClick={() =>
                      sendAnalytics(
                        data.heading,
                        "Join For Free Button",
                        "Click"
                      )
                    }
                  >
                    Join for Free
                  </Button>
                </Link>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default InformationGrid;
