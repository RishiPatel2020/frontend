import React, { useContext, useEffect } from "react";
import "./Onboard.css";
import { AnswersContext } from "../../Components/AnswersContext/AnswersContext";

const states = [
  "AL",
  "AK",
  "AZ",
  "AR",
  "CA",
  "CO",
  "CT",
  "DE",
  "FL",
  "GA",
  "HI",
  "ID",
  "IL",
  "IN",
  "IA",
  "KS",
  "KY",
  "LA",
  "ME",
  "MD",
  "MA",
  "MI",
  "MN",
  "MS",
  "MO",
  "MT",
  "NE",
  "NV",
  "NH",
  "NJ",
  "NM",
  "NY",
  "NC",
  "ND",
  "OH",
  "OK",
  "OR",
  "PA",
  "RI",
  "SC",
  "SD",
  "TN",
  "TX",
  "UT",
  "VT",
  "VA",
  "WA",
  "WV",
  "WI",
  "WY",
];

const questions = [
  {
    id: "gender",
    text: "Gender",
    type: "buttons",
    options: ["Male", "Female"],
  },
  {
    id: "height",
    text: "Height",
    type: "dropdown",
    options: Array.from(
      { length: 36 },
      (_, i) => `${Math.floor(i / 12) + 4}' ${i % 12}"`
    ),
  },
  
];

function ProfileInfo({ setIsValid, setIsValidAge }) {
  const { answers, updateAnswer } = useContext(AnswersContext);

  const handleInputChange = (id, value) => {
    updateAnswer(id, value);
    if (id === "dobYear" || id === "dobMonth" || id === "dobDay") {
      const dob = new Date(
        answers.dobYear || 0,
        (answers.dobMonth || 1) - 1,
        answers.dobDay || 1
      );
      const today = new Date();
      const age = today.getFullYear() - dob.getFullYear();
      setIsValidAge(age >= 21);
    }
  };

  useEffect(() => {
    const isValid =
      questions.every((question) => answers[question.id]) &&
      answers.city &&
      answers.state;
    setIsValid(isValid);
  }, [answers, setIsValid]);

  return (
    <div className="question-container">
      <h1 className="text-dark bold">Basic Info</h1>
      <form>
      <div className="city-state-container">
          {/* City/Town Field */}
          <div className="question city-input">
            <label htmlFor="profileFor">Profile for</label>
            <select
              id="profileFor"
              name="profileFor"
              value={answers.profileFor || ""}
              onChange={(e) => handleInputChange("profileFor", e.target.value)}
              className="border-0 border-bottom rounded-1"
            >
              <option value="">Select</option>
              {["Myself", "My Child", "My Friend", "My Relative"].map(
                (profileFor, index) => (
                  <option key={index} value={profileFor}>
                    {profileFor}
                  </option>
                )
              )}
            </select>
          </div>

          {/* State Dropdown */}
          <div className="question state-input">
            <label htmlFor="IntentionOfProfile">Intention</label>
            <select
              id="IntentionOfProfile"
              name="IntentionOfProfile"
              value={answers.IntentionOfProfile || ""}
              onChange={(e) =>
                handleInputChange("IntentionOfProfile", e.target.value)
              }
              className="border-0 border-bottom rounded-1"
            >
              <option value="">Select</option>
              {["Marriage", "Long-term Relationship"].map(
                (profileOf, index) => (
                  <option key={index} value={profileOf}>
                    {profileOf}
                  </option>
                )
              )}
            </select>
          </div>
        </div>
        <div className="city-state-container">
          {/* City/Town Field */}
          <div className="question city-input">
            <label htmlFor="firstName">First Name</label>
            <input
              type="firstName"
              name="firstName"
              id="firstName"
              value={answers.firstName || ""}
              onChange={(e) => handleInputChange("firstName", e.target.value)}
              className="border-0 border-bottom rounded-1"
            />
          </div>

          {/* State Dropdown */}
          <div className="question state-input">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="lastName"
              name="lastName"
              id="lastName"
              value={answers.lastName || ""}
              onChange={(e) => handleInputChange("lastName", e.target.value)}
              className="border-0 border-bottom rounded-1"
            />
          </div>
        </div>
        
        {questions.map((question) => (
          <div key={question.id} className="question">
            <label htmlFor={question.id}>{question.text}</label>
            {question.type === "dropdown" ? (
              <select
                id={question.id}
                value={answers[question.id] || ""}
                onChange={(e) => handleInputChange(question.id, e.target.value)}
                className="border-0 border-bottom rounded-1"
              >
                <option value="">Select an option</option>
                {question.options.map((option, optionIndex) => (
                  <option key={optionIndex} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : question.type === "buttons" ? (
              <div className="button-group">
                {question.options.map((option, optionIndex) => (
                  <button
                    key={optionIndex}
                    type="button"
                    className={`option-button ${
                      answers[question.id] === option ? "active" : ""
                    }`}
                    onClick={() => handleInputChange(question.id, option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            ) : (
              <input
                type={question.type}
                id={question.id}
                value={answers[question.id] || ""}
                onChange={(e) => handleInputChange(question.id, e.target.value)}
                className="border-0 border-bottom rounded-1"
              />
            )}
          </div>
        ))}

        <div className="city-state-container">
          {/* City/Town Field */}
          <div className="question city-input">
            <label htmlFor="city">City/Town</label>
            <input
              type="text"
              name="city"
              id="city"
              value={answers.city || ""}
              onChange={(e) => handleInputChange("city", e.target.value)}
              className="border-0 border-bottom rounded-1"
            />
          </div>

          {/* State Dropdown */}
          <div className="question state-input">
            <label htmlFor="state">State</label>
            <select
              id="state"
              name="state"
              value={answers.state || ""}
              onChange={(e) => handleInputChange("state", e.target.value)}
              className="border-0 border-bottom rounded-1"
            >
              <option value="">Select</option>
              {states.map((state, index) => (
                <option key={index} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Date of Birth Inputs */}
        <div className="question">
          <label>Date of Birth</label>
          <div className="dob-inputs">
            <input
              type="number"
              id="dobMonth"
              placeholder="MM"
              value={answers.dobMonth || ""}
              onChange={(e) => handleInputChange("dobMonth", e.target.value)}
              className="border-0 border-bottom rounded-1 dob-input"
              min={0}
            />
            <input
              type="number"
              id="dobDay"
              placeholder="DD"
              value={answers.dobDay || ""}
              onChange={(e) => handleInputChange("dobDay", e.target.value)}
              className="border-0 border-bottom rounded-1 dob-input"
              min={0}
            />
            <input
              type="number"
              id="dobYear"
              placeholder="YYYY"
              value={answers.dobYear || ""}
              onChange={(e) => handleInputChange("dobYear", e.target.value)}
              className="border-0 border-bottom rounded-1 dob-input"
              min={0}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default ProfileInfo;
