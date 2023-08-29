import { Component } from "react";
import Card from 'react-bootstrap/Card';

class Profile extends Component {

  render() {
    /* TODO: render information about the developers */
    return (
  <>
    <Card>
      <p>Ekaterina Khoroshilova</p>
      <a href="https://github.com/KatKho">Link</a>
    </Card>
    <Card>
      <p>Josh Shea</p>
      <a href="https://github.com/jshea44">Link</a>
    </Card>
    </>
  )}
}

export default Profile;
