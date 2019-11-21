import React, { Component } from "react";
import { Button, Divider, Form, Grid, Segment } from "semantic-ui-react";

class LoginRegisterFunction extends Component {
  constructor() {
    super();

    this.state = {
      fullName: "",
      password: "",
      action: "login"
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

  loginPadawan = () => {
    // we are passing in login in the App.js
    this.props.login({
      fullName: this.state.fullName,
      password: this.state.password
    });
  };

  render() {
    return (
      <Segment placeholder>
        <Grid columns={2} relaxed="very" stackable>
          <Grid.Column>
            <Form onSubmit={this.handleSubmit}>
              <Form.Input
                icon="user"
                iconPosition="left"
                type="text"
                label="Full Name"
                name="fullName"
                placeholder="Full Name"
                value={this.state.fullName}
                onChange={this.handleChange}
              />
              <Form.Input
                icon="lock"
                iconPosition="left"
                label="Password"
                type="password"
                name="password"
                placeholder="password"
                value={this.state.password}
                onChange={this.handleChange}
              />

              <Button content="Login" primary onClick={this.loginPadawan} />
            </Form>
          </Grid.Column>

          <Grid.Column verticalAlign="middle">
            <Button content="Sign up" icon="signup" size="big" />
          </Grid.Column>
        </Grid>

        <Divider vertical>Or</Divider>
      </Segment>
    );
  }
}

export default LoginRegisterFunction;
