import React, { Component } from "react";
import { Container, Button, Modal } from "react-bootstrap";

class ModalBuy extends Component {
  state = {
    visible: false,
    modalIsOpen: false
  };
  toggleModal() {
    this.setState({
      modalIsOpen: !this.state.modalIsOpen
    });
  }
  render() {
    return (
      <Container>
        <Button block={true} color="info" onClick={this.toggleModal.bind(this)}>
          Button
        </Button>

        <Modal
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header toggle={this.toggleModal.bind(this)}>
            Skontaktuj się ze mną jak ci wygodniej!
          </Modal.Header>
          <Modal.Body>
            <h4>Telefon</h4>
            <h4>Whatsapp</h4>
            <h4>Mail</h4>
            <p>
              od razu zeby w tytule pisało w sprawie ktorej narty pisze no i
              okineko z kontaktem do goscia
            </p>
            <Button color="primary" onClick={this.toggleModal.bind(this)}>
              Wyślij
            </Button>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.toggleModal.bind(this)}>Zamknij</Button>
          </Modal.Footer>
        </Modal>
      </Container>
    );
  }
}

export default ModalBuy;
