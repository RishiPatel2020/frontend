import PictureUpload from "./PictureUpload";
import React, { useState } from "react";
import "./Onboard.css"; // Import CSS file for styling
import ProfileInfo from "./ProfileInfo";
import Professional from "./Professional";
import PersonalBack from "./PersonalBack";

function Onboarding() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({
    name: "",
    // Initialize other fields here
  });

  const handleChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    // Handle submission of answers
    window.location.href = "/frontend";
    console.log(answers);
  };

  const steps = [
    {
      component: ProfileInfo,
      props: { answers: answers, handleChange: handleChange },
    },
    {
      component: Professional,
      props: { answers: answers, handleChange: handleChange },
    },
    {
      component: PersonalBack,
      props: { answers: answers, handleChange: handleChange },
    },
    {
      component: PictureUpload,
      props: { answers: answers, handleChange: handleChange },
    },
  ];
  const StepComponent = steps[currentStep].component;
  return (
    <div className="onboarding-container">
      <div className="progress-bar-container">
        <progress
          value={currentStep + 1}
          max={steps.length}
          className="progress-bar"
        />
      </div>
      <StepComponent answers={answers} setAnswers={setAnswers} />
      <div className="button-container">
        <button
          onClick={handlePrevious}
          disabled={currentStep === 0}
          className="button"
        >
          Previous
        </button>
        {currentStep === steps.length - 1 ? (
          <button onClick={handleSubmit} className="button mx-2">
            Submit
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
