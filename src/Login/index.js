import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";

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
        <Form>
          <Form.Group>
            <Form.Input
              type="text"
              label="Full name"
              placeholder="Enter Full Name"
            />
            <Form.Input
              type="password"
              label="Password"
              placeholder="Enter Password"
            />
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default Login;
