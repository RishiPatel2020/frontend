import { useContext } from "react";
import { LoadingAccessContext } from "./Components/GhostLoader/LoadingAccessContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import React from "react";
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
import { LoadingAccessProvider } from "./Components/GhostLoader/LoadingAccessContext";

import "./index.css";
import "./App.css";
import GhostLoader from "./Components/GhostLoader/GhostLoader";

function App() {
  const navAndFoot = (element) => (
    <>
      <Nav />
      <section className="stickNavBarAdjustments"></section>
      {element}
      <Footer />
    </>
  );
  const ProtectedLoadingRoute = () => {
    const { canAccessLoading, revokeLoadingAccess } = useContext(LoadingAccessContext);
    const navigate = useNavigate();

    useEffect(() => {
      if (!canAccessLoading) {
        navigate("/");
      }

      // Revoke access after leaving the loading screen
      return () => revokeLoadingAccess();
    }, [canAccessLoading, navigate, revokeLoadingAccess]);

    return canAccessLoading ? <GhostLoader /> : null;
  };

  return (
    <LoadingAccessProvider>
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
      <Route
        exact
        path="/loading"
        element={<ProtectedLoadingRoute />}
      />
      <Route path="*" element={navAndFoot(<Home />)} />
    </Routes>
    </LoadingAccessProvider>
  );
}

export default App;
