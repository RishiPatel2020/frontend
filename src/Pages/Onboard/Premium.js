import { useNavigate } from "react-router-dom";
import "./Premium.css";
import React, { useState } from "react";
import { sendAnalytics } from "../../Service/Api";
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from "../../Service/Session";
import { applyPremium } from "../../Service/Api";
const Premium = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [message, setMessage] = useState(""); // State to manage messages
  const [isError, setIsError] = useState(false); // State to manage if there's an error
  const navigate = useNavigate();

  const submitApplication = async () => {
    const token = getLocalStorageItem("token"); // Get token from local storage

    if (!token) {
      setMessage("You must be logged in to apply for premium membership.");
      setIsError(true);
      return;
    }

    try {
      sendAnalytics("Premium Card", "Apply Button", "Clicked");
      await applyPremium(token);
      setLocalStorageItem("Premium", "Q");
      setShowConfirmation(true);
    } catch (error) {
      setMessage(
        error.response && error.response.data
          ? error.response.data.error
          : "An unexpected error occurred. Please try again."
      );
      setIsError(true);
    }
  };

  const displayConfirmation = () => (
    <div className="congrats-container">
      <div className="congrats-card bg-light">
        <h1>Application Submitted!</h1>
        <p className="light">
          Thanks, our team will get back to you in 2-4 days after reviewing your
          profile and the number of seats currently available. Keep an eye on
          your e-mail inbox.
        </p>
        <button
          className="next-button bold bg-dark"
          onClick={() => {
            navigate("/dashboard");
          }}
        >
          Next
        </button>
      </div>
    </div>
  );

  const displayError = () => (
    <div className="error-container my-5">
      <div className="error-card bg-light">
        <h1>Application Failed!</h1>
        <p className="light">{message}</p>
        <button
          className="retry-button bold bg-dark"
          onClick={() => {
            setMessage(""); // Clear the message
            setIsError(false); // Reset error state
          }}
        >
          Retry
        </button>
        <button
          className="dashboard-button bold bg-dark"
          onClick={() => {
            navigate("/dashboard");
          }}
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );

  const displayCard = () => (
    <div className="App my-1">
      <h5 className="bold">
        Consider applying to be a premium member for an active, faster, and
        exclusive matchmaking experience!
      </h5>
      <div className="subscription-container">
        <div className="subscription-card premium-plan text-secondary bg-light">
          <h2>Premium</h2>
          <p className="price light">$1000/year</p>
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
          <button
            className="select-button bold bg-dark"
            onClick={() => submitApplication()}
          >
            Apply
          </button>
          <br />
          <button
            className="select-button bold my-1 bg-dark"
            onClick={() => {
              sendAnalytics("Premium Card", "No Thnx Button", "Clicked");
              navigate("/dashboard");
            }}
          >
            No, Thanks!
          </button>
        </div>
      </div>
    </div>
  );

  return showConfirmation
    ? displayConfirmation()
    : isError
    ? displayError()
    : displayCard();
};

export default Premium;
