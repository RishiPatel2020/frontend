// src/components/Dashboard.js
import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import { scrollToTop } from "../../Service/Scroll/ScrollTop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { getLocalStorageItem } from "../../Service/Session";
import { updatePassword } from "../../Service/Api";
import { sendAnalytics } from "../../Service/Api";

const Dashboard = () => {
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
    sendAnalytics("Dashboard", "Page", "View");
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
        setError("An unexpected error occurred. Please try again.");
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

  const editProfile = () => (
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
        className="btn btn-success mt-2 bg-info text-white"
        disabled={loading}
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
        className="btn bg-dark text-primary mt-2 mx-2"
      >
        Clear
      </button>
      <div className={`message ${success ? "success" : error ? "error" : ""}`}>
        {success || error}
      </div>
    </div>
  );

  return (
    <div style={{ height: "66vh" }}>
      <div className="text-center">
        <div className="p-2">
          <button
            className={`tab-button ${tab === "P" ? "active" : ""} bold`}
            onClick={() => setTab("P")}
          >
            Premium
          </button>
          <button
            className={`tab-button ${tab === "M" ? "active" : ""} bold`}
            onClick={() => setTab("M")}
          >
            Edit Profile
          </button>
        </div>
      </div>
      <div>
        <h3 className="text-center text-dark bold">
          {tab === "P"
            ? !getLocalStorageItem("Premium") ||
              getLocalStorageItem("Premium") === undefined ||
              getLocalStorageItem("Premium") === "N"
              ? "Apply for Premium"
              : "Application Submitted!"
            : "Edit your Profile"}
        </h3>
        <div className="text-center p-2">
          {tab === "P" ? (
            <>
              <p className="light">
                {!getLocalStorageItem("Premium") ||
                getLocalStorageItem("Premium") === undefined ||
                getLocalStorageItem("Premium") === "N"
                  ? "Consider applying to be a premium member for an active, faster, and exclusive matchmaking experience!"
                  : "Thanks, our team will get back to you in 2-4 days after reviewing your profile and the number of seats currently available. Keep an eye on your e-mail inbox."}
              </p>
              {(!getLocalStorageItem("Premium") ||
                getLocalStorageItem("Premium") === undefined ||
                getLocalStorageItem("Premium") === "N") && (
                <button
                  className="select-button bold bg-dark"
                  onClick={() => navigate("/premium")}
                >
                  Apply
                </button>
              )}
            </>
          ) : (
            editProfile()
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
