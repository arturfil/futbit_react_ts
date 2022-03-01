import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const Header = () => {
  const [user, setUser] = useState<string | null>("");

  useEffect(() => {
    if (localStorage) {
      let data = localStorage.getItem("jwt_futbit");
      setUser(data);
    }
  }, []);

  const onSignout = () => {
    localStorage.removeItem("jwt_futbit");
  };

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
            <Link href="/games">
              <a>Games</a>
            </Link>
            <Link href="/fields">
              <a>Fields</a>
            </Link>
          </Nav>
          {user ? (
            <Nav>
              <a>Welcome</a>
              <button onClick={onSignout} className="btn btn-outline-dark">Lot Out</button>
            </Nav>
          ) : (
            <Nav>
              <Link href="/login">
                <a>LogIn</a>
              </Link>
              <Link href="/login">
                <a>Sign Up</a>
              </Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
