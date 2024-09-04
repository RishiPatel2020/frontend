import React, { useContext, useEffect } from "react";
import "./Onboard.css";
import { AnswersContext } from "../../Components/AnswersContext/AnswersContext";

const questions = [
  {
    id: "for",
    text: "Profile for",
    type: "dropdown",
    options: ["Myself", "My Child", "My Friend", "My Relative"],
  },
  { id: "firstName", text: "First Name", type: "text" },
  { id: "lastName", text: "Last Name", type: "text" },
  {
    id: "gender",
    text: "Gender",
    type: "buttons",
    options: ["Male", "Female"],
  },
  {
    id: "intention",
    text: "Intention of Profile",
    type: "dropdown",
    options: ["Marriage", "Long-term Relationship"],
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
      // validate if number is less than 0; check ranges
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
    const isValid = questions.every((question) => answers[question.id]);
    setIsValid(isValid);
  }, [answers, setIsValid]);

  return (
    <div className="question-container">
      <h1 className="text-dark bold">Basic Info</h1>
      <form>
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
