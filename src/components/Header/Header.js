import React, { PureComponent } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import bgPhoto from "./images/bg.jpg";

const Styles = styled.div`
  .container {
    height: calc(100vh - 60px);
    background-image: url(${bgPhoto});
    background-position: center;
    background-size: cover;
    max-width: 100vw;
  }
  #intro-text {
    background: hsla(0, 0%, 0%, 0.6);
    color: white;
    padding: 50px;
  }
  #intro-text_ctn {
    max-width: 1000px;
    height: 100%;
  }
`;

class Header extends PureComponent {
  render() {
    return (
      <Styles>
        <Container id="intro" className="p-0">
          <Container
            id="intro-text"
            className="d-flex justify-content-center align-items-center"
          >
            <Row
              id="intro-text_ctn"
              className="d-flex justify-content-center align-items-center"
            >
              <h2>Narciochowa strona</h2>
              <h6 className="font-weight-normal text-center">
                <p>
                  Kilka par nart i butów do sprzedania, większość w stanie
                  dobrym lub bardzo dobrym, czasem nówki. Narty często
                  serwisowane ręcznie.
                </p>
                <p>
                  Jeśli podoba Ci się jakiś model lub chcesz dopytac o inny, to
                  śmiało.
                </p>
                <p>
                  Jeśli potrzebujesz szpej typu kijki, kask i inne bajery, to
                  też da się załatwić.
                </p>
              </h6>
              <Row className="d-flex align-items-center justify-content-center">
                <a href="#skis">
                  <Button type="button" className="btn btn-info mx-3">
                    Narty
                  </Button>
                </a>
                <a href="#boots">
                  <Button type="button" className="btn btn-info mx-3">
                    Buty
                  </Button>
                </a>
                <a href="#footer">
                  <Button type="button" className="btn btn-light mx-3">
                    Kontakt
                  </Button>
                </a>
              </Row>
            </Row>
          </Container>
        </Container>
      </Styles>
    );
  }
}

export default Header;
