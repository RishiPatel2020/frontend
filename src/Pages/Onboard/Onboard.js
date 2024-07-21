import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfileInfo from "./ProfileInfo";
import Professional from "./Professional";
import PersonalBack from "./PersonalBack";
import PictureUpload from "./PictureUpload";
import SignUp from "./Signup";
import { AnswersContext } from "../../Components/AnswersContext/AnswersContext";
import AuthContext from "../../Components/AuthContext/AuthContext";
import { uploadImages } from "../../Service/Api";
import { signUpUser } from "../../Service/Api";
import "./Onboard.css";
import { useEffect } from "react";
import { sendAnalytics } from "../../Service/Api";

function Onboarding() {
  useEffect(() => {
    sendAnalytics("Onboard Page", "View"); // Send analytics event on component mount
  }, []);
  const { answers } = useContext(AnswersContext);
  const { login } = useContext(AuthContext); // Access the login function from context
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [isValid, setIsValid] = useState(false);

  const handleNext = () => {
    if (currentStep < steps.length - 1 && isValid) {
      setCurrentStep(currentStep + 1);
    } else {
      alert("Please fill in all fields before proceeding.");
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    if (!isValid) {
      alert("Please fill in all fields before submitting.");
      return;
    }
    setLoading(true);
    try {
      const { pictures, email, ...otherAnswers } = answers;
      if (!email) {
        alert("Email is required.");
        return;
      }

      if (!pictures || pictures.length === 0) {
        alert("Please upload at least one image.");
        return;
      }

      const uploadedUrls = await uploadImages(pictures);

      const dataToSubmit = {
        ...otherAnswers,
        email,
        imageUrls: uploadedUrls,
      };
      console.log("Data to submit:", JSON.stringify(dataToSubmit, null, 2));

      const data = await signUpUser(dataToSubmit);

      const token = data.token; // Extract the token from the response
      login(token, email); // Use the login function to store the token and set authentication state

      setLoading(false);
      console.log(`Response: ${JSON.stringify(data)}`);
      navigate("/congrats", { state: { nextPage: "/premium" } });
    } catch (error) {
      setError("Email already exists");
      console.error("Error uploading images or submitting data:", error);
      alert("An error occurred. Please try again.");
      setLoading(false); // Ensure to reset loading state on error
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
      <StepComponent setIsValid={setIsValid} />
      <div className="button-container">
        <button
          onClick={currentStep === 0 ? () => navigate("/") : handlePrevious}
          className="button bold"
        >
          {currentStep === 0 ? "Back" : "Previous"}
        </button>
        {currentStep === steps.length - 1 ? (
          <button
            onClick={handleSubmit}
            className="button mx-2 bold"
            disabled={loading ? true : false}
          >
            {loading ? "Loading..." : "Submit"}
          </button>
        ) : (
          <button onClick={handleNext} className="button mx-2 bold">
            Next
          </button>
        )}
        <br></br>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  );
}

export default Onboarding;
