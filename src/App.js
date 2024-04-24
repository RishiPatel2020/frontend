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
import Register from "./Pages/Register/Register";
import Terms from "./Pages/Terms/Terms";
import Privacy from "./Pages/Privacy/Privacy";

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
    <>
      <Routes>
        {/* Home */}
        <Route exact path="/" element={navAndFoot(<Home />)} />
        {/* About */}
        <Route exact path="/about" element={navAndFoot(<About />)} />
        <Route exact path="/register" element={navAndFoot(<Register />)} />
        <Route exact path="/privacy" element={navAndFoot(<Privacy />)} />
        <Route exact path="/terms" element={navAndFoot(<Terms />)} />
        <Route path="*" element={navAndFoot(<Home />)} />
      </Routes>
    </>
  );
}

export default App;
