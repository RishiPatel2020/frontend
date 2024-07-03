import React, { useState } from "react";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { scrollToTop } from "../../Service/Scroll/ScrollTop";

const Dashboard = () => {
  const [tab, setTab] = useState("P");
  const navigate = useNavigate();
  useEffect(() => {
    scrollToTop();
  });

  const onNext = () => {
    navigate("/premium");
  };

  return (
    <div style={{ height: "66vh" }}>
      <div className="text-center">
        <div className="p-2">
          <button
            className={`tab-button ${tab === "P" ? "active" : ""} bold`}
            onClick={() => setTab("P")}
          >
            Profiles
          </button>
          <button
            className={`tab-button ${tab === "M" ? "active" : ""} bold`}
            onClick={() => setTab("M")}
          >
            Matches
          </button>
        </div>
      </div>
      <div>
        <h3 className="text-center text-dark bold">
          {tab === "P" ? "Your Matches for August" : "Message Your Matches Now"}
        </h3>
        <p className="text-center p-2">
          {tab === "P" ? (
            <p className="light">
              Sit tight, we’re actively working with premium members to get them
              paired. We’ll let you know if you’re a match via e-mail. Keep an
              eye on your inbox, best of luck!
            </p>
          ) : (
            <p className="light">
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
