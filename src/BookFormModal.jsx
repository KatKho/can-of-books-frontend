import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

class BookFormModal extends React.Component {
    constructor (props) {
        super(props);
    }

    handleCreate = async (book) => {
        let response = await axios.post(`${SERVER_URL}/books`, book); 
        this.props.addNewBook(response.data)
        console.log(response.data);
      }
      
    handleSubmit = (e) => {
        e.preventDefault();
        let { title, description, status } = e.target;
        this.handleCreate({
          title: title.value,
          description: description.value,
          status: status.value,
        });
    }
    render () {
        let {show} = this.props;

        return (
            <div>
            {show  ? (
            <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
          >
            <Modal show={this.props.show} onHide={this.props.handleModal}>
              <Modal.Header closeButton>
                <Modal.Title>Add Book</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <Form >
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>Book Title</Form.Label>
        <input type="text" placeholder="Enter book title" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="description">
        <Form.Label>Book Description</Form.Label>
        <input type="text" placeholder="Enter book description" />
      </Form.Group>
     
      <Form.Group className="mb-3" controlId="status">
        <Form.Label>Book Status</Form.Label>
        <input type="text" placeholder="PassEnter book statusword" />
      </Form.Group>
    </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary">Close</Button>
                <Button variant="primary" onSubmit={this.handleSubmit} onClick={() => this.props.handleModal()}>Save changes</Button>
              </Modal.Footer>
            </Modal>
          </div>
            ) : (
                null
            )
            }
            </div>
        )
    }
}

export default BookFormModal;