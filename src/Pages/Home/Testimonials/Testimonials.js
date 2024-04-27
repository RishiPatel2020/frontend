import { Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import TestimonialCard from "./TestimonialCard";
import "./Testimonials.css";

const items = [
  <TestimonialCard
    image={require("../../../Resources/Users/Sravni.png")}
    data-value="1"
  />,
  <TestimonialCard
    image={require("../../../Resources/Users/Rakesh.png")}
    data-value="2"
  />,
  <TestimonialCard
    image={require("../../../Resources/Users/Poorvi.png")}
    data-value="3"
  />,
  <TestimonialCard
    image={require("../../../Resources/Users/Ramesh.png")}
    data-value="4"
  />,
  <TestimonialCard
    image={require("../../../Resources/Users/Meena.png")}
    data-value="5"
  />,
  <TestimonialCard
    image={require("../../../Resources/Users/Guri.png")}
    data-value="6"
  />,
  <TestimonialCard
    image={require("../../../Resources/Users/Sia.png")}
    data-value="7"
  />,

  <TestimonialCard
    image={require("../../../Resources/Users/Prachar.png")}
    data-value="8"
  />,

  <TestimonialCard
    image={require("../../../Resources/Users/Mauji.png")}
    data-value="9"
  />,
  <TestimonialCard
    image={require("../../../Resources/Users/Sharmeela.png")}
    data-value="9"
  />,
];

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1000: { items: 3 },
};

export default function Testimonial() {
  return (
    <>
      <div className="testimonial-container text-center bg-light">
        <div
          className="testimonials text-dark titleText"
          style={{ fontSize: "48px" }}
        >
          Join Hundreds
        </div>
        {/* <p className="testimonials-description">
          Don't take our word, see what our customers are saying
        </p> */}
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          autoPlay
          infinite
          autoPlayInterval={1700}
          animationDuration={1700}
          disableButtonsControls
        />

        <div className="justify-content-center align-items-center text-center py-4">
          {/* Link to order page */}
          <Link to="/register">
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
        </div>
      </div>
    </>
  );
}
