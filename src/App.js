import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Footer from "./Components/Footer/Footer";
import React from "react";
import "./index.css";
import "./App.css";
import Nav from "./Components/NavBar/Nav";
import { Route, Routes } from "react-router-dom";
import ReactGA from "react-ga4";
import { TRACKINGID } from "./Service/Constants";
import Onboard from "./Pages/Onboard/Onboard";
import Terms from "./Pages/Terms/Terms";
import Privacy from "./Pages/Privacy/Privacy";
import PostSignup from "./Pages/Onboard/PostSignup";
import Congrats from "./Pages/Onboard/Congrats";
import Dashboard from "./Pages/Dashboard/Dashboard";
import PremiumWait from "./Pages/Onboard/PremiumWait";
import { AuthProvider } from "./Components/AuthContext/AuthContext";
import { AnswersProvider } from "./Components/AnswersContext/AnswersContext";
import Admin from "./Pages/Admin/Admin";

ReactGA.initialize(TRACKINGID);
function App() {
  const navAndFoot = (element) => {
    return (
      <>
        <Nav />

        {/* to make nav sticked to top */}
        <section className="stickNavBarAdjustments"></section>
        {/* About, Home, Help,... */}
        {element}
        <Footer />
      </>
    );
  };

  return (
    <Routes>
      {/* Home */}
      <Route exact path="/" element={navAndFoot(<Home />)} />
      {/* About */}
      <Route exact path="/about" element={navAndFoot(<About />)} />
      <Route exact path="/dashboard" element={navAndFoot(<Dashboard />)} />
      <Route
        exact
        path="/onboard"
        element={
          <AnswersProvider>
            <Onboard />
          </AnswersProvider>
        }
      />
      <Route exact path="/privacy" element={navAndFoot(<Privacy />)} />
      <Route exact path="/terms" element={navAndFoot(<Terms />)} />
      <Route exact path="/afterSignUp" element={<PostSignup />} />
      <Route exact path="/congrats" element={<Congrats />} />
      <Route exact path="/admin" element={<Admin />} />
      <Route
        exact
        path="/premiumWaiting"
        element={navAndFoot(<PremiumWait />)}
      />

      <Route path="*" element={navAndFoot(<Home />)} />
    </Routes>
  );
}

export default App;
