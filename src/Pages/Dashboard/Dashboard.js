import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import { scrollToTop } from "../../Service/Scroll/ScrollTop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  const [tab, setTab] = useState("P");
  const [email] = useState("user@example.com"); // Example email
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [validation, setValidation] = useState({ currentPassword: false, newPassword: false });

  const navigate = useNavigate();
  useEffect(() => {
    scrollToTop();
  }, []);

  const handleSave = () => {
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
      // Implement password change logic here
      console.log("Current Password:", currentPassword);
      console.log("New Password:", newPassword);
      // Reset the form fields
      setCurrentPassword("");
      setNewPassword("");
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
        <input type="email" value={email} disabled className="form-control" />
      </div>
      <div className="form-group">
        <label style={{color:validation.currentPassword ? "red" : ""}}>
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
        <label style={{color:validation.newPassword ? "red" : ""}}>
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
      <button onClick={handleSave} className="btn btn-success mt-2">
        Save
      </button>
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
          {tab === "P" ? "Apply for Premium" : "Edit your Profile"}
        </h3>
        <div className="text-center p-2">
          {tab === "P" ? (
            <>
              <p className="light">
                Consider applying to be a premium member for an active, faster,
                and exclusive matchmaking experience!
              </p>
              <button
                className="select-button bold bg-dark"
                onClick={() => navigate("/premium")}
              >
                Apply
              </button>
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
