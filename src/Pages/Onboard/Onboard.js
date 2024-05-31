import axios from "axios";
import { BACKEND_BASE } from "../../Service/Constants";
import React, { useContext, useState } from "react";
import "./Onboard.css";
import ProfileInfo from "./ProfileInfo";
import Professional from "./Professional";
import PersonalBack from "./PersonalBack";
import PictureUpload from "./PictureUpload";
import SignUp from "./Signup";
import { useNavigate } from "react-router-dom";
import { AnswersContext } from "../../Components/AnswersContext/AnswersContext";
import { AnswersProvider } from "../../Components/AnswersContext/AnswersContext";

function Onboarding() {
  const { answers } = useContext(AnswersContext);
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);

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

  const handleSubmit = async () => {
    console.log(`ANSWERS::: ${JSON.stringify(answers)}`);
    // Handle submission of answers
    navigate("/congrats");

    try {
      const response = await axios.post(`${BACKEND_BASE}signup`, answers);
      console.log(`response: ${JSON.stringify(response)}`);
      navigate("/dashboard");
    } catch (error) {
      const errMsg = error.response.data.error;
      console.log(`Err: ${JSON.stringify(errMsg)}`);
      
    }
  };

  const steps = [
    { component: ProfileInfo },
    { component: Professional },
    { component: PersonalBack },
    { component: PictureUpload },
    { component: SignUp },
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
      <StepComponent />
      <div className="button-container">
        <button
          onClick={currentStep === 0 ? () => navigate("/") : handlePrevious}
          className="button"
        >
          {currentStep === 0 ? "Back" : "Previous"}
        </button>
        {currentStep === steps.length - 1 ? (
          <button onClick={handleSubmit} className="button mx-2">
            Submit
          </button>
        ) : (
          <button onClick={handleNext} className="button mx-2">
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default Onboarding;

// import { useContext } from "react";
// import PictureUpload from "./PictureUpload";
// import React, { useState } from "react";
// import "./Onboard.css"; // Import CSS file for styling
// import ProfileInfo from "./ProfileInfo";
// import Professional from "./Professional";
// import PersonalBack from "./PersonalBack";
// import SignUp from "./Signup";
// import { useNavigate } from "react-router-dom";
// import { AnswersContext } from "../../Components/AnswersContext/AnswersContext";
// import { AnswersProvider } from "../../Components/AnswersContext/AnswersContext";
// function Onboarding() {
//   const { answers } = useContext(AnswersContext);
//   const navigate = useNavigate();
//   const [currentStep, setCurrentStep] = useState(0);
//   const handleNext = () => {
//     if (currentStep < steps.length - 1) {
//       setCurrentStep(currentStep + 1);
//     }
//   };

//   const handlePrevious = () => {
//     if (currentStep > 0) {
//       setCurrentStep(currentStep - 1);
//     }
//   };

//   const handleSubmit = () => {
//     // Handle submission of answers
//     console.log(JSON.stringify(answers));
//     // navigate("/congrats");
//   };

//   const steps = [
//     {
//       component: ProfileInfo,
//     },
//     {
//       component: Professional,
//     },
//     {
//       component: PersonalBack,
//     },
//     {
//       component: PictureUpload,
//     },
//     {
//       component: SignUp,
//     },
//   ];
//   const StepComponent = steps[currentStep].component;
//   return (
//     <AnswersProvider>
//       <div className="onboarding-container">
//         <div className="progress-bar-container">
//           <progress
//             value={currentStep + 1}
//             max={steps.length}
//             className="progress-bar"
//           />
//         </div>
//         <StepComponent />
//         <div className="button-container">
//           <button
//             onClick={currentStep === 0 ? () => navigate("/") : handlePrevious}
//             className="button"
//           >
//             {currentStep === 0 ? "Back" : "Previous"}
//           </button>
//           {currentStep === steps.length - 1 ? (
//             <button onClick={handleSubmit} className="button mx-2">
//               Submit
//             </button>
//           ) : (
//             <button onClick={handleNext} className="button mx-2">
//               Next
//             </button>
//           )}
//         </div>
//       </div>
//     </AnswersProvider>
//   );
// }

// export default Onboarding;
