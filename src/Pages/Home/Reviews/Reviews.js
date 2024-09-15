import { sendAnalytics } from "../../../Service/Api";
import React from "react";
import Slider from "react-slick";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Review.css"; // Make sure to include your custom styles
import AuthContext from "../../../Components/AuthContext/AuthContext";

const reviews = [
  {
    text: "“I was getting tired and frustrated with using dating apps to meet someone of quality and actual substance, Ria takes away the stress.”",
    name: "- Vedant Rai, 28 (Jersey City, NJ)",
  },
  {
    text: "“I’ve met a few candidates so far through the service and while I haven’t found my husband just yet, the results have been great :)”",
    name: "- Anjali Patel, 32 (Houston, TX)",
  },
  {
    text: "“I’m really pleased with Ria’s service as it led me to finding my fiancée (now wife). We tied the knot in March 2024!”",
    name: "- Yash Shinde, 29 (San Diego, CA)",
  },
  {
    text: "“Really glad I came across Ria - this feels like starting on the fifth date from the start.”",
    name: "- Shravan Mittal, 38 (Bensalem, PA)",
  },
  {
    text: "“Between work and socializing, I really don’t have time to be swiping on dating apps for hours, so I love the hands-off approach!”",
    name: "- Khusi Chakraborty, 27 (Cleveland, OH)",
  },
];

const Reviews = () => {
  const { isAuthenticated } = React.useContext(AuthContext);

  const settings = {
    dots: true,
    infinite: true,
    speed: 8000, // Slowed down speed (in milliseconds)
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false, // Hide arrows
  };

  return (
    <div className="review-carousel">
      <Container id="reviews " style={{ padding: "24px 12px" }}>
        <div className="text-center">
          <h1
            style={{ fontSize: "42px" }}
            // className="text-dark"
            className="text-info"
          >
            What Users are Saying
          </h1>
        </div>
      </Container>
      <Slider {...settings} className="review-slider">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <div className="review-content">
              <i className="review-text">{review.text}</i>
              <p className="review-author text-dark">{review.name}</p>
            </div>
          </div>
        ))}
      </Slider>
      <Row>
        <Col>
          <div className="justify-content-center align-items-center text-center mt-5">
            {/* Link to order page */}
            {!isAuthenticated && (
              <Link to="/onboard">
                <Button
                  variant="dark"
                  className="text-primary mb-3 bold"
                  style={{
                    height: "50px",
                    width: "171px",
                    borderRadius: "15px",
                    fontSize: "20px",
                    boxShadow: "2px 2px 2px rgb(0,0,0)",
                  }}
                  onClick={() => {
                    sendAnalytics("Reviews", "Join Ria Button", "Click");
                  }}
                >
                  Join for Free
                </Button>
              </Link>
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Reviews;
