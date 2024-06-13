import React, { useState, useContext, useEffect } from "react";
import { AnswersContext } from "../../Components/AnswersContext/AnswersContext";

const questions = [
  { id: "email", text: "Email", type: "email" },
  { id: "password", text: "Password", type: "password" },
];

function SignUp({ setIsValid }) {
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const { answers, updateAnswer } = useContext(AnswersContext);

  useEffect(() => {
    // Initialize responses state with the value from global state when component mounts
    if (answers.signUpResponses) {
      setConfirmPassword(answers.signUpResponses.confirmPassword || "");
    }
  }, [answers]);

  useEffect(() => {
    // Validate inputs and confirm password match
    const isValid =
      questions.every((question) => answers[question.id]) &&
      answers["password"] === confirmPassword;
    setIsValid(isValid);
  }, [answers, confirmPassword, setIsValid]);

  const handleInputChange = (id, value) => {
    updateAnswer(id, value);
    console.log(`global data: ${JSON.stringify(answers)}`);
  };

  const handleConfirmPasswordChange = (value) => {
    setConfirmPassword(value);
    if (value !== answers["password"]) {
      setPasswordMatchError(true);
    } else {
      setPasswordMatchError(false);
    }
  };

  return (
    <div className="question-container">
      <h1>Sign Up</h1>
      <form>
        {questions.map((question, index) => (
          <div key={index} className="question my-3">
            <label htmlFor={`question-${index}`} className="mx-2">
              {question.text}
            </label>
            <input
              type={question.type}
              id={`question-${index}`}
              value={answers[question.id] || ""}
              onChange={(e) => handleInputChange(question.id, e.target.value)}
            />
          </div>
        ))}
        <div className="question my-3">
          <label htmlFor="confirm-password" className="mx-2">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => handleConfirmPasswordChange(e.target.value)}
          />
          {passwordMatchError && (
            <p style={{ color: "red" }}>Passwords do not match!</p>
          )}
        </div>
      </form>
    </div>
  );
}

export default SignUp;
