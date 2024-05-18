import React, { useState } from "react";
import "./Onboard.css";
const questions = [
  {
    text: "Profile for",
    type: "dropdown",
    options: ["Myself", "My Child", "My Friend"],
  },
  { text: "First Name", type: "text" },
  { text: "Last Name", type: "text" },
  {
    text: "Gender",
    type: "dropdown",
    options: ["Male", "Female", "Binary"],
  },
  {
    text: "What is your age?",
    type: "dropdown",
    options: ["Under 18", "18-30", "31-50", "Over 50"],
  },
  {
    text: "Intention of Profile",
    type: "dropdown",
    options: ["Marriage", "Long-term Relationship"],
  },
  {
    text: "Height",
    type: "dropdown",
    options: Array.from(
      { length: 36 },
      (_, i) => `${Math.floor(i / 12) + 4}' ${i % 12}"`
    ),
  },
];

function ProfileInfo({answers, handleChange}) {
  const [responses, setResponses] = useState(Array(questions.length).fill(""));

  const handleInputChange = (index, value) => {
    const newResponses = [...responses];
    newResponses[index] = value;
    setResponses(newResponses);
  };

  return (
    <div className="question-container">
      <h1>Tell Us About Yourself</h1>
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

export default ProfileInfo;