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

function ProfileInfo({ setIsValid, setDisplayAlert }) {
  const { answers, updateAnswer } = useContext(AnswersContext);

  const handleInputChange = (id, value) => {
    updateAnswer(id, value);
  };

  // Helper function to check if the birthdate is valid for current year age check
  const isValidBirthdate = (month, day) => {
    const today = new Date();
    const birthdate = new Date(today.getFullYear() - 25, month - 1, day);

    return birthdate <= today; // Ensure 25th birthday has occurred
  };
  const validateDOB = (dobMonth, dobDay, dobYear) => {
    const currentYear = new Date().getFullYear();

    // Ensure the fields are numeric and within valid ranges
    if (
      dobMonth < 1 ||
      dobMonth > 12 ||
      dobDay < 1 ||
      dobDay > 31 ||
      dobYear.length !== 4
    ) {
      return false; // Invalid if fields are not correct
    }

    // Ensure that the user is at least 25 years old
    const age = currentYear - parseInt(dobYear, 10);
    if (age < 25 || (age === 25 && !isValidBirthdate(dobMonth, dobDay))) {
      return false; // Invalid if user is under 25
    }

    return true; // Passed all validations
  };

  useEffect(() => {
    const alphabeticRegex = /^[A-Za-z]+$/;
    if (!answers.profileFor) {
      setIsValid("Please provide the Profile for");
    } else if (!answers.intention) {
      setIsValid("Please provide the Intention");
    } else if (!answers.firstName) {
      setIsValid("Please provide First Name");
    } else if (!answers.lastName) {
      setIsValid("Please provide Last Name");
    } else if (!answers.gender) {
      setIsValid("Please provide Gender");
    } else if (!answers.height) {
      setIsValid("Please provide Height");
    } else if (!answers.city) {
      setIsValid("Please provide the City/Town name");
    } else if (!answers.state) {
      setIsValid("Please provide the State name");
    } else if (!answers.dobMonth) {
      setIsValid("Please provide Date of Birth Month");
    } else if (!answers.dobDay) {
      setIsValid("Please provide Date of Birth Day");
    } else if (!answers.dobYear) {
      setIsValid("Please provide Date of Birth Year");
    } else if (answers.dobMonth < 1 || answers.dobMonth > 12) {
      setIsValid("Month has to be in range of 1-12");
    } else if (answers.dobDay < 1 || answers.dobDay > 31) {
      setIsValid("Day has to be in range of 1-31");
    } else if (answers.dobYear.length !== 4) {
      setIsValid("Year has to be 4 digits");
    } else if (!alphabeticRegex.test(answers.firstName)) {
      setIsValid("First Name has to be alphabetic");
    } else if (!alphabeticRegex.test(answers.lastName)) {
      setIsValid("Last Name has to be alphabetic");
    } else if (!alphabeticRegex.test(answers.city)) {
      setIsValid("City name has to be alphabetic");
    } else {
      const currentYear = new Date().getFullYear();
      const age = currentYear - parseInt(answers.dobYear, 10);
      if (age < 25) {
        setIsValid("You have to be at least 25 years old to sign up");
      }
    }
  }, [answers, setIsValid]);

  return (
    <div className="question-container">
      <h1 className="text-dark bold">Basic Info</h1>
      <form>
        <div className="city-state-container">
          {/* profile for */}
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
                (profileFor_, index) => (
                  <option key={index} value={profileFor_}>
                    {profileFor_}
                  </option>
                )
              )}
            </select>
          </div>

          {/* Intention of */}
          <div className="question state-input">
            <label htmlFor="intention">Intention</label>
            <select
              id="intention"
              name="intention"
              value={answers.intention || ""}
              onChange={(e) => handleInputChange("intention", e.target.value)}
              className="border-0 border-bottom rounded-1"
            >
              <option value="">Select</option>
              {["Marriage", "Long-term Relationship"].map(
                (intention_, index) => (
                  <option key={index} value={intention_}>
                    {intention_}
                  </option>
                )
              )}
            </select>
          </div>
        </div>
        <div className="city-state-container">
          {/* First Name */}
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

          {/* Last Name */}
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

        {/* Gender & Height */}
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
