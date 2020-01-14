import React, { PureComponent } from "react";
import "./styles.css";
import { Navbar, Nav } from "react-bootstrap";
//https://react-bootstrap.github.io/getting-started/introduction

class Navigation extends PureComponent {
  render() {
    return (
      <Navbar bg="dark" variant="dark" fixed="top">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="ml-5 justify-content-end">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

export default Navigation;
