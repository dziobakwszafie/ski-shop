import React, { PureComponent } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import whatsappIcon from "./whatsapp.png";
import phoneIcon from "./phone.png";
import smsIcon from "./sms.png";

const ImgStyles = styled.div`
  #whatsappIcon {
    height: 80px;
    width: auto;
  }
  #phoneIcon {
    height: 60px;
    width: auto;
  }
  b {
    color: black;
    padding-top: 3px;
    justify-content: center;
    display: flex;
  }
`;

class Contact extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <Row className="mb-2 d-flex justify-content-center align-items-center">
          <Col xs={2} className="d-flex justify-content-end">
            <ImgStyles>
              <a href="https://wa.me/48534799219">
                <img src={whatsappIcon} id="whatsappIcon" />
              </a>
            </ImgStyles>
          </Col>
          <Col xs={2} className="d-flex justify-content-center">
            <ImgStyles>
              <a href="sms:534799219&body=model">
                <img src={smsIcon} id="phoneIcon" />
                <b>iOS</b>
              </a>
            </ImgStyles>
          </Col>
          <Col xs={2} className="d-flex justify-content-center">
            <ImgStyles>
              <a href="sms:534799219?body=model">
                <img src={smsIcon} id="phoneIcon" />
                <b>Android</b>
              </a>
            </ImgStyles>
          </Col>
          <Col xs={2} className="d-flex justify-content-start">
            <ImgStyles>
              <a href="tel:534799219">
                <img src={phoneIcon} id="phoneIcon" />
              </a>
            </ImgStyles>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center align-items-center">
          <p>
            <b>nieudomowiony.sledz@gmail.com</b>
          </p>
        </Row>
        <Row className="d-flex justify-content-center align-items-center">
          <p>
            <b>534-799-219</b>
          </p>
        </Row>
      </React.Fragment>
    );
  }
}

export default Contact;
