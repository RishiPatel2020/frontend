import { Modal, Button } from "react-bootstrap";
import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProfileInfo from "./ProfileInfo";
import Professional from "./Professional";
import PersonalBack from "./PersonalBack";
import PictureUpload from "./PictureUpload";
import SignUp from "./Signup";
import { AnswersContext } from "../../Components/AnswersContext/AnswersContext";
import AuthContext from "../../Components/AuthContext/AuthContext";
import { uploadImages, signUpUser } from "../../Service/Api";
import { LoadingAccessContext } from "../../Components/GhostLoader/LoadingAccessContext";
import "./Onboard.css";
import { sendAnalytics } from "../../Service/Api";

function Onboarding() {
  useEffect(() => {
    sendAnalytics("Onboard", "Page", "View");
  }, []);

  const { answers } = useContext(AnswersContext);
  const { grantLoadingAccess } = useContext(LoadingAccessContext);
  const { login } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const [displayAlert, setDisplayAlert] = useState(null);
  const [loading, setLoading] = useState(false); // Set initial loading state to false
  const [passwordMatchError, setPasswordMatchError] = useState({
    valuePresent: false,
    match: true,
  });
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [isNotValid, setIsNotValid] = useState(null);

  const handleNext = () => {
    if (currentStep < steps.length - 1 && isNotValid === null) {
      setCurrentStep(currentStep + 1);
    } else {
      setDisplayAlert(isNotValid);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    if (loading) {
      return;
    }
    const emailExpression = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValidEmail = answers.email && emailExpression.test(answers.email);
    // Sign up validations
    if (!isValidEmail) {
      setDisplayAlert("Please provide a valid email");
      return;
    } else if (!answers.password) {
      setDisplayAlert("Please enter password");
      return;
    } else if (!passwordMatchError.valuePresent) {
      setDisplayAlert("Confirm password");
      return;
    } else if (!passwordMatchError.match) {
      setDisplayAlert("Passwords don't match");
      return;
    } else {
      sendAnalytics("Onboard", "Submit Button", "Click");
      setLoading(true); // Start loading

      try {
        const { pictures, email, ...otherAnswers } = answers;

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

        setLoading(false); // Stop loading before navigating
        console.log(`Response: ${JSON.stringify(data)}`);
        grantLoadingAccess();
        navigate("/loading");
      } catch (error) {
        setError("Email already exists. Try using different email");
        setLoading(false); // Ensure to reset loading state on error
      }
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
      <StepComponent
        setIsValid={setIsNotValid}
        setDisplayAlert={setDisplayAlert}
        {...(currentStep ===
        steps.findIndex((step) => step.component === SignUp)
          ? { passwordMatchError, setPasswordMatchError }
          : {})}
      />
      <div className="row">
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
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
            // disabled={loading}
          >
            {loading ? <div className="button-spinner"></div> : "Submit"}
          </button>
        ) : (
          <button onClick={handleNext} className="button mx-2 bold">
            Next
          </button>
        )}
      </div>
      {displayAlert && (
        <Modal
          show={displayAlert !== null}
          onHide={() => setDisplayAlert(null)}
        >
          <Modal.Header closeButton style={{ textAlign: "center" }}>
            <Modal.Title>Alert</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p className="lead">{displayAlert}</p>
          </Modal.Body>

          <Modal.Footer>
            <Button
              variant="dark"
              onClick={() => {
                setDisplayAlert(null);
              }}
              className="bold"
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}

export default Onboarding;
