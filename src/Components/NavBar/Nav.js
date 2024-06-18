import UserProfile from "../UserProfile/UserProfile";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "./Nav.css";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
function NavBar() {
  // might cause error in PRODUCTION due to paths and hashes "#/"

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="gold"
      className="fixed-top"
    >
      <Container>
        {/* Mirchi Meals  */}
        <Navbar.Brand>
          <Nav.Link href="/frontend">
            <img
              src={require("../../Resources/Logo/newLogo.png")}
              alt="MirchiMealsLogo"
              className="logoAdjustment"
            />
            {/* 1618 791 */}
          </Nav.Link>
        </Navbar.Brand>
        {/* user Profile */}
        <UserProfile />

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          style={{
            backgroundColor: "rgb(254,251,246)",
            boxShadow: "2px 1px 3px black",
            height: "36px",
            width: "48px",
            fontSize: "10px",
          }}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* About, Order, Help Links */}
          <Nav className="me-auto" defaultActiveKey="/home">
            <Nav.Link className="text-primary mx-1">
              <span
                className="fontAdjustment text-primary"
                style={{ marginRight: "40px" }}
              >
                FAQ
              </span>
            </Nav.Link>
            <Nav.Link href="#/about">
              {/* adjust marginRight Based on screens */}
              <span
                className="fontAdjustment text-primary"
                style={{ marginLeft: "0px", marginRight: "40px" }}
              >
                About
              </span>
            </Nav.Link>
            <Nav.Link href="#/help">
              <span
                className="fontAdjustment text-primary"
                style={{ marginRight: "40px" }}
              >
                Help
              </span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;
