import React, { PureComponent } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import Contact from "../Contact/Contact";

const Styles = styled.text`
  h2 {
    font-family: "Abril Fatface", cursive;
    font-size: 50px;
  }
  p {
    font-family: "Roboto", sans-serif;
  }
`;

class Footer extends PureComponent {
  render() {
    return (
      <Container className="mt-5" id="footer">
        <Styles>
          <Col>
            <Row className="d-flex justify-content-center align-items-center">
              <h2>Kontakt</h2>
            </Row>
            <Contact />

            <Row className=" p-0 d-flex justify-content-center align-items-center">
              <p>
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
              </p>
            </Row>
          </Col>
        </Styles>
      </Container>
    );
  }
}

export default Footer;
