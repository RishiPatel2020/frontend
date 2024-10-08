// src/components/Dashboard.js
import ForgotPassword from "../../Components/Login/ForgotPassword";

import { Link } from "react-router-dom";
import { REJECTED } from "../../Service/Constants";
import { ACCEPTED, NOT_APPLIED, QUEUED } from "../../Service/Constants";
import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import { scrollToTop } from "../../Service/Scroll/ScrollTop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { getLocalStorageItem } from "../../Service/Session";
import { updatePassword } from "../../Service/Api";
import { sendAnalytics } from "../../Service/Api";
import isTokenExpired from "../../Service/Cookies";
import { useContext } from "react";
import AuthContext from "../../Components/AuthContext/AuthContext";

const Dashboard = () => {
  const [display, setDisplay] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const { logout } = useContext(AuthContext);
  const [tab, setTab] = useState("P");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [validation, setValidation] = useState({
    currentPassword: false,
    newPassword: false,
  });
  const [error, setError] = useState(""); // State to hold error message
  const [success, setSuccess] = useState(""); // State to hold success message
  const [loading, setLoading] = useState(false); // State to manage loading status

  const navigate = useNavigate();

  useEffect(() => {
    scrollToTop();
    const token = localStorage.getItem("token");
    if (!token || isTokenExpired(token)) {
      logout();
      navigate("/");
      return;
    } else {
      sendAnalytics("Dashboard", "Page", "View");
    }
  }, []);

  const handleSave = async () => {
    let isValid = true;
    let newValidation = { currentPassword: false, newPassword: false };

    if (currentPassword === "") {
      newValidation.currentPassword = true;
      isValid = false;
    }

    if (newPassword === "") {
      newValidation.newPassword = true;
      isValid = false;
    }

    setValidation(newValidation);

    if (isValid) {
      setLoading(true);
      sendAnalytics("Edit Profile", "Save Button", "Click");
      setError(""); // Reset error message before making API call
      setSuccess(""); // Reset success message before making API call

      try {
        await updatePassword(currentPassword, newPassword);

        // If no error is thrown, assume the password update was successful
        setSuccess("Password updated successfully!");
        setCurrentPassword("");
        setNewPassword("");
      } catch (err) {
        // Handle error scenarios
        const forgotPassword = (
          <Link
            to=""
            style={{ color: "blue", marginRight: "6px" }}
            onClick={() => {
              sendAnalytics("Log In Dialog", "ForgotPassword Link", "Click");
              setShowForgotPassword(true);
            }}
            className="light"
          >
            Forgot Password
          </Link>
        );
        setError(
          <div className="light">
            Wrong current password entered 
            <br></br>
            {forgotPassword}
          </div>
        );
      } finally {
        setLoading(false);
      }
    }
  };

  const toggleShowCurrentPassword = () => {
    setShowCurrentPassword(!showCurrentPassword);
  };

  const toggleShowNewPassword = () => {
    setShowNewPassword(!showNewPassword);
  };

  const notAppliedyet = () => {
    return (
      !getLocalStorageItem("Premium") ||
      getLocalStorageItem("Premium") === undefined ||
      getLocalStorageItem("Premium") === NOT_APPLIED
    );
  };

  const defaultCenterContent = () => {
    let body = "";
    const premiumStatus = getLocalStorageItem("Premium");
    switch (premiumStatus) {
      case QUEUED:
        body = (
          <p className="light">
            Thanks, our team will get back to you in 2-4 days after reviewing
            your profile and the number of seats currently available. Keep an
            eye on your e-mail inbox.
          </p>
        );

        break;
      case ACCEPTED:
        body = (
          <p className="light">
            We're actively working to get you matched! Be on the lookout in your
            email inbox to see updates.
          </p>
        );
        break;
      case REJECTED:
        body = (
          <p className="light">
            Thanks for your interest in becoming a premium member, unfortunately
            all seats are currently filled at this time. We have added you to
            the wait list. In the meantime, we'll notify you if you are a match
            for our existing premium members. Keep an eye on your inbox, best of
            luck!
          </p>
        );
        break;
      default:
        body = (
          <div>
            <p className="light">
              Your profile has been added to our database. We're actively
              working with premium members to get them paired. We'll let you
              know if your profile is a potential fit via email - keep an eye on
              your inbox!
            </p>
            <p className="light my-2">
              Consider applying to be a premium member for a tailored, faster,
              and exclusive matchmaking experience!
            </p>
          </div>
        );

        break;
    }
    return <div className="text-center p-3">{body}</div>;
  };

  const tabs = () => {
    return (
      <div className="text-center">
        <div className="p-2">
          {getLocalStorageItem("Premium") === NOT_APPLIED && (
            <button
              className={`tab-button ${tab === "P" ? "" : ""} bold`}
              style={{
                marginBottom: "7px",
                boxShadow: "2px 2px 2px rgb(0,0,0)",
              }}
              onClick={() => navigate("/premium")}
            >
              Apply for Premium
            </button>
          )}
          <button
            className={`tab-button ${tab === "M" ? "active" : ""} bold`}
            onClick={() => setTab("M")}
            style={{ boxShadow: "2px 2px 2px rgb(0,0,0)" }}
          >
            Edit Profile
          </button>
        </div>
      </div>
    );
  };

  const editProfile = () => (
    <>
      <h3 className="text-center text-dark bold">Edit Your Profile</h3>
      <div className="text-center p-2">
        <div className="form-container">
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={getLocalStorageItem("emailAddress")}
              disabled
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label style={{ color: validation.currentPassword ? "red" : "" }}>
              Current Password {validation.currentPassword && "**"}
            </label>
            <div className="password-input-container">
              <input
                type={showCurrentPassword ? "text" : "password"}
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="form-control"
              />
              <FontAwesomeIcon
                icon={showCurrentPassword ? faEyeSlash : faEye}
                onClick={toggleShowCurrentPassword}
                className="password-toggle-icon"
              />
            </div>
          </div>
          <div className="form-group">
            <label style={{ color: validation.newPassword ? "red" : "" }}>
              New Password {validation.newPassword && "**"}
            </label>
            <div className="password-input-container">
              <input
                type={showNewPassword ? "text" : "password"}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="form-control"
              />
              <FontAwesomeIcon
                icon={showNewPassword ? faEyeSlash : faEye}
                onClick={toggleShowNewPassword}
                className="password-toggle-icon"
              />
            </div>
          </div>
          <button
            onClick={handleSave}
            className="btn mt-2 text-white bg-dark"
            disabled={loading}
            style={{ marginRight: "10px" }}
          >
            {loading ? "Saving..." : "Save"}
          </button>
          <button
            onClick={() => {
              setCurrentPassword("");
              setNewPassword("");
              setSuccess("");
              setError("");
            }}
            className="btn bg-dark text-primary mt-2"
          >
            Clear
          </button>
          <div
            className={`message ${success ? "success" : error ? "error" : ""}`}
          >
            {success || error}
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div style={{ height: "97vh" }}>
      <div>{tab === "P" ? defaultCenterContent() : editProfile()}</div>
      {tabs()}
      <ForgotPassword
        showForgotPassword={showForgotPassword}
        setShowForgotPassword={setShowForgotPassword}
        setDisplay={setDisplay}
      />
    </div>
  );
};

export default Dashboard;
