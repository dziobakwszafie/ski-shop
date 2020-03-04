import React from "react";
import {
  Button,
  Modal,
  ButtonToolbar
} from "react-bootstrap";
import Contact from "../Contact/Contact";
import styled from "styled-components";

const Styles = styled.text`
  div {
    background: black;
    height: 2px;
    width: 80%;
    margin: 10%;
  }
`;

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h4>
            {props.model} {props.length} cm
          </h4>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          <b>
            Cześć, jeśli jesteś zainteresowany kupnem to
            skontaktuj się ze mną poprzez jedną z wybranych
            opcji w celu sprawdzenia dostępności i ustalenia
            szczegółów.
          </b>
        </p>
        <p>
          <b>
            Możliwy jest zarówno odbiór osobisty jak i
            wysyłka.
          </b>
        </p>
        <Styles>
          <div></div>
        </Styles>
        <Contact />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Zamknij
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function ModalB(props) {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <ButtonToolbar>
      <Button
        variant="dark"
        onClick={() => setModalShow(true)}
        size="md"
        block
      >
        cena: {props.price} zł
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        {...props}
      />
    </ButtonToolbar>
  );
}

export default ModalB;
