import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useContext } from "react";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Footer from "./Components/Footer/Footer";
import React from "react";
import "./index.css";
import "./App.css";
import Nav from "./Components/NavBar/Nav";
import { Route, Routes } from "react-router-dom";
import Onboard from "./Pages/Onboard/Onboard";
import Terms from "./Pages/Terms/Terms";
import Privacy from "./Pages/Privacy/Privacy";
import PostSignup from "./Pages/Onboard/PostSignup";
import Congrats from "./Pages/Onboard/Congrats";
import Dashboard from "./Pages/Dashboard/Dashboard";
import PremiumWait from "./Pages/Onboard/PremiumWait";
import { AnswersProvider } from "./Components/AnswersContext/AnswersContext";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import AuthContext from "./Components/AuthContext/AuthContext";
import PublicRoute from "./Components/PublicRoute/PublicRoute";

function App() {
  const navAndFoot = (element) => {
    return (
      <>
        <Nav />
        <section className="stickNavBarAdjustments"></section>
        {element}
        <Footer />
      </>
    );
  };

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
        element={<PrivateRoute element={<PostSignup />} />}
      />
      <Route
        exact
        path="/congrats"
        element={<PrivateRoute element={<Congrats />} />}
      />
      <Route
        exact
        path="/premiumWaiting"
        element={<PrivateRoute element={navAndFoot(<PremiumWait />)} />}
      />
      <Route path="*" element={navAndFoot(<Home />)} />
    </Routes>
  );
}

export default App;
