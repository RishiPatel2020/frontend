import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import React from "react";
import Showcase from "./Showcase/Showcase";
import Question from "./Questions/Question";
import Banner from "./Banner/Banner";
import InformationGrid from "../../Components/InformationGrid/InformationGrid";
import JoinHundreds from "./JoinHundreds/JoinHundreds";
import { scrollToTop } from "../../Service/Scroll/ScrollTop";
import Reviews from "./Reviews/Reviews";
import { useNavigate } from "react-router-dom";
import { sendAnalytics } from "../../Service/Api";
const Home = () => {
  useEffect(() => {
    sendAnalytics("Home","Page", "View");
  }, []);
  const howItWorks = {
    backColor: "light",
    headingColor: "dark",
    titleColor: "info",
    textColor: "secondary",

    heading: "How It Works",
    image1: require("../../Resources/HowItWorks/first.png"),
    image1Height: "150px",
    image1Width: "250px",
    title1: "Register",
    description1:
      "Tell us about yourself and what's meaningful to you through your profile",

    image2: require("../../Resources/HowItWorks/second.png"),
    image2Width: "250px",
    image2Height: "150px",
    title2: "Receive Profiles",
    description2:
      "Our team actively searches for candidates that meet your preferences",

    image3: require("../../Resources/HowItWorks/third.png"),
    image3Width: "250px",
    image3Height: "150px",
    title3: "Send Interests",
    description3:
      "Tell us which candidates you're interested in getting to know",

    image4: require("../../Resources/HowItWorks/fourth.png"),
    image4Width: "250px",
    image4Height: "150px",
    title4: "Meet Matches",
    description4:
      "Meet your matches in-person and let us know how it went so we can further refine our search",
  };

  const theRiaWay = {
    backColor: "light",
    headingColor: "dark",
    titleColor: "info",
    textColor: "secondary",

    heading: "The Ria Way",

    image1: require("../../Resources/TheRiaWay/third.png"),
    image1Width: "250px",
    image1Height: "150px",
    title1: "No Swiping Ever",
    description1:
      "No more time wasted on endlessly scrolling, swiping, and liking to find the right one",

    image2: require("../../Resources/TheRiaWay/second.png"),
    image2Width: "250px",
    image2Height: "150px",
    title2: "Curated Matches Made",
    description2:
      " Users are matched on the basis of their preferences, personality, and passions",

    image3: require("../../Resources/TheRiaWay/first.png"),
    image3Height: "150px",
    image3Width: "250px",
    title3: "Verified Users",
    description3:
      "Each user is manually verified by the Ria team to ensure a genuine experience",

    image4: require("../../Resources/TheRiaWay/fourth.png"),
    image4Width: "250px",
    image4Height: "150px",
    title4: "Serious Seekers",
    description4:
      "Ria's hundreds of members are also looking for something long-term or dating-to-marry",
  };

  return (
    <>
      <Banner />

      <Showcase />

      {/* How It Works */}
      <InformationGrid data={howItWorks} />

      {/* Couples pictures */}
      <JoinHundreds />

      {/* The Ria way */}
      <InformationGrid data={theRiaWay} />

      <Reviews />

      {/* FAQs */}
      <Question />
    </>
  );
};

export default Home;
