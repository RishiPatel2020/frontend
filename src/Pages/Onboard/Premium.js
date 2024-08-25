import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Premium.css";
import React, { useState } from "react";
import { sendAnalytics } from "../../Service/Api";
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from "../../Service/Session";
import { applyPremium } from "../../Service/Api";
import { NOT_APPLIED, QUEUED } from "../../Service/Constants";
import FirstPricing from "../../Resources/Premium/First_Pricing.png";
import LastPricing from "../../Resources/Premium/Last_Pricing.png";
import MiddlePricing from "../../Resources/Premium/Middle_Pricing.png";
import BeigeCheckMark from "../../Resources/Premium/beigeCheckMark.png";
import DarkCheckMark from "../../Resources/Premium/darkCheckMark.png";

const Premium = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (
      getLocalStorageItem("Premium") &&
      getLocalStorageItem("Premium") !== NOT_APPLIED
    ) {
      navigate("/dashboard");
    }
  }, []);

  const submitApplication = async () => {
    const token = getLocalStorageItem("token");

    if (!token) {
      setMessage("You must be logged in to apply for premium membership.");
      setIsError(true);
      return;
    }

    try {
      sendAnalytics("Premium Card", "Apply Button", "Clicked");
      await applyPremium(token);
      setLocalStorageItem("Premium", QUEUED);
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

  const displayCards = () => (
    <div className="App my-1">
      <h5 className="bold">
        Consider applying to be a premium member for an active, faster, and
        exclusive matchmaking experience!
      </h5>
      <div className="subscription-container">
        {/* Card 1 */}
        <div className="subscription-card premium-plan text-secondary bg-primary">
          <div className="p-3">
            <div className="premium-header">
              <img
                src={FirstPricing}
                alt="Premium Icon"
                className="premium-icon"
              />
            </div>
            <h2 className="premium-title">Premium - 6 Months</h2>
            <p className="availability light">9 Seats available</p>
            <h2 style={{ textAlign: "left" }}>
              $700<span style={{ fontSize: "small" }}>/ 6 mos</span>
            </h2>
          </div>

          <button
            className="apply-button bold bg-info"
            onClick={() => submitApplication()}
          >
            Apply
          </button>

          <hr
            style={{
              color: "black",
              borderTop: "3px solid black",
              margin: "20px 0",
            }}
          />

          <ul className="benefits-list light">
            <li>
              <img
                src={DarkCheckMark}
                alt="Checkmark"
                className="checkmark-icon"
              />{" "}
              Match with free and paying customers
            </li>
            <li>
              <img
                src={DarkCheckMark}
                alt="Checkmark"
                className="checkmark-icon"
              />{" "}
              <strong style={{ marginRight: "5px" }}>4X</strong> Speed of
              Finding Matches
            </li>
            <li>
              <img
                src={DarkCheckMark}
                alt="Checkmark"
                className="checkmark-icon"
              />{" "}
              Silver Guarantee - Extra 1 month if no candidates found within
              first 12 months
            </li>
            <li>
              <img
                src={DarkCheckMark}
                alt="Checkmark"
                className="checkmark-icon"
              />{" "}
              Unlimited # of Potential Matches
            </li>
            <li>
              <img
                src={DarkCheckMark}
                alt="Checkmark"
                className="checkmark-icon"
              />{" "}
              External Searching via offline networks and channels
            </li>
            <li>
              <img
                src={DarkCheckMark}
                alt="Checkmark"
                className="checkmark-icon"
              />{" "}
              Post meeting feedback
            </li>
          </ul>
        </div>

        {/* Card 2 */}
        <div className="subscription-card premium-plan text-secondary bg-dark">
          <div className="p-3">
            <div className="premium-header">
              <img
                src={MiddlePricing}
                alt="Premium Icon"
                className="premium-icon"
              />
            </div>
            <h2 className="premium-title text-white">Premium - 1 Year</h2>
            <p className="availability text-white light">9 Seats available</p>
            <h2 className="text-white" style={{ textAlign: "left" }}>
              $999<span style={{ fontSize: "small" }}>/ yr</span>
            </h2>
            <p className="availability text-white light">
              Save $400 compared to 6 months
            </p>
          </div>

          <button
            className="apply-button bold bg-info"
            onClick={() => submitApplication()}
          >
            Apply
          </button>

          <hr className="divider" />

          <ul className="benefits-list text-white light">
            <li>
              <img
                src={BeigeCheckMark}
                alt="Checkmark"
                className="checkmark-icon"
              />{" "}
              Match with free and paying customers
            </li>
            <li>
              <img
                src={BeigeCheckMark}
                alt="Checkmark"
                className="checkmark-icon"
              />{" "}
              <strong style={{ marginRight: "5px" }}>4X</strong> Speed of
              Finding Matches
            </li>
            <li>
              <img
                src={BeigeCheckMark}
                alt="Checkmark"
                className="checkmark-icon"
              />{" "}
              <span>
                Gold Guarantee - Extra <strong className="bold">6</strong>{" "}
                months if no candidates found within first 12 months
              </span>
            </li>
            <li>
              <img
                src={BeigeCheckMark}
                alt="Checkmark"
                className="checkmark-icon"
              />{" "}
              Unlimited # of Potential Matches
            </li>
            <li>
              <img
                src={BeigeCheckMark}
                alt="Checkmark"
                className="checkmark-icon"
              />{" "}
              External Searching via offline networks and channels
            </li>
            <li>
              <img
                src={BeigeCheckMark}
                alt="Checkmark"
                className="checkmark-icon"
              />{" "}
              Post meeting feedback
            </li>
          </ul>
        </div>

        {/* Card 3 */}
        <div className="subscription-card premium-plan text-secondary bg-primary">
          <div className="p-3">
            <div className="premium-header">
              <img
                src={LastPricing}
                alt="Premium Icon"
                className="premium-icon"
              />
            </div>
            <h2 className="premium-title">Premium+</h2>
            <p className="availability light">6 Seats available</p>
            <h2 style={{ textAlign: "left" }}>
              $4,999<span style={{ fontSize: "small" }}>/ yr</span>
            </h2>
          </div>

          <button
            className="apply-button bold bg-info"
            onClick={() => submitApplication()}
          >
            Apply
          </button>

          <hr
            style={{
              color: "black",
              borderTop: "3px solid black",
              margin: "20px 0",
            }}
          />

          <ul className="benefits-list  light">
            <li>
              <img
                src={DarkCheckMark}
                alt="Checkmark"
                className="checkmark-icon"
              />{" "}
              <span>
                Pass to all <span className="bold">10</span> Ria events in the
                next 12 months (speed dating, happy-hours, workshops, and more)
              </span>
            </li>
            <li>
              <img
                src={DarkCheckMark}
                alt="Checkmark"
                className="checkmark-icon"
              />{" "}
              Match with free and paying customers
            </li>

            <li>
              <img
                src={DarkCheckMark}
                alt="Checkmark"
                className="checkmark-icon"
              />{" "}
              <span>
              <span className="bold">12X</span> Speed of
              Finding Matches
              </span>
            </li>
            <li>
              <img
                src={DarkCheckMark}
                alt="Checkmark"
                className="checkmark-icon"
              />{" "}
              <span>
                Diamond Guarantee - Extra <span className="bold">24</span>{" "}
                months if no candidates found within first 12 months
              </span>
            </li>
            <li>
              <img
                src={DarkCheckMark}
                alt="Checkmark"
                className="checkmark-icon"
              />{" "}
              Unlimited # of Potential Matches
            </li>

            <li>
              <img
                src={DarkCheckMark}
                alt="Checkmark"
                className="checkmark-icon"
              />{" "}
              Post meeting feedback
            </li>
            <li>
              <img
                src={DarkCheckMark}
                alt="Checkmark"
                className="checkmark-icon"
              />{" "}
              External Searching via offline networks and channels
            </li>

            <li>
              <img
                src={DarkCheckMark}
                alt="Checkmark"
                className="checkmark-icon"
              />{" "}
              Wardrobe consultation
            </li>

            <li>
              <img
                src={DarkCheckMark}
                alt="Checkmark"
                className="checkmark-icon"
              />{" "}
              <span>
                <span className="bold">3hrs</span>. professional photoshoot
              </span>
            </li>

            <li>
              <img
                src={DarkCheckMark}
                alt="Checkmark"
                className="checkmark-icon"
              />{" "}
              Follow-up detailed questionnaire
            </li>

            <li>
              <img
                src={DarkCheckMark}
                alt="Checkmark"
                className="checkmark-icon"
              />{" "}
              Weekly Progress Updates
            </li>
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    <div style={{ backgroundColor: "white" }}>
      {showConfirmation
        ? displayConfirmation()
        : isError
        ? displayError()
        : displayCards()}
    </div>
  );
};

export default Premium;
