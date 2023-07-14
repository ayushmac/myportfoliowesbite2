import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import mainlogo from "../Images/mainlogo.png";
import altlogo from "../Images/mainlogo.png";
import "./Navibar.css"; // Import custom CSS file
import { Routes, Route } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

const Navibar = () => {
  return (
    <Navbar expand="lg" className="navbar-glass">
      <Container className="nav-anim">
        <Navbar.Brand as={Link} to="/home" className="mx-auto" smooth>
          <img src={mainlogo} height="30" alt="Logo" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center"
        >
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="#about-section" className="px-4" smooth>
              <i class="bi bi-person-circle"></i> About
            </Nav.Link>
            <Nav.Link as={Link} to="#education-section" className="px-4" smooth>
              <i class="bi bi-mortarboard"></i> Qualifications
            </Nav.Link>
          </Nav>
          <Navbar.Brand
            as={Link}
            to="/home"
            className="hide-on-shortened"
            smooth
          >
            <img src={altlogo} height="30" alt="Logo" className="alt-logo" />
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="#projects-section" className="px-4" smooth>
              <i class="bi bi-file-earmark-bar-graph"></i> Projects
            </Nav.Link>
            <Nav.Link as={Link} to="#contacts-section" className="px-4" smooth>
              <i class="bi bi-globe2"></i> Let's Connect
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navibar;
