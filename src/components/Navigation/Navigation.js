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
    font-family: "Abril Fatface", cursive;
    font-size: 60px !important;
  }
`;
const Navlinks = styled.p`
  #black {
    color: white;
    display: inline-block;
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    margin-top: 10px;
  }
`;

class Navigation extends PureComponent {
  render() {
    return (
      <Styles>
        <Navbar fixed="top" bg="dark" variant="dark">
          <Bar>
            <Navbar.Brand
              className="p-0 m-0"
              href="#intro"
              id="logo-text"
            >
              Narty
            </Navbar.Brand>
          </Bar>
          <Container className="justify-content-end">
            <Navlinks>
              <Nav.Link href="#skis" id="black">
                Narty
              </Nav.Link>
              <Nav.Link href="#footer" id="black">
                Kontakt
              </Nav.Link>
            </Navlinks>
          </Container>
        </Navbar>
      </Styles>
    );
  }
}

export default Navigation;
