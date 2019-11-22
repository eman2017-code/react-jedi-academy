import React, { Component } from "react";
import { Button, Divider, Form, Grid, Segment } from "semantic-ui-react";
import Register from "../Register";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      full_name: "",
      password: "",
      signUpModal: false,
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
      full_name: this.state.full_name,
      password: this.state.password
    });
  };

  // method to show the modal
  showModal = () => {
    this.setState({
      signUpModal: true
    });
  };
  // ModalExampleCloseIcon = () => (
  //   <Modal trigger={<Button>Show Modal</Button>} closeIcon>
  //     <Header icon="archive" content="Archive Old Messages" />
  //     <Modal.Content>
  //       <p>
  //         Your inbox is getting full, would you like us to enable automatic
  //         archiving of old messages?
  //       </p>
  //     </Modal.Content>
  //     <Modal.Actions>
  //       <Button color="red">
  //         <Icon name="remove" /> No
  //       </Button>
  //       <Button color="green">
  //         <Icon name="checkmark" /> Yes
  //       </Button>
  //     </Modal.Actions>
  //   </Modal>
  // );

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

          <Grid.Column verticalAlign="middle">
            {/* <Button content="Sign up" icon="signup" size="big"></Button> */}
            <h4
              onClick={this.showModal}
              // content="Sign up"
              // icon="signup"
              // size="big"
            >
              {" "}
              Sign Up
              {this.state.signUpModal ? <Register /> : null}
            </h4>
          </Grid.Column>
        </Grid>

        <Divider vertical>Or</Divider>
      </Segment>
    );
  }
}

export default Login;
