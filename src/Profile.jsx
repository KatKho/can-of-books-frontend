import React from "react";
import Card from "react-bootstrap/Card";

function Profile({ user }) {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Card>
        <Card.Header>
          <h2>User Profile</h2>
        </Card.Header>
        <Card.Body>
          <Card.Text>Name: {user.name}</Card.Text>
          <Card.Text>Email: {user.email}</Card.Text>
          <Card.Img
            style={{ height: "200px", width: "200px" }}
            src={user.picture}
            alt="Profile Picture"
          />
        </Card.Body>
      </Card>
    </div>
  );
}

export default Profile;
