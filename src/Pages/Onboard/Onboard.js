import React, { useContext, useState } from "react";
import { getDownloadURL, getStorage, uploadBytes, ref } from "firebase/storage";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import firebaseApp from "../../Service/firebase"; // Ensure this is correctly pointing to your Firebase config
import { BACKEND_BASE } from "../../Service/Constants"; // Define your backend base URL here
import ProfileInfo from "./ProfileInfo";
import Professional from "./Professional";
import PersonalBack from "./PersonalBack";
import PictureUpload from "./PictureUpload";
import SignUp from "./Signup";
import { AnswersContext } from "../../Components/AnswersContext/AnswersContext";
import "./Onboard.css";

function Onboarding() {
  const { answers, updateAnswer } = useContext(AnswersContext);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
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

      const storage = getStorage(firebaseApp);
      const uploadedUrls = await Promise.all(
        pictures.map(async (picture) => {
          const storageRef = ref(storage, `images/${picture.file.name}`);
          await uploadBytes(storageRef, picture.file);
          const downloadURL = await getDownloadURL(storageRef);
          return downloadURL;
        })
      );

      const dataToSubmit = {
        ...otherAnswers,
        email,
        imageUrls: uploadedUrls,
      };
      console.log("Data to submit:", JSON.stringify(dataToSubmit, null, 2));

      const response = await axios.post(
        `${BACKEND_BASE}/signup`,
        JSON.stringify(dataToSubmit),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setLoading(false);

      console.log(`Response: ${JSON.stringify(response.data)}`);
      navigate("/congrats");
    } catch (error) {
      setError("Email already exists");
      console.error("Error uploading images or submitting data:", error);
      alert("An error occurred. Please try again.");
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
            {loading ? "Loading..." : "Submit"}
          </button>
        ) : (
          <button onClick={handleNext} className="button mx-2">
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
