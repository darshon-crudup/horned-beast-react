import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import './Selectedbeast.css';

export default class Selectedbeast extends Component {
  render() {
    return (
        <Modal id="Modal" show={this.props.showModal} onHide={this.props.close}>
      <Modal.Header closeButton>{this.props.selectedbeast.title}
      </Modal.Header>
      <Modal.Body>
        <Card id="ModalCard">
          <Card.Img 
          src={this.props.selectedbeast.image_url}
          alt={this.props.selectedbeast.title}
          variant="top"
          />
          <Card.Body id="ModalBody">
            {/* <Card.Title>{this.props.selectedbeast.title}</Card.Title> */}
            <Card.Text id="ModalText">{this.props.selectedbeast.description}</Card.Text>
          </Card.Body>
        </Card>
      </Modal.Body>
      <Modal.Footer>
        <Button>Submit</Button>
      </Modal.Footer>
    </Modal>
    )
  }
}
