import axios from "axios";
import { BACKEND_BASE } from "../../Service/Constants";
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import React from "react";

const ForgotPassword = ({
  showForgotPassword,
  setShowForgotPassword,
  setDisplay,
}) => {
  const [title, setTitle] = useState(<span>Forgot Password</span>);
  const [emailForgotPassword, setEmailForgotPassword] = useState("");
  const [emailLabel, setEmailLabel] = useState(
    <label htmlFor="emailForgotPassword" className="col-form-label">
      Enter email<span style={{ color: "red" }}>*</span>
    </label>
  );

  const [status, setStatus] = useState("Submit");

  const handleClose = () => {
    setTitle(<span>Forgot Password</span>);
    setEmailForgotPassword("");
    setEmailLabel(
      <label htmlFor="emailForgotPassword" className="col-form-label">
        Enter email<span style={{ color: "red" }}>*</span>
      </label>
    );
    setStatus("Submit");
    setShowForgotPassword(false);
    setDisplay(true);
  };

  const getCredentials = async () => {
    // emailForgotPassword is empty
    if (emailForgotPassword.length === 0) {
      setEmailLabel(
        <label htmlFor="emailForgotPassword" className="col-form-label">
          <span style={{ color: "red" }}>
            Enter Email<span style={{ color: "red" }}>**</span>
          </span>
        </label>
      );
    } else {
      setStatus("Loading...");
      setEmailLabel(
        <label htmlFor="emailForgotPassword" className="col-form-label">
          Enter email<span style={{ color: "red" }}>*</span>
        </label>
      );

      try {
        const response = await axios.post(`${BACKEND_BASE}/forgotPassword`, {
          email: emailForgotPassword,
        });
        setTitle(
          <span style={{ color: "green" }}>
            Check your email and log in again!
          </span>
        );
        setStatus("Submit");
        setTimeout(() => {
          handleClose();
        }, 1500);
      } catch (error) {
        setStatus("Submit");
        setTitle(
          <span style={{ color: "red" }}>
            Error while sending email create a new account or contact admin
          </span>
        );
      }
    }
  };
  return (
    <Modal show={showForgotPassword} onHide={() => handleClose()}>
      <Modal.Header closeButton style={{ textAlign: "center" }}>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <form>
          <div className="mb-3">
            {emailLabel}
            <input
              type="text"
              className="form-control"
              id="emailForgotPassword"
              value={emailForgotPassword}
              onChange={(e) => setEmailForgotPassword(e.target.value)}
            />
          </div>
        </form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="dark" onClick={getCredentials}>
          <span className="text-white">{status}</span>
        </Button>

        <Button variant="dark" onClick={handleClose}>
          <span className="text-white">Close</span>
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ForgotPassword;
