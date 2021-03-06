import React from "react";
import {
  Button,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import ModalB from "../ModalBuy/ModalB";
import styled from "styled-components";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const StylesText = styled.p`
  margin-bottom: 5px;
`;

const StylesSkisPhoto = styled.div`
  transform: scale(1);
  transition: all 1s;
  filter: blur(1px);
  :hover {
    transform: scale(1.2);
    filter: blur(0);
  }
`;

const iconPath = process.env.PUBLIC_URL + "/images/";

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

    <Row>
      {data.map((row) => (
        <Col xs={12} md={6} lg={4} xl={3}>
          <Row className="m-2">
            <Col className="p-2">
              <StylesSkisPhoto>
                <Zoom>
                  <img
                    src={`${iconPath}${row.photo}`}
                    alt="Skis"
                    width="100%"
                  />
                </Zoom>
              </StylesSkisPhoto>
              <StylesText>
                {/* If you used create-react-app to create your project then your public folder is accessible. So you need to add your image folder inside the public folder. */}
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
              </StylesText>
              <ModalB
                model={row.model}
                price={row.price}
                length={row.length}
              />
            </Col>
          </Row>
        </Col>
      ))}
    </Row>
  </Container>
);

export default Skis;
