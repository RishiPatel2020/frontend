import React, { useState } from "react";
import "./Onboard.css"; // Import CSS file for styling

const questions = [
  { text: "What is your name?", type: "text" },
  {
    text: "What is your age?",
    type: "dropdown",
    options: ["Under 18", "18-30", "31-50", "Over 50"],
  },
  {
    text: "What is your occupation?",
    type: "dropdown",
    options: ["Student", "Employed", "Unemployed", "Retired", "Other"],
  },
  // Add more questions as needed
];

function Onboarding() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState(Array(questions.length).fill(""));

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else {
      // Navigate user to Home Page
      window.location.href = "/home";
    }
  };

  const handleFinish = () => {
    // Navigate user to Congratulation Page
    window.location.href = "/congratulations";
  };

  const handleResponseChange = (event) => {
    const newResponses = [...responses];
    newResponses[currentQuestionIndex] = event.target.value;
    setResponses(newResponses);
  };

  const renderInput = (type, options) => {
    switch (type) {
      case "text":
        return (
          <input
            type="text"
            value={responses[currentQuestionIndex]}
            onChange={handleResponseChange}
          />
        );
      case "radio":
        return options.map((option, index) => (
          <label key={index}>
            <input
              type="radio"
              value={option}
              checked={responses[currentQuestionIndex] === option}
              onChange={handleResponseChange}
            />
            {option}
          </label>
        ));
      case "dropdown":
        return (
          <select
            value={responses[currentQuestionIndex]}
            onChange={handleResponseChange}
          >
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      default:
        return null;
    }
  };

  return (
    <div className="onboarding-container">
      <div className="progress-bar-container">
        <progress
          value={currentQuestionIndex + 1}
          max={questions.length}
          className="progress-bar"
        />
      </div>

      <div className="question-container">
        <h2 className="title">Tell about yourself</h2>
        <h1 className="question text-center">{questions[currentQuestionIndex].text}</h1>
      </div>

      {renderInput(
        questions[currentQuestionIndex].type,
        questions[currentQuestionIndex].options
      )}

      <div className="button-container">
        {currentQuestionIndex === 0 ? (
          <button
            onClick={handlePrevious}
            className="button"
          >
            Back
          </button>
        ) : (
          <button
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            className="button"
          >
            Previous
          </button>
        )}
        {currentQuestionIndex === questions.length - 1 ? (
          <button onClick={handleFinish} className="button">
            Finish
          </button>
        ) : (
          <button onClick={handleNext} className="button">
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default Onboarding;

// import React, { useState } from "react";
// import "./Onboard.css"; // Import CSS file for styling

// const questions = [
//   { text: "What is your name?", type: "text" },
//   {
//     text: "What is your age?",
//     type: "radio",
//     options: ["Under 18", "18-30", "31-50", "Over 50"],
//   },
//   {
//     text: "What is your occupation?",
//     type: "dropdown",
//     options: ["Student", "Employed", "Unemployed", "Retired", "Other"],
//   },
//   // Add more questions as needed
// ];

// function Onboarding() {
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [responses, setResponses] = useState(Array(questions.length).fill(""));

//   const handleNext = () => {
//     if (currentQuestionIndex < questions.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//     }
//   };

//   const handlePrevious = () => {
//     if (currentQuestionIndex > 0) {
//       setCurrentQuestionIndex(currentQuestionIndex - 1);
//     }
//   };
//   const handleResponseChange = (event) => {
//     const newResponses = [...responses];
//     newResponses[currentQuestionIndex] = event.target.value;
//     setResponses(newResponses);
//   };

//   const renderInput = (type, options) => {
//     switch (type) {
//       case "text":
//         return (
//           <input
//             type="text"
//             value={responses[currentQuestionIndex]}
//             onChange={handleResponseChange}
//           />
//         );
//       case "radio":
//         return options.map((option, index) => (
//           <label key={index}>
//             <input
//               type="radio"
//               value={option}
//               checked={responses[currentQuestionIndex] === option}
//               onChange={handleResponseChange}
//             />
//             {option}
//           </label>
//         ));
//       case "dropdown":
//         return (
//           <select
//             value={responses[currentQuestionIndex]}
//             onChange={handleResponseChange}
//           >
//             {options.map((option, index) => (
//               <option key={index} value={option}>
//                 {option}
//               </option>
//             ))}
//           </select>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="onboarding-container">
//       <div className="progress-bar-container">
//         <progress
//           value={currentQuestionIndex + 1}
//           max={questions.length}
//           className="progress-bar"
//         />
//       </div>

//       <div className="question-container">
//         <h1 className="question">{questions[currentQuestionIndex].text}</h1>
//       </div>

//       {renderInput(
//         questions[currentQuestionIndex].type,
//         questions[currentQuestionIndex].options
//       )}

//       <div className="button-container">
//         <button
//           onClick={handlePrevious}
//           disabled={currentQuestionIndex === 0}
//           className="button"
//         >
//           Previous
//         </button>
//         <button
//           onClick={handleNext}
//           disabled={currentQuestionIndex === questions.length - 1}
//           className="button"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Onboarding;
