import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <Navbar style={{display: 'flex',justifyContent: 'space-around'}} collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <NavItem style={{color: 'white'}}><Link to="/" className="nav-link">Home</Link></NavItem>
        <NavItem style={{color: 'white'}}><Link to="/About" className="nav-link">About</Link></NavItem>
        <NavItem style={{color: 'white'}}><Link to="/Profile" className="nav-link">Profile</Link></NavItem>
        {this.props.children}
      </Navbar>
    )
  }
}

export default Header;
