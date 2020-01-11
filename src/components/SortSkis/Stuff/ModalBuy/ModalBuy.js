import React, { Component } from "react";
import "./styles.css";
import {
  Container,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";

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
          isOpen={this.state.modalIsOpen}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <ModalHeader toggle={this.toggleModal.bind(this)}>
            Skontaktuj się ze mną jak ci wygodniej!
          </ModalHeader>
          <ModalBody>
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
          </ModalBody>
          <ModalFooter>
            <Button onClick={this.toggleModal.bind(this)}>Zamknij</Button>
          </ModalFooter>
        </Modal>
      </Container>

      // https://react-bootstrap.github.io/components/modal/
      // https://react-bootstrap.github.io/getting-started/introduction/
    );
  }
}

export default ModalBuy;
