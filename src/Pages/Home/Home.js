/***
 * has 1 Nav bar, 2 Information Boxes, 1 Foot Bar
 */

import { useEffect } from "react";
import React from "react";
import Showcase from "./Showcase/Showcase";
import Question from "./Questions/Question";
import Contact from "./Contact/Contact";
import InformationGrid from "../../Components/InformationGrid/InformationGrid";
import Banner from "./Banner/Banner";
import MealPlans from "./MealPlans/MealPlans";
const Home = () => {
  useEffect(() => {}, []);
  const theRiaWay = {
    backColor: "primary",
    headingColor: "dark",
    titleColor: "white",
    textColor: "secondary",

    heading: "The Ria Way",
    image1: require("../../Resources/TheRiaWay/first.png"),
    image1Height: "150px",
    image1Width: "250px",
    title1: "Verified and Authentic Users.",
    description1:
      "Each user is manually verified by the Ria team to ensure a genuine experience. ",

    image2: require("../../Resources/TheRiaWay/second.png"),
    image2Width: "250px",
    image2Height: "150px",
    title2: "Curated Matches Made.",
    description2:
      "Hundreds of users are matched on their unlimited preferences and filters from physicality to personality.",

    image3: require("../../Resources/TheRiaWay/third.png"),
    image3Width: "250px",
    image3Height: "150px",
    title3: "No Swiping or Scrolling Ever.",
    description3:
      "You’ll never scroll or swipe on another random person again. Ria works to directly send relevant candidates to your e-mail every month. ",
  };

  const howItWorks = {
    backColor: "light",
    headingColor: "dark",
    titleColor: "white",
    textColor: "secondary",

    heading: "How It Works",
    image1: require("../../Resources/HowItWorks/first.png"),
    image1Height: "150px",
    image1Width: "250px",
    title1: "Register.",
    description1:
      "Let us know about yourself and what’s meaningful to you through your profile.",

    image2: require("../../Resources/HowItWorks/second.png"),
    image2Width: "250px",
    image2Height: "150px",
    title2: "Automatically Receive Matching Candidates Each Month.",
    description2:
      "Sit back and let our system discover matching profiles to send to you via e-mail every month.",

    image3: require("../../Resources/HowItWorks/third.png"),
    image3Width: "250px",
    image3Height: "150px",
    title3: "Match and Message.",
    description3:
      "If both candidates show that they're interested in each other, message away!",
  };
  


  return (
    <>
      {/* <Banner /> */}


      <Showcase />

      {/* How It Works */}
      <InformationGrid data={howItWorks} />

      {/* The Ria way */}
      <InformationGrid data={theRiaWay} />

      {/* Meal Plans */}
      <MealPlans />


      {/* FAQs */}
      <Question />

      {/* Contact */}
      <Contact />
    </>
  );
};

export default Home;
