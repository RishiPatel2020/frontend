import React from "react";
import "./Testimonials.css";

export default function TestimonialCard({
  image,
  ...rest
}) {
  return (
    <div className="testimonial-card" {...rest}>
      <div className="testimonial-image">
        <img src={image} alt="testimonial" />
      </div>
    </div>
  );
}
