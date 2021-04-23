import React, { Component } from "react";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [],
    };
  }

  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        this.setState({ persons: res });
      })
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <>
        <h3>Users Profile</h3>
        <hr />
        {this.state.persons.map((user) => (
          <div>
            <p>ID: {user.id}</p>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Username: {user.username}</p>
            <hr />
          </div>
        ))}
      </>
    );
  }
}

export default Users;
