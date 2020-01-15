import React, { PureComponent } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  #line {
    width: 100px;
    height: 5px;
    color: black;
  }
`;

class Footer extends PureComponent {
  render() {
    return (
      <Styles>
        <Container id="footer">
          <Container className="d-flex align-items-center justify-content-center">
            <Col className="col-xs-12">
              <Row className="d-flex align-items-center justify-content-center">
                <h3>Kontakt</h3>
              </Row>
              <Row className="d-flex justify-content-center">
                <div id="line"></div>
              </Row>
              <Row className="row">
                <Col>
                  <a href="https://wa.me/48534799219">
                    <img src="img/whatsapp.png" id="icon" />
                  </a>
                </Col>
                <Col>
                  <a href="tel:534799219">
                    <img src="img/phone.png" id="icon2" />
                  </a>
                </Col>
                <Col className="d-flex align-items-center justify-content-center pl-2">
                  <p>
                    <b>534-799-219</b>
                  </p>
                </Col>
                <Col className="d-flex align-items-center justify-content-center pl-4">
                  <p>
                    <b>nieudomowiony.sledz@gmail.com</b>
                  </p>
                </Col>
              </Row>
              <Row>
                <p>copy dziobakwszafie 2019 - </p>
                <p>
                  Icon made by
                  <a
                    href="https://www.flaticon.com/authors/freepik"
                    title="Freepik"
                  >
                    Freepik
                  </a>
                  from
                  <a href="https://www.flaticon.com/" title="Flaticon">
                    www.flaticon.com
                  </a>
                </p>
              </Row>
            </Col>
          </Container>
        </Container>
      </Styles>
    );
  }
}

export default Footer;
