import React, { useState } from "react";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [tab, setTab] = useState("P");
  const navigate = useNavigate();

  const onNext = () => {
    navigate("/afterSignUp");
  };

  return (
    <div style={{ height: "66vh" }}>
      <div className="text-center">
        <div className="p-2">
          <button
            className={`tab-button ${tab === "P" ? "active" : ""}`}
            onClick={() => setTab("P")}
          >
            Profiles
          </button>
          <button
            className={`tab-button ${tab === "M" ? "active" : ""}`}
            onClick={() => setTab("M")}
          >
            Matches
          </button>
        </div>
      </div>
      <div>
        <h3 className="text-center text-dark">
          {tab === "P" ? "Your Matches for August" : "Message Your Matches Now"}
        </h3>
        <p className="text-center p-2">
          {tab === "P" ? (
            <p>
              Hold on tight, we’re working to get matching profiles ready for
              you. We’ll send you an email when ready. Be on the lookout at the
              end of the month!
            </p>
          ) : (
            <p>
              You’re definitely someone’s type. We’re working to get you
              matched! Keep sending those interests!
            </p>
          )}
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
