import React, { Component } from "react";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      fullName: "",
      email: "",
      password: "",
      action: "login"
    };
  }
  render() {
    return (
      <div>
        <p>this is the login form</p>
      </div>
    );
  }
}

export default Login;
