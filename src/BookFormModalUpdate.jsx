import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
// import axios from 'axios';

// const SERVER_URL = import.meta.env.VITE_SERVER_URL.endsWith('/')
//   ? import.meta.env.VITE_SERVER_URL.slice(0, -1)  
//   : import.meta.env.VITE_SERVER_URL;

class BookFormModalUpdate extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmitUpdate = (e) => {
    e.preventDefault();
    let { title, description, status } = e.target;
  
    if (this.props.bookToUpdate) {
      const updatedBook = {
        _id: this.props.bookToUpdate._id,
        title: title.value,
        description: description.value,
        status: status.value,
      };
  
      this.props.handleUpdate(updatedBook);
      this.props.handleSubmitModal();
    }
  };

  render() {
    let { show } = this.props;

    return (
      <Modal show={show} onHide={this.props.handleSubmitModal}>
        <Modal.Header closeButton>
          <Modal.Title>Update Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.handleSubmitUpdate}>
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

            <Button variant="secondary" onClick={this.props.handleSubmitModal}>
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

export default BookFormModalUpdate;
