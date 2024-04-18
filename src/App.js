import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import About from "./Pages/About/About";
import Nav from "./Components/NavBar/Nav";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";

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
        <Route exact path="*" element={navAndFoot(<Landing />)} />
      </Routes>
    </>
  );
}

export default App;
