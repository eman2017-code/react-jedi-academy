import React, { Component } from "react";
import { Form } from "semantic-ui-react";

class Register extends Component {
  constructor() {
    super();

    this.state = {};
  }
  render() {
    return (
      <div>
        <Form>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              id="form-subcomponent-shorthand-input-first-name"
              label="Full name"
              placeholder="First name"
            />
            <Form.Input
              fluid
              id="form-subcomponent-shorthand-input-last-name"
              label="Email"
              placeholder="Last name"
            />
            <Form.Input
              fluid
              id="form-subcomponent-shorthand-input-last-name"
              label="Password"
              placeholder="Last name"
            />
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default Register;
