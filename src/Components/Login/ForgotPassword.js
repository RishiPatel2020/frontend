import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { forgotPassword } from "../../Service/Api";

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
        await forgotPassword(emailForgotPassword);
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
            Error while sending email. Create a new account or contact admin.
          </span>
        );
      }
    }
  };

  return (
    <Modal show={showForgotPassword} onHide={handleClose}>
      <Modal.Header closeButton style={{ textAlign: "center" }}>
        <Modal.Title><span className="bold">{title}</span></Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <form>
          <div className="mb-3 light">
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
          <span className="text-white bold">{status}</span>
        </Button>

        <Button variant="dark" onClick={handleClose}>
          <span className="text-white bold">Close</span>
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ForgotPassword;
