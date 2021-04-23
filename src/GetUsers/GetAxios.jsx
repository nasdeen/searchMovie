import React, { Component } from "react";
import axios from "axios";

class GetAxios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [],
    };
  }

  componentDidMount() {
    axios.get("http://jsonplaceholder.typicode.com/users").then((respond) => {
      this.setState({ persons: respond.data });
      console.log("persons:", respond.data);
    });
  }
  render() {
    return (
      <>
        <h2>Person's Profile</h2>
        <hr />
        {this.state.persons.map((eachUser) => (
          <div>
            <p>Username: {eachUser.username}</p>
            <p>name: {eachUser.name}</p>
            <p>ID: {eachUser.id}</p>
            <p>Email: {eachUser.email}</p>
          </div>
        ))}
      </>
    );
  }
}
export default GetAxios;
