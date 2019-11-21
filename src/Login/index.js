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
          <Form.Group widths="equal">
            <Form.Input
              fluid
              id="form-subcomponent-shorthand-input-first-name"
              label="First name"
              placeholder="First name"
            />
            <Form.Input
              fluid
              id="form-subcomponent-shorthand-input-last-name"
              label="Last name"
              placeholder="Last name"
            />
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default Login;
