import { LoadingAccessContext } from "../../Components/GhostLoader/LoadingAccessContext";
import { useContext } from "react";
import React from "react";
import HeaderImage from "./HeaderImage/HeaderImage";
import OriginStory from "./OriginStory/OriginStory";
import Values from "./Values/Values";
import Mission from "./Mission/Misson";
import Vision from "./Vision/Vision";
import CallToAction from "./CallToAction/CallToAction";
import "./About.css";
import { scrollToTop } from "../../Service/Scroll/ScrollTop";
import { useEffect } from "react";
import { sendAnalytics } from "../../Service/Api";
import { useNavigate } from "react-router-dom";
const AboutPage = () => {
  const { grantLoadingAccess } = useContext(LoadingAccessContext);
  const navigate = useNavigate;
  grantLoadingAccess();
  navigate("/loading");
  useEffect(() => {
    scrollToTop();
    sendAnalytics("About", "Page", "View");
  }, []);
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
