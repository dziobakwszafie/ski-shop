import React, { Component } from 'react';
import './styles.css';
import {
    Container,
    Button,
    Alert,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from 'reactstrap';

class ModalWindow extends Component {
    state = {
        visible: false,
        modalIsOpen: false
    }
    toggleAlert() {
        this.setState({
            visible: ! this.state.visible
        });
    }
    toggleModal() {
        this.setState({
            modalIsOpen: ! this.state.modalIsOpen
        });
    }
    render() {
        return (

          <Container>
                <Button block={true} color="info" onClick={this.toggleModal.bind(this)}>Button</Button>

                <Alert color="primary" isOpen={this.state.visible} toggle={this.toggleAlert.bind(this)}>Alert</Alert>

                <Modal isOpen={this.state.modalIsOpen} aria-labelledby="contained-modal-title-vcenter" centered>
                    <ModalHeader toggle={this.toggleModal.bind(this)}>
                        Tytuł
                    </ModalHeader>
                    <ModalBody>
                        Body
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.toggleModal.bind(this)}> zamknij</Button>
                    </ModalFooter>
                </Modal>
          </Container>

            // https://react-bootstrap.github.io/components/modal/
            // https://react-bootstrap.github.io/getting-started/introduction/
        );
    }
}

export default ModalWindow;