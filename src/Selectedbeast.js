import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal';

export default class Selectedbeast extends Component {
  render() {
    return (
      <div>
        <Modal show={this.state.showModal} onHide={this.handleCloseModal}>
      <Modal.Header closeButton>{this.state.selectedPerson}</Modal.Header>

    </Modal>
      </div>
    )
  }
}
