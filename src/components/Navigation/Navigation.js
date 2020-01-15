import React, { PureComponent } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    background: hsla(0, 0%, 20%, 0.6) !important;
  }
`;

const Bar = styled.text`
  #logo-text {
    font-family: "Sacramento", cursive;
    font-size: 60px !important;
  }
`;

class Navigation extends PureComponent {
  render() {
    return (
      <Styles>
        <Navbar fixed="top" bg="dark" variant="dark">
          <Bar>
            <Navbar.Brand className="p-0 m-0" href="#intro" id="logo-text">
              Narty
            </Navbar.Brand>
          </Bar>
          <Container className="justify-content-end">
            <Nav.Link href="#skis">Narty</Nav.Link>
            <Nav.Link href="#contact">Kontakt</Nav.Link>
          </Container>
        </Navbar>
      </Styles>
    );
  }
}

export default Navigation;
