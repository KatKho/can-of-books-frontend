import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  componentDidMount () {
    axios.get(`${SERVER_URL}/books`)
    .then(response => {
      this.setState({books: response.data});
      console.log(this.state.books);
    });
  }

  render() {

    /* TODO: render all the books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

          <Carousel>
        {this.state.books.length ? (
          this.state.books.map((book, index) => {
      return <Carousel.Item  key={index}>
        <img style={{}} src='https://placehold.co/1200x400' />
        <Carousel.Caption>
            <p>{book.title}</p>
            <p>{book.description}</p>
            <p>{book.status}</p>
        </Carousel.Caption>
      </Carousel.Item>
          })
          ) : (
            <h3>No Books Found :(</h3>
            )}
            </Carousel>
      </>
    )
  }
}

export default BestBooks;
