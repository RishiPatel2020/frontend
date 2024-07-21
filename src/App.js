import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Footer from "./Components/Footer/Footer";
import Nav from "./Components/NavBar/Nav";
import Onboard from "./Pages/Onboard/Onboard";
import Terms from "./Pages/Terms/Terms";
import Privacy from "./Pages/Privacy/Privacy";
import Premium from "./Pages/Onboard/Premium";
import Dashboard from "./Pages/Dashboard/Dashboard";
import { AnswersProvider } from "./Components/AnswersContext/AnswersContext";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import PublicRoute from "./Components/PublicRoute/PublicRoute";
import { getLocalStorageItem, setLocalStorageItem } from "./Service/Session";
import { getProfileId, sendAnalytics } from "./Service/Api";

import "./index.css";
import "./App.css";

function App() {
  useEffect(() => {
    const fetchProfileId = async () => {
      const existingProfileID = getLocalStorageItem("PID");
      if (!existingProfileID || existingProfileID === "Unknown") {
        await getProfileId();
      }
      sendAnalytics("Home","Page", "View"); // Send analytics event on component mount
    };

    // Fetch the profile ID in the background
    fetchProfileId();
  }, []);

  const navAndFoot = (element) => (
    <>
      <Nav />
      <section className="stickNavBarAdjustments"></section>
      {element}
      <Footer />
    </>
  );

  return (
    <Routes>
      <Route exact path="/" element={navAndFoot(<Home />)} />
      <Route exact path="/about" element={navAndFoot(<About />)} />
      <Route
        exact
        path="/dashboard"
        element={<PrivateRoute element={navAndFoot(<Dashboard />)} />}
      />
      <Route
        exact
        path="/onboard"
        element={
          <PublicRoute
            element={
              <AnswersProvider>
                <Onboard />
              </AnswersProvider>
            }
          />
        }
      />
      <Route exact path="/privacy" element={navAndFoot(<Privacy />)} />
      <Route exact path="/terms" element={navAndFoot(<Terms />)} />
      <Route
        exact
        path="/premium"
        element={<PrivateRoute element={<Premium />} />}
      />
      <Route path="*" element={navAndFoot(<Home />)} />
    </Routes>
  );
}

export default App;
