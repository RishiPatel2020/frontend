import React, { useContext } from "react";
import "./Onboard.css";
import { AnswersContext } from "../../Components/AnswersContext/AnswersContext";

const questions = [
  {
    id: "employment",
    text: "Employment",
    type: "dropdown",
    options: [
      "Employed full-time",
      "Employed part-time",
      "Self-employed",
      "Student",
      "Unemployed",
      "Retired",
      "Other",
    ],
  },
  { id: "jobTitle", text: "Job Title", type: "text" },
  {
    id: "education",
    text: "Education",
    type: "dropdown",
    options: [
      "Doctorate",
      "Masters",
      "Bachelors",
      "Associates",
      "High School",
      "Other",
    ],
  },
];

function Professional() {
  const { answers, updateAnswer } = useContext(AnswersContext);

  const handleInputChange = (id, value) => {
    updateAnswer(id, value);
  };

  return (
    <div className="question-container">
      <h1>Employment and Education</h1>
      <form>
        {questions.map((question, index) => (
          <div key={index} className="question my-3">
            <label htmlFor={question.id} className="mx-2">
              {question.text}
            </label>
            {question.type === "dropdown" ? (
              <select
                id={question.id}
                value={answers[question.id] || ""}
                onChange={(e) => handleInputChange(question.id, e.target.value)}
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
                id={question.id}
                value={answers[question.id] || ""}
                onChange={(e) => handleInputChange(question.id, e.target.value)}
              />
            )}
          </div>
        ))}
      </form>
    </div>
  );
}

export default Professional;
