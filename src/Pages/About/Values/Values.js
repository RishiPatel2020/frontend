import React from "react";

const Values = () => {
  return (
    <div className="values bg-primary text-secondary">
      <h2 className="text-info bold">Our Values and Philosophy</h2>
      <h4 className="bold">At Ria, we are guided by three core values:</h4>
      <ul className="light">
        <li>
          <strong className="text-info">Respect for Time:</strong> We believe
          your time is precious. Our platform is designed to efficiently
          navigate you to compatible matches, avoiding the clutter of endless
          browsing.
        </li>
        <li>
          <strong className="text-info">Depth in Connections:</strong> We
          prioritize depth over breadth. Ria focuses on the quality of matches,
          not the quantity, enabling more meaningful relationships that are
          built to last.
        </li>
        <li>
          <strong className="text-info">Safety and Privacy:</strong> In the
          world of online dating, your safety and privacy are paramount. We are
          committed to maintaining the highest standards of security and
          confidentiality, ensuring you can search for love with peace of mind.
        </li>
      </ul>
      <p className="light">
        Our philosophy is simple: every significant connection should start with
        trust and a deep understanding of each other's values and desires. Ria
        empowers you to find exactly that, transforming the landscape of online
        dating into a more fruitful and less daunting experience.
      </p>
    </div>
  );
};

export default Values;
