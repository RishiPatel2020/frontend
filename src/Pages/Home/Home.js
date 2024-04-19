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
  const saveTime = {
    backColor: "primary",
    headingColor: "dark",
    titleColor: "white",
    textColor: "secondary",

    heading: "The Ria Way",
    image1: require("../../Resources/HowItWorks/first.png"),
    image1Height: "150px",
    image1Width: "250px",
    title1: "Verified and Authentic Users.",
    description1:
      "Each user is manually verified by the Ria team to ensure a genuine experience. ",

    image2: require("../../Resources/HowItWorks/second.png"),
    image2Width: "250px",
    image2Height: "150px",
    title2: "Curated Matches Made.",
    description2:
      "Hundreds of users are matched on their unlimited preferences and filters from physicality to personality.",

    image3: require("../../Resources/HowItWorks/third.png"),
    image3Width: "250px",
    image3Height: "150px",
    title3: "No Swiping or Scrolling Ever.",
    description3:
      "You’ll never scroll or swipe on another random person again. Ria works to directly send relevant candidates to your e-mail every month. ",
  };

  const stats = {
    backColor: "light",
    headingColor: "dark",
    titleColor: "dark",
    textColor: "dark",

    heading: "Authentically Amazing",
    image1: require("../../Resources/Vector/customers.png"),
    image1Height: "150px",
    image1Width: "345.95px",
    title1: "Diverse Customers",
    description1:
      "Customers from backgrounds such as: programmers, students, sports enthusiasts, military veterans",

    image2: require("../../Resources/Vector/satisfiction.png"),
    image2Width: "241.44px",
    image2Height: "150px",
    title2: "Guaranteed Satisfaction",
    description2:
      "Customers have repeatedly praised Mirchi Meals’ affordability, quantity and pure taste",

    image3: require("../../Resources/Vector/kitchen.png"),
    image3Width: "313.80px",
    image3Height: "150px",
    title3: "Quality Chefs and Ingredients",
    description3:
      "Across New Jersey, we are partnered with top rated kitchens.",
  };
  return (
    <>
      {/* <Banner /> */}
      {/* Log In & Sign Up Button */}
      <Showcase />

      {/* How you save time */}
      <InformationGrid data={saveTime} />

      {/* Meal Plans */}
      <MealPlans />

      {/* <MealsLookUp /> */}
      {/* <Testimonials /> */}

      {/* FAQs */}
      <Question />

      {/* Contact */}
      <Contact />
    </>
  );
};

export default Home;
