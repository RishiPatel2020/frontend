import React, { useState } from "react";
import "./Onboard.css";
const questions = [
  { text: "User name", type: "text" },
  { text: "Password", type: "password" },
  { text: "Confirm Password", type: "password" },
];

function SignUp({ answers, handleChange }) {
  const [responses, setResponses] = useState(Array(questions.length).fill(""));

  const handleInputChange = (index, value) => {
    const newResponses = [...responses];
    newResponses[index] = value;
    setResponses(newResponses);
  };

  return (
    <div className="question-container">
      <h1>Basic Info</h1>
      <form>
        {questions.map((question, index) => (
          <div key={index} className="question my-3">
            <label htmlFor={`question-${index}`} className="mx-2">
              {question.text}
            </label>
            {question.type === "dropdown" ? (
              <select
                id={`question-${index}`}
                value={responses[index]}
                onChange={(e) => handleInputChange(index, e.target.value)}
              >
                <option value="">Select an option</option>
                {question.options.map((option, optionIndex) => (
                  <option key={optionIndex} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={question.type}
                id={`question-${index}`}
                value={responses[index]}
                onChange={(e) => handleInputChange(index, e.target.value)}
              />
            )}
          </div>
        ))}
      </form>
    </div>
  );
}

export default SignUp;
