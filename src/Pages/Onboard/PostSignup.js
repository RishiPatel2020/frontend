import { useNavigate } from "react-router-dom";
import "./PostSignUp.css";
import React from "react";

const PostSignup = () => {
  const navigate = useNavigate();
  const onSelectPlan = (plan) => {
    // Determine description based on plan selection
    const description =
      plan === "free"
        ? "You've successfully chosen the Free Plan!"
        : "You've successfully applied for the Premium Plan!";
    const title = plan === "free" ? "Congrats!" : "Application Submitted!";

    // Navigate to Congrats component with the description
    navigate("/congrats", { state: { description, title } });
  };

  return (
    <div className="App my-1">
      <h5>
        Consider applying to be a premium member for an active, faster, and
        exclusive matchmaking experience!
      </h5>
      <div className="subscription-container">
        <div className="subscription-card premium-plan text-secondary">
          <h2>Premium</h2>
          <p className="price">$499.99/year</p>
          <ul>
            <li>10 Seats available</li>
            <li>
              Can be matched with free and paying customers in the Ria database
            </li>
            <li>4X Speed of Finding Matches</li>
            <li>Unlimited # of Potential Matches</li>
            <li>12 Months Membership Term</li>
            <li>
              Gold Standard Guarantee - Extra 6 months membership if no
              candidates found within first 12 months
            </li>
            <li>Follow-up detailed questionnaire</li>
            <li>External Searching via offline networks and channels</li>
            <li>Monthly Progress Updates</li>
            <li>3 Free Professional Photos Photoshoot</li>
            <li>50 Date Ideas in Your Area</li>
            <li>Body Language, Confidence, and Date Etiquette Manual</li>
            <li>2024 Outfits & Styling Ideas E-Book</li>
            <li>Post-Date Feedback</li>
          </ul>
          <button className="select-button" onClick={() => onSelectPlan("")}>
            Apply
          </button>
        </div>
        <div className="subscription-card free-plan">
          <h2>Free Member</h2>
          <p className="price">$0/year</p>
          <ul>
            <li>Can only be matched with paying members</li>
            <li>Unlimited # of Potential Matches</li>
          </ul>
          <button
            className="select-button"
            onClick={() => onSelectPlan("free")}
          >
            Choose Free Plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostSignup;
