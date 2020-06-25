import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import Contact from "../Contact/Contact";

const StylesTitle = styled.h2`
  font-family: "Abril Fatface", cursive;
  font-size: 50px;
`;

const StylesText = styled.p`
  font-family: "Roboto", sans-serif;
`;

const Footer = () => {
  return (
    <Container className="mt-5" id="footer">
      <Col>
        <Row className="mb-4 d-flex justify-content-center align-items-center">
          <StylesTitle>Kontakt</StylesTitle>
        </Row>
        <Contact />

        <Row className=" p-0 d-flex justify-content-center align-items-center">
          <StylesText>
            <b>dziobakwszafie 2019 </b>
            <b>Icon made by </b>

            <a
              href="https://www.flaticon.com/authors/freepik"
              title="Freepik"
            >
              <b> Freepik </b>
            </a>
            <b>from</b>
            <a
              href="https://www.flaticon.com/"
              title="Flaticon"
            >
              <b> www.flaticon.com</b>
            </a>
          </StylesText>
        </Row>
      </Col>
    </Container>
  );
};

export default Footer;
