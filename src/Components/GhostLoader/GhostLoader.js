import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoadingAccessContext } from "./LoadingAccessContext";
import "./GhostLoader.css";

const GhostLoader = () => {
  const navigate = useNavigate();
  const { revokeLoadingAccess } = useContext(LoadingAccessContext); // Access the context

  const messages = [
    "Creating profile…",
    "Personalizing your match experience…",
    "Loading your preferences and interests…",
    "Setting the stage for your perfect match…",
  ];

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const messageDuration = 1250; // Duration to show each message
    const totalMessages = messages.length;

    const timer = setTimeout(() => {
      setCurrentMessageIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        if (nextIndex >= totalMessages) {
          revokeLoadingAccess(); // Revoke access to the loading page
          navigate("/dashboard"); // Navigate to the dashboard
          return null;
        }
        return nextIndex;
      });
    }, messageDuration);

    // Cleanup function to clear the timer
    return () => clearTimeout(timer);
  }, [currentMessageIndex, navigate, revokeLoadingAccess]);

  return (
    <div className="ghost-loader">
      <div className="loading-text">{messages[currentMessageIndex]}</div>
      <div className="spinner"></div>
    </div>
  );
};

export default GhostLoader;
