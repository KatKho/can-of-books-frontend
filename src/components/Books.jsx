import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

class Books extends React.Component {
    constructor(){
        super();
        this.state={
            token: null,
        }
    }

   async componentDidMount() {
      let res = await this.props.auth0.getIdTokenClaims();
      const token = res.__raw;
      console.log('OUR WEB TOKEN', token);
      this.setState({ token });

      const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        },
        method: 'GET',
        baseURL: 'http://localhost:3001',
        url: '/books'
        }
        const booksResponse = await axios(config);
        console.log(booksResponse);
    }
  

    render() {
        console.log(this.props);
        return (
            <>
            <h2>Welcome</h2>
            </>
        )
    }
}

const AuthBooks =  withAuth0(Books);
export default AuthBooks;