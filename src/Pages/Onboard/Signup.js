import React, { useState, useContext, useEffect } from "react";
import { AnswersContext } from "../../Components/AnswersContext/AnswersContext";

const questions = [
  { id: "email", text: "Email", type: "email" },
  { id: "password", text: "Password", type: "password" },
];

function SignUp() {
  const [responses, setResponses] = useState(Array(questions.length).fill(""));
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const { answers, updateAnswer } = useContext(AnswersContext);

  useEffect(() => {
    // Initialize responses state with the value from global state when component mounts
    if (answers.signUpResponses) {
      setResponses(answers.signUpResponses);
    }
  }, [answers]); // Update responses when answers change

  const handleInputChange = (id, value) => {
    updateAnswer(id, value);
    // const newResponses = [...responses];
    // newResponses[index] = value;
    // setResponses(newResponses);
    // updateAnswer("signUpResponses", newResponses); // Update global state
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

// import React, { useState, useContext, useEffect } from "react";
// import { AnswersContext } from "../../Components/AnswersContext/AnswersContext";

// const questions = [
//   { id: "email", text: "Email", type: "email" },
//   { id: "password", text: "Password", type: "password" },
// ];

// function SignUp() {
//   const [responses, setResponses] = useState(Array(questions.length).fill(""));
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [passwordMatchError, setPasswordMatchError] = useState(false);
//   const { answers, updateAnswer } = useContext(AnswersContext);

//   useEffect(() => {
//     // Initialize responses state with the value from global state when component mounts
//     if (answers.signUpResponses) {
//       setResponses(answers.signUpResponses);
//     }
//   }, [answers]); // Update responses when answers change

//   const handleInputChange = (index, value) => {
//     const newResponses = [...responses];
//     newResponses[index] = value;
//     setResponses(newResponses);
//     updateAnswer("signUpResponses", newResponses); // Update global state
//   };

//   const handleConfirmPasswordChange = (value) => {
//     setConfirmPassword(value);
//     if (value !== responses[1]) {
//       setPasswordMatchError(true);
//     } else {
//       setPasswordMatchError(false);
//     }
//   };

//   return (
//     <div className="question-container">
//       <h1>Sign Up</h1>
//       <form>
//         {questions.map((question, index) => (
//           <div key={index} className="question my-3">
//             <label htmlFor={`question-${index}`} className="mx-2">
//               {question.text}
//             </label>
//             <input
//               type={question.type}
//               id={`question-${index}`}
//               value={responses[index]}
//               onChange={(e) => handleInputChange(index, e.target.value)}
//             />
//           </div>
//         ))}
//         <div className="question my-3">
//           <label htmlFor="confirm-password" className="mx-2">
//             Confirm Password
//           </label>
//           <input
//             type="password"
//             id="confirm-password"
//             value={confirmPassword}
//             onChange={(e) => handleConfirmPasswordChange(e.target.value)}
//           />
//           {passwordMatchError && (
//             <p style={{ color: "red" }}>Passwords do not match!</p>
//           )}
//         </div>
//       </form>
//     </div>
//   );
// }

// export default SignUp;
