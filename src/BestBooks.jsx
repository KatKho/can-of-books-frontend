import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import BookFormModal from './BookFormModal';

const SERVER_URL = import.meta.env.VITE_SERVER_URL.endsWith('/')
  ? import.meta.env.VITE_SERVER_URL.slice(0, -1) 
  : import.meta.env.VITE_SERVER_URL;

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      bookForm: false,
    };
  }

  handleDelete = async (id) => {
    await axios.delete(`${SERVER_URL}/books/${id}`);
    this.setState({
      book: this.state.book.filter((book) => {
        return book._id !== id;
      }),
    });
  };

  componentDidMount() {
    axios.get(`${SERVER_URL}/books`).then((response) => {
      this.setState({ books: response.data });
      console.log(response.data);
    });
  }

  handleModal = () => {
    this.setState({
      bookForm: !this.state.bookForm,
    });
    console.log(this.state.bookForm);
  };

  addNewBook = (book) => {
    this.setState({
      books: [...this.state.books, book],
    });
  };

  render() {

    return (
      <div className="best-books-container">
        <h2 className="library-title">My Essential Lifelong Learning &amp; Formation Shelf</h2>
        <BookFormModal
          show={this.state.bookForm}
          addNewBook={this.addNewBook}
          handleModal={this.handleModal}
        />
        <Button  className="button" 
          onClick={this.handleModal}
          variant="primary"
          type="submit"
          style={{
            marginTop: '10px',
            marginBottom: '10px',
          }}
        >
          Add Book!
        </Button>
        <Carousel>
          {this.state.books.length ? (
            this.state.books.map((book, index) => {
              return (
                <Carousel.Item key={index}>
                  <img src="src/assests/bookshelf.png" />
                  <Carousel.Caption style={{color: 'black'}}>
                    <p>{book.title}</p>
                    <p>{book.description}</p>
                    <p>{book.status}</p>
                    <Button
                      variant="warning"
                      onClick={() => this.handleDelete(book._id)}
                    >
                      Delete
                    </Button>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })
          ) : (
            <h3>No Books Found :(</h3>
          )}
        </Carousel>
      </div>
    );
  }
}

export default BestBooks;
