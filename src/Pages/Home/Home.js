/***
 * has 1 Nav bar, 2 Information Boxes, 1 Foot Bar
 */
import { useEffect } from "react";
import React from "react";
import Showcase from "./Showcase/Showcase";
import Question from "./Questions/Question";
import Banner from "./Banner/Banner";
import InformationGrid from "../../Components/InformationGrid/InformationGrid";
import scrollToTop from "../../Service/ScrollTop";
import TestimonialCard from "./Testimonials/TestimonialCard";
import Testimonial from "./Testimonials/Testimonials";
const Home = () => {
  useEffect(() => {
    scrollToTop();
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
    title1: "Register.",
    description1:
      "Tell us about yourself and what's meaningful to you through your profile.",

    image2: require("../../Resources/HowItWorks/second.png"),
    image2Width: "250px",
    image2Height: "150px",
    title2: "Receive Profiles Monthly",
    description2:
      "Our system discovers matching profiles to send to you monthly via e-mail. ",

    image3: require("../../Resources/HowItWorks/third.png"),
    image3Width: "250px",
    image3Height: "150px",
    title3: "Send Interests.",
    description3:
      "Convey your interest and non-interest to connect with candidates.",

    image4: require("../../Resources/HowItWorks/fourth.png"),
    image4Width: "250px",
    image4Height: "150px",
    title4: "Match and Message.",
    description4:
      "If both candidates show that they're interested in each other, message away!",
  };

  const theRiaWay = {
    backColor: "primary",
    headingColor: "dark",
    titleColor: "info",
    textColor: "secondary",

    heading: "The Ria Way",
    image1: require("../../Resources/TheRiaWay/first.png"),
    image1Height: "150px",
    image1Width: "250px",
    title1: "Verified Users.",
    description1:
      "Each user is manually verified by the Ria team to ensure a genuine experience. ",

    image2: require("../../Resources/TheRiaWay/second.png"),
    image2Width: "250px",
    image2Height: "150px",
    title2: "Curated Matches Made.",
    description2:
      " Users are matched on the basis of their preferences, personality, and passions.",

    image3: require("../../Resources/TheRiaWay/third.png"),
    image3Width: "250px",
    image3Height: "150px",
    title3: "No Swiping Ever.",
    description3:
      "Stop endlessly scrolling to find the one. Ria works to directly send relevant candidates to your e-mail every month.",

    image4: require("../../Resources/TheRiaWay/fourth.png"),
    image4Width: "250px",
    image4Height: "150px",
    title4: "Serious Seekers.",
    description4:
      "Ria's hundreds of members are also looking for something long-term or dating-to-marry. ",
  };

  return (
    <>
      <Banner />

      <Showcase />

      {/* How It Works */}
      <InformationGrid data={howItWorks} />

      {/* The Ria way */}
      <InformationGrid data={theRiaWay} />

      <Testimonial />

      {/* FAQs */}
      <Question />
    </>
  );
};

export default Home;
