import React, { PureComponent } from "react";
import { Navbar, Nav } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    height: 60px;
  }
`;

class Navigation extends PureComponent {
  render() {
    return (
      <Styles>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="ml-5 justify-content-end">
            <Nav.Link href="#home">Narty</Nav.Link>
            <Nav.Link href="#features">Kontakt</Nav.Link>
          </Nav>
        </Navbar>
      </Styles>
    );
  }
}

export default Navigation;
