import React from "react";
import HeaderImage from "./HeaderImage";
import OriginStory from "./OriginStory";
import Values from "./Values";
import Mission from "./Misson";
import Vision from "./Vision";
import CallToAction from "./CallsToAction";
import './About.css'; 

const AboutPage = () => {
  return (
    <div
      className="about-container"
      style={{ width: "100%", margin: 0, padding: 0, overflow: "hidden" }}
    >
      <HeaderImage />
      <Mission />
      <Vision />
      <OriginStory />
      <Values />
      <CallToAction />
    </div>
  );
};

export default AboutPage;
