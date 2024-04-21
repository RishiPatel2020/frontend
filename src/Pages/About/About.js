import React from "react";
import HeaderImage from "./HeaderImage/HeaderImage";
import OriginStory from "./OriginStory/OriginStory";
import Values from "./Values/Values";
import Mission from "./Mission/Misson";
import Vision from "./Vision/Vision";
import CallToAction from "./CallToAction/CallToAction";
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
