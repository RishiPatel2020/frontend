import React, { useContext, useEffect } from "react";
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
    ],
  },
  { id: "jobTitle", text: "Job Title", type: "text" },
  {
    id: "education",
    text: "Education",
    type: "dropdown",
    options: ["Doctorate", "Masters", "Bachelors", "Associates", "High School"],
  },
];

function Professional({ setIsValid }) {
  const { answers, updateAnswer } = useContext(AnswersContext);

  const handleInputChange = (id, value) => {
    updateAnswer(id, value);
  };

  useEffect(() => {
    const alphabeticRegex = /^[A-Za-z\s]+$/;
    if (!answers.employment) {
      setIsValid("Please select Employment");
      return;
    } else if (!answers.jobTitle) {
      setIsValid("Please provide Job Title ");
      return;
    }
    if (!alphabeticRegex.test(answers.jobTitle)) {
      setIsValid("Job Title has to be alphabetic");
      return;
    } else if (!answers.education) {
      setIsValid("Please select Education");
      return;
    }
    // Clear validation message if everything is valid
    setIsValid(null);
  }, [answers, setIsValid]);

  return (
    <div className="question-container">
      <h1 className="text-dark" style={{ fontWeight: "bold" }}>
        Professional Info
      </h1>
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
                style={{ border: "none", backgroundColor: "rgb(243,243,243)" }}
                className="border-0 border-bottom rounded-1"
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
                style={{ border: "none", backgroundColor: "rgb(243,243,243)" }}
                className="border-0 border-bottom rounded-1"
              />
            )}
          </div>
        ))}
      </form>
    </div>
  );
}

export default Professional;
