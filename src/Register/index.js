import React, { Component } from "react";
import { Modal, Button, Icon, Form } from "semantic-ui-react";

class Register extends Component {
  constructor() {
    super();

    this.state = {
      full_name: "",
      email: "",
      password: "",
      action: "register"
    };
  }

  // create method to handle the change
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  // create method to handle submit
  handleSubmit = e => {
    // this stops the page from trying to send data to the server
    e.preventDefault();
    // invoke the method that will actually log the user in
    this.loginPadawan();
  };

  RegisterPadawan = () => {
    // we are passing in login in the Login.js
    this.props.register({
      full_name: this.state.full_name,
      email: this.state.email,
      password: this.state.password
    });
    console.log("you are now registered");
  };

  render() {
    return (
      <Modal trigger={<Button>Join the Academy</Button>} closeIcon>
        <Modal.Content>
          <p>Please enter all fields.</p>
        </Modal.Content>
        <Modal.Actions>
          <Form.Input
            type="text"
            name="full_name"
            placeholder="Full Name"
            label="Full Name"
            value={this.state.full_name}
            onChange={this.handleChange}
          />
          <Form.Input
            type="Email"
            name="email"
            placeholder="Email"
            label="Email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <Form.Input
            type="password"
            name="password"
            placeholder="Password"
            label="Password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <Button color="green" onClick={this.RegisterPadawan}>
            <Icon name="checkmark" /> Finished?
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default Register;
