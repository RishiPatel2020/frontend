import ForgotPassword from "./ForgotPassword";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import axios from "axios";
import { BACKEND_BASE } from "../../Service/Constants";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [showDialog, setShowDialog] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClose = () => {
    setEmail("");
    setPassword("");
    setInvalid(false);
    setShowDialog(false);
    setLoading(false);
  };

  const handleSubmit = async () => {
    setLoading(true);
    const response = await axios
      .post(`${BACKEND_BASE}/login`, {
        email,
        password,
      })
      .then((res) => {
        navigate("/dashboard");
        handleClose();
        setLoading(false);
      })
      .catch((error) => {
        setInvalid(true);
        setLoading(false);
      });
  };

  return (
    <>
      <Button
        onClick={() => setShowDialog(true)}
        variant="dark"
        className="text-primary mx-4 mt-3"
        style={{
          height: "50px",
          width: "150px",
          borderRadius: "15px",
          fontSize: "20px",
          boxShadow: "2px 2px 2px rgb(0,0,0)",
        }}
      >
        Log In
      </Button>

      <Modal show={showDialog} onHide={handleClose}>
        <Modal.Header closeButton style={{ textAlign: "center" }}>
          <Modal.Title>
            {invalid ? (
              <span style={{ color: "red" }}>Invalid credentials</span>
            ) : (
              <span>Log In</span>
            )}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p className="lead">Enter email and password</p>
          <form>
            <div className="mb-3">
              <label htmlFor="email" className="col-form-label">
                Enter Email<span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="userPassword" className="col-form-label">
                Enter Password <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="password"
                className="form-control"
                id="userPassword"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </form>
        </Modal.Body>

        <Modal.Footer>
          <Link
            to=""
            style={{ color: "blue", marginRight: "1px" }}
            onClick={() => {}}
          >
            Forgot Password
          </Link>
          {/* <Button variant="dark" onClick={handleClose}>
            Close
          </Button> */}
          <Button variant="dark" onClick={handleSubmit}>
            {loading ? "Loading..." : "Submit"}
          </Button>
        </Modal.Footer>
      </Modal>
      <ForgotPassword
        showDialog={showDialog}
        setShowDialog={setShowDialog}
        setDisplay={() => {}}
      />
    </>
  );
}

export default Login;
