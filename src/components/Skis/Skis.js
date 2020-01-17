import React, { Component } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import ModalB from "../ModalBuy/ModalB";
import skis1 from "./images/big/skis1.jpg";
import styled from "styled-components";

const Styles = styled.text`
  h4 {
    font-family: "Roboto", sans-serif;
  }
  p {
    margin-bottom: 5px;
  }
`;

const Skis = ({ data, sortBy }) => (
  <Container>
    <Container className="p-0 mb-3 d-flex justify-content-center align-items-center">
      <h5 className="mx-4 mt-3">sortuj według:</h5>
      <Button
        className="mx-4 mt-3"
        variant="dark"
        onClick={() => sortBy("length")}
      >
        długość
      </Button>
      <Button
        className="mx-4 mt-3 "
        variant="dark"
        onClick={() => sortBy("price")}
      >
        cena
      </Button>
    </Container>

    <Styles>
      <Row>
        {data.map(row => (
          <Col xs={12} md={6} lg={4} xl={3}>
            <Row className="m-2">
              <Col className="p-2">
                <img src={skis1} style={{ width: "100%", opacity: "0.5" }} />
                <p>
                  <b>Model: </b>
                  {row.model}
                </p>
                <p>
                  <b>Długość: </b>
                  {row.length} cm
                </p>
                <p>
                  <b>Promień: </b>R{row.radius}
                </p>
                <p>
                  <b>Stan ślizgu: </b>
                  {row.condition}
                </p>
                <ModalB model={row.model} price={row.price} />
              </Col>
            </Row>
          </Col>
        ))}
      </Row>
    </Styles>
  </Container>
);

export default Skis;
