import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import styled from "styled-components";

const StylesNaviBar = styled.div`
  .navbar {
    background: hsla(0, 0%, 20%, 0.6) !important;
    width: 100vw;
    height: 60px;
  }
`;

const StylesBar = styled.text`
  #logo-text {
    overflow: hidden;
    font-family: "Abril Fatface", cursive;
    font-size: 70px !important;
  }
`;
const StylesNavlinks = styled.p`
  #black {
    color: white;
    display: inline-block;
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    margin-top: 10px;
  }
`;
const Title = styled.h1`
  font-size: 80px;

  @media (max-width: 850px) {
    font-size: 40px;
  }
  @media (max-width: 500px) {
    font-size: 20px;
  }
`;

const Navigation = () => {
  return (
    <StylesNaviBar>
      <Navbar fixed="top" bg="dark" variant="dark">
        <StylesBar>
          <Navbar.Brand className="p-0 ml-5" href="#intro" id="logo-text">
            <Title>Zimowa szpejoza</Title>
          </Navbar.Brand>
        </StylesBar>
        <Container className="justify-content-end">
          <StylesNavlinks>
            <Nav.Link href="#footer" id="black">
              Kontakt
            </Nav.Link>
          </StylesNavlinks>
        </Container>
      </Navbar>
    </StylesNaviBar>
  );
};

export default Navigation;
