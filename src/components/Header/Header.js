import React, { Component } from "react";
import "./styles.css";
import { Container, Button, Row } from "reactstrap";

class Header extends Component {
  render() {
    return (
      <div className="view d-flex justify-content-center" id="intro">
        <div
          className="col-12 full-bg-img d-flex justify-content-center align-items-center"
          id="intro-text"
        >
          <div id="intro-text_ctn">
            <h1 className="text-center mb-5 animated fadeInUp">
              Narciochowa strona
            </h1>
            <h6 className="font-weight-normal text-center animated fadeInUp">
              <p>
                Kilka par nart i butów do sprzedania, większość w stanie dobrym
                lub bardzo dobrym, czasem nówki. Narty często serwisowane
                ręcznie.
              </p>
              <p>
                Jeśli podoba Ci się jakiś model lub chcesz dopytac o inny, to
                śmiało.
              </p>
              <p>
                Jeśli potrzebujesz szpej typu kijki, kask i inne bajery, to też
                da się załatwić.
              </p>
            </h6>
            <Row className="d-flex align-items-center justify-content-center mt-5 animated fadeInUp">
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
                <Button type="button" className="btn btn-outline-light mx-3">
                  Kontakt
                </Button>
              </a>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
