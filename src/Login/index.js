import React, { Component } from "react";
import { Button, Form, Grid, Segment } from "semantic-ui-react";
// import Register from "../Register";
import PadawanDashboard from "../PadawanDashboard";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      full_name: "",
      email: "",
      password: "",
      loggedIn: false,
      // signUpModal: false,
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

  // method to login in the padawan
  loginPadawan = () => {
    // we are passing in login in the App.js
    this.props.login({
      full_name: this.state.full_name,
      password: this.state.password
    });
    console.log("you are now logged in");
  };

  // method to register the padawan
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
        <div>{this.state.loggedIn ? <PadawanDashboard /> : null}</div>
        <div>
          <Segment placeholder>
            <Grid columns={2} relaxed="very" stackable>
              <Grid.Column>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Input
                    icon="user"
                    iconPosition="left"
                    type="text"
                    label="Full Name"
                    name="full_name"
                    placeholder="Full Name"
                    value={this.state.full_name}
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

              <Grid.Column verticalAlign="middle"></Grid.Column>
            </Grid>
          </Segment>
        </div>

        <div>
          <form>
            <input
              value={this.state.full_name}
              onChange={this.handleChange}
            ></input>
            <input
              value={this.state.full_name}
              onChange={this.handleChange}
            ></input>
            <input
              value={this.state.full_name}
              onChange={this.handleChange}
            ></input>
          </form>

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

export default Login;
