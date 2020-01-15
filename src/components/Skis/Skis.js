import React, { Component } from "react";
import "./styles.css";
import { Button, Container, Row } from "react-bootstrap";
import ModalB from "../ModalBuy/ModalB";
import skis1 from "./images/big/skis1.jpg";
import styled from "styled-components";

const Styles = styled.text`
  h4 {
    font-family: "Roboto", sans-serif;
  }
`;

const SkisStuff = ({ data, sortBy }) => (
  <Container>
    <Container className="p-0 d-flex justify-content-center align-items-center">
      <h5 className="mx-4 mt-3">sortuj według:</h5>
      <Button className="mx-4 mt-3" onClick={() => sortBy("length")}>
        długość
      </Button>
      <Button className="mx-4 mt-3 " onClick={() => sortBy("price")}>
        cena
      </Button>
    </Container>

    <Row>
      {data.map(row => (
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
          <div className="row m-2">
            <div className="p-2">
              <img src={skis1} style={{ height: "400px", opacity: "0.5" }} />
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
            </div>
          </div>
        </div>
      ))}
    </Row>
  </Container>
);

export default SkisStuff;
