import React, { Component } from "react";
import "./styles.css";
import { Button, Container, Row, Col } from "reactstrap";
import ModalBuy from "../ModalBuy/ModalBuy";
import skis1 from "./images/big/skis1.jpg";

// class Stuff extends Component {
const Stuff = ({ data, sortBy }) => (
  // tu bylo cos na temat tego ze nie trzeba dawac render bo funkcja sama w sobie ma render jak ie jej uzywa zamiast clasy reactowej
  // dodatkowo od razu zamiast pisac props mozna wpisac argumenty
  //class Stuff extends Component {
  //   render() {

  //const {data, sortBy} = props;

  <Container>
    <Button onClick={() => sortBy("length")}>długość</Button>
    <Button onClick={() => sortBy("price")}>cena</Button>

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
              <ModalBuy>
                <p class="btn btn-outline-primary">
                  <b>Cena: </b>
                  {row.price} zł
                </p>
              </ModalBuy>
            </div>
          </div>
        </div>
      ))}
    </Row>
  </Container>
);

//}
// zainstaluj prettier i beutify
export default Stuff; //https://www.youtube.com/watch?v=akxsFgM7DPA

// <Sort>
// <Modal>
// <Lightbox>

// index
//   <Skis>
