import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

const SERVER_URL = import.meta.env.VITE_SERVER_URL.endsWith('/')
  ? import.meta.env.VITE_SERVER_URL.slice(0, -1)  
  : import.meta.env.VITE_SERVER_URL;

class BookFormModal extends React.Component {
  constructor(props) {
    super(props);
  }

  handleCreate = async (book) => {
    let response = await axios.post(`${SERVER_URL}/books`, book);
    this.props.addNewBook(response.data);
    console.log(response.data);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let { title, description, status } = e.target;
    this.handleCreate({
      title: title.value,
      description: description.value,
      status: status.value,
    });
    this.props.handleModal();
  };

  render() {
    let { show } = this.props;

    return (
      <Modal show={show} onHide={this.props.handleModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Book Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                placeholder="Enter book title"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Book Description</Form.Label>
              <Form.Control
                type="text"
                name="description"
                placeholder="Enter book description"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Book Status</Form.Label>
              <Form.Control
                type="text"
                name="status"
                placeholder="Enter book status"
              />
            </Form.Group>

            <Button variant="secondary" onClick={this.props.handleModal}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Save changes
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
}

export default BookFormModal;
