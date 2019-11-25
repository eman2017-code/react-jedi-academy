import React, { Component } from "react";
import { Button, Form, Grid, Segment } from "semantic-ui-react";
import PadawanDashboard from "../PadawanDashboard";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      full_name: "",
      password: "",
      loggedIn: false,
      padawan_id: "",
      email: "",
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
    console.log(this.state);
    this.setState({
      loggedIn: true,
      loggedInPadawan: this.props.loggedInPadawan
    });
  };

  render() {
    return (
      <div>
        <div>
          {this.state.loggedIn ? (
            <PadawanDashboard loggedInPadawan={this.state} />
          ) : null}
        </div>
        <div>
          <Segment placeholder>
            <Grid columns={2} relaxed="very" stackable>
              <Grid.Column>
                <Form>
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
                    onClick={this.handleSubmit}
                    content="Register"
                    primary
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
