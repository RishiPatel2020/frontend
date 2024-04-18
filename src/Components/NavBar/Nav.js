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
      bg="primary"
      variant="light"
      className="fixed-top"
    >
      <Container style={{ fontFamily: "Signika" }}>
        {/* Mirchi Meals  */}
        <Navbar.Brand>
          <Nav.Link href="/#">
            <img
              src={require("../../Resources/Logo/mirchiMealsLogo.png")}
              alt="MirchiMealsLogo"
              className="logoAdjustment"
            />
          </Nav.Link>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          style={{
            backgroundColor: "rgb(247, 193, 68)",
            boxShadow: "2px 1px 3px black",
            height: "36px",
            width: "48px",
            fontSize: "10px",
          }}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* About, Order, Help Links */}
          <Nav className="me-auto" defaultActiveKey="/home">
            <Nav.Link href="#/order">
              <span
                className="fontAdjustment text-dark"
                style={{ marginRight: "40px" }}
              >
                Order
              </span>
            </Nav.Link>
            <Nav.Link className="text-dark mx-1">
              <span
                className="fontAdjustment text-dark"
                style={{ marginRight: "40px" }}
              >
                FAQ
              </span>
            </Nav.Link>
            <Nav.Link href="#/about">
              {/* adjust marginRight Based on screens */}
              <span
                className="fontAdjustment text-dark"
                style={{ marginLeft: "0px", marginRight: "40px" }}
              >
                About
              </span>
            </Nav.Link>
            <Nav.Link href="#/help">
              <span
                className="fontAdjustment text-dark"
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
