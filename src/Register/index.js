import React, { Component } from "react";
import { Button, Form, Grid, Segment } from "semantic-ui-react";
import PadawanDashboard from "../PadawanDashboard";

class Register extends Component {
  constructor() {
    super();

    this.state = {
      full_name: "",
      email: "",
      password: "",
      loggedIn: false,
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
    this.registerPadawan();
  };

  registerPadawan = () => {
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
      <div>
        <div>{this.state.register ? <PadawanDashboard /> : null}</div>
        <div>
          <Segment placeholder>
            <Grid columns={2} relaxed="very" stackable>
              <Grid.Column>
                <Form onSubmit={this.handleSubmit}>
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

                  <Button
                    content="Register"
                    primary
                    onClick={this.registerPadawan}
                  />
                </Form>
              </Grid.Column>

              <Grid.Column verticalAlign="middle"></Grid.Column>
            </Grid>
          </Segment>
        </div>
      </div>
    );
  }
}

export default Register;
