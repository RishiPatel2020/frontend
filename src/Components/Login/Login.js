import React, { useState, useContext } from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../AuthContext/AuthContext";
import ForgotPassword from "./ForgotPassword";
import { loginUser } from "../../Service/Api";
function Login() {
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [display, setDisplay] = useState(false);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext); // Access the login function from context
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
    setDisplay(false);
  };

  const handleDisplay = (e) => {
    e.preventDefault();
    setDisplay(true);
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const data = await loginUser(email, password);
      const token = data.token;
      login(token); // Use login function from context to set token and authentication state
      navigate("/dashboard");
      handleClose();
      setLoading(false);
    } catch (error) {
      setInvalid(true);
      setLoading(false);
    }
  };

  return (
    <>
      <Button
        onClick={() => setShowDialog(true)}
        variant="dark"
        className="text-primary mx-4 mt-3 bold"
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
              <span style={{ color: "red" }} className="bold">
                Invalid credentials
              </span>
            ) : (
              <span className="bold">Log In</span>
            )}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p className="lead">Enter email and password</p>
          <form>
            <div className="mb-3">
              <label htmlFor="email" className="col-form-label light">
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
              <label htmlFor="userPassword" className="col-form-label light">
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
            style={{ color: "blue", marginRight: "6px" }}
            onClick={() => {
              setDisplay(false);
              setShowForgotPassword(true);
            }}
          >
            Forgot Password
          </Link>
          <Button variant="dark" onClick={handleSubmit} className="bold">
            {loading ? "Loading..." : "Submit"}
          </Button>
        </Modal.Footer>
      </Modal>
      <ForgotPassword
        showForgotPassword={showForgotPassword}
        setShowForgotPassword={setShowForgotPassword}
        setDisplay={setDisplay}
      />
    </>
  );
}

export default Login;
