import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "./Nav.css";
import Navbar from "react-bootstrap/Navbar";
import React from "react";

function NavBar({}) {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="secondary"
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
          <Nav className="me-auto" defaultActiveKey="/home">
            <Nav.Link href="#/order">
              <span className="fontAdjustment" style={{ marginRight: "40px" }}>
                Order
              </span>
            </Nav.Link>
            <Nav.Link href="#/faq">
              <span className="fontAdjustment" style={{ marginRight: "40px" }}>
                FAQ
              </span>
            </Nav.Link>
            <Nav.Link href="#/about">
              <span
                className="fontAdjustment"
                style={{ marginLeft: "0px", marginRight: "40px" }}
              >
                About
              </span>
            </Nav.Link>
            <Nav.Link href="#/help">
              <span className="fontAdjustment" style={{ marginRight: "40px" }}>
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
