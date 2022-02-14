import Link from "next/link";
import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar className="navbar" collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="#home">FutBit</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/about">
              <a>About</a>
            </Link>
            
          </Nav>
          <Nav>
            <Link href="/login">
              <a>LogIn</a>
            </Link>
            <Link href="/login">
              <a>Sign Up</a>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
