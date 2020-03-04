import React, { PureComponent } from "react";
import {
  Container,
  Button,
  Row,
  Col
} from "react-bootstrap";
import styled from "styled-components";
import bgPhoto from "./images/bg.jpg";

const Styles = styled.div`
  .container {
    height: 100vh;
    background-image: url(${bgPhoto});
    background-position: center;
    background-size: cover;
    max-width: 100vw;
  }
  #mask {
    background: hsla(0, 0%, 0%, 0.6);
  }
  #intro-text {
    background: hsla(0, 0%, 20%, 0);
    color: white;
    padding: 50px;
    max-height: 50vh;
  }
  h1 {
    margin-bottom: 20px;
    font-family: "Abril Fatface", cursive;
    font-size: 50px;
  }
  h2 {
    font-family: "Monoton", cursive;
    transform: rotate(90deg);
    transform-origin: 0 0;
    position: absolute;
    font-size: 60px;
    z-index: 100;
    color: white;
  }
  .font-weight-normal {
    max-width: 550px;
  }
  .font-weight-normal::before {
    content: "#NARCIARSTWO";
    font-family: "Monoton", cursive;
    transform: rotate(90deg);
    transform-origin: 0 0;
    position: absolute;
    font-size: 60px;
    right: 0;
    z-index: 100;
    color: white;
    opacity: 0.2;
  }
  .font-weight-normal::after {
    content: "#mmm mmm nartunie";
    font-family: "Monoton", cursive;
    transform: rotate(-90deg);
    transform-origin: 0 0;
    position: absolute;
    font-size: 60px;
    left: 50vw;
    top: 40vh;
    z-index: 100;
    color: white;
    opacity: 0.2;
  }
  @media (max-width: 1000px) {
    .font-weight-normal::after,
    #intro-text::before {
      visibility: hidden;
    }
  }
  #intro-text::before {
    content: "CZERWONE NAJSZYBSZE";
    font-family: "Monoton", cursive;
    transform-origin: 0 0;
    position: absolute;
    font-size: 60px;
    top: 15vh;
    left: 0;
    z-index: 100;
    color: white;
    opacity: 0.2;
  }
  #intro-text::after {
    content: "KUP SE PAN NARTY";
    font-family: "Monoton", cursive;
    transform-origin: 0 0;
    position: absolute;
    font-size: 60px;
    top: 0;
    right: 0;
    z-index: 100;
    color: white;
    opacity: 0.2;
  }
`;

class Header extends PureComponent {
  render() {
    return (
      <Styles>
        <Container id="intro" className="p-0">
          <Container
            id="mask"
            className="p-0 d-flex justify-content-center align-items-center"
          >
            <Container
              id="intro-text"
              className="d-flex justify-content-center "
            >
              <Row className="d-flex justify-content-center">
                <Col>
                  <h1>Narciochowa strona</h1>
                  <div className="font-weight-normal text-center">
                    <p>
                      Kilka par nart i butów do sprzedania,
                      większość w stanie dobrym lub bardzo
                      dobrym, czasem nówki. Narty często
                      serwisowane ręcznie. Jeśli podoba Ci
                      się jakiś model lub chcesz dopytac o
                      inny, to śmiało. Jeśli potrzebujesz
                      szpej typu kijki, kask i inne bajery,
                      to też da się załatwić.
                    </p>
                  </div>
                  <Row className="d-flex align-items-center justify-content-center">
                    <a href="#skis">
                      <Button
                        type="button"
                        className="btn mx-3"
                        variant="primary"
                      >
                        Narty
                      </Button>
                    </a>
                    <a href="#footer">
                      <Button
                        type="button"
                        className="btn mx-3"
                        variant="light"
                      >
                        Kontakt
                      </Button>
                    </a>
                  </Row>
                </Col>
              </Row>
            </Container>
          </Container>
        </Container>
      </Styles>
    );
  }
}

export default Header;
