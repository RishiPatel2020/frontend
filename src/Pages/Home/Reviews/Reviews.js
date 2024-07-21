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
    text: "“I was getting tired and frustrated with using dating apps to meet someone of quality and actual substance, Ria takes away the stress of having to manually search for someone and worrying if we’re on the same page.”",
    name: "- Vedant Rai, 28 (Jersey City, NJ)",
  },
  {
    text: "“I really like how the Ria team stays on top of their game and is constantly looking out for me. I can worry a lot less about finding someone who understands me. I’ve met a few candidates so far through the service and while I haven’t found my husband just yet, the results have been great :)”",
    name: "- Anjali Patel, 32 (Houston, TX)",
  },
  {
    text: "“Finding a life partner is a full time job and juggling this with the corporate life is quite challenging. I’m really pleased with Ria’s service as it led me to finding my fiancee (now wife). The Ria team worked closely with me to find the right person for me. We tied the knot in March 2024!”",
    name: "- Yash Shinde, 29 (San Diego, CA)",
  },
  {
    text: "“I can’t believe I didn’t know a service like this existed! Really glad I came across Ria as I don’t have time to figure out if someone wants the same things I want out of a relationship. This feels like starting on the fifth date from the very start.”",
    name: "- Shravan Mittal, 38 (Bensalem, PA)",
  },
  {
    text: "“A close friend joined Ria and recommended that I try it out as I was having a tough time finding a life partner who saw life in the same way I did. Ria continues to match me with people who are very similar to my preferences and I’ve just been loving the hands-off approach!”",
    name: "- Khusi Chakraborty, 27 (Cleveland, OH)",
  },
];

const Reviews = () => {
  const { isAuthenticated } = React.useContext(AuthContext);

  const settings = {
    dots: true,
    infinite: true,
    speed: 2500, // Slowed down speed (in milliseconds)
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Hide arrows
  };

  return (
    <div className="review-carousel">
      <Container id="reviews">
        <div className="text-center">
          <h1
            style={{ margin: "0px 0px 10px", fontSize: "42px" }}
            className="text-dark"
          >
            What Others are Saying
          </h1>
        </div>
      </Container>
      <Slider {...settings} className="review-slider">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <div className="review-content">
              <i className="review-text">{review.text}</i>
              <p className="review-author text-info">{review.name}</p>
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
                  className="text-primary mt-3 bold"
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
