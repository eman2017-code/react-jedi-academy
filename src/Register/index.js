import React, { Component } from "react";
import { Form } from "semantic-ui-react";

class Register extends Component {
  constructor() {
    super();

    this.state = {};
  }

  // create method to handle change

  // create method to handle submit

  render() {
    return (
      <div>
        <Form>
          <Form.Group>
            <Form.Input
              type="text"
              label="Full name"
              placeholder="Enter First Name"
            />
            <Form.Input type="text" label="Email" placeholder="Enter Email" />
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

export default Register;
