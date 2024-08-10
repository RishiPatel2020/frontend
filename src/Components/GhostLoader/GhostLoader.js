import React, { useState, useEffect } from "react";
import "./GhostLoader.css";

const GhostLoader = () => {
  const messages = [
    "Creating profile…",
    "Personalizing your match experience…",
    "Loading your preferences and interests…",
    "Setting the stage for your perfect match…",
  ];

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) =>
        prevIndex < messages.length - 1 ? prevIndex + 1 : 0 // Reset to 0 when reaching the end
      );
    }, 2000); // Show each message for 2 seconds

    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div className="ghost-loader">
      <div className="loading-text">{messages[currentMessageIndex]}</div>
      <div className="spinner"></div>
    </div>
  );
};

export default GhostLoader;
