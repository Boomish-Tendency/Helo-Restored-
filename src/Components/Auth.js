import React, { Component } from "react";

class Auth extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };


  render() {
    return (
      <div>
        {" "}
        Auth
        <button>Login</button>
        <button>Register</button>
      </div>
    );
  }
}

export default Auth;
