import React, { Component } from "react";
import { Modal, Button, Icon, Form } from "semantic-ui-react";

// function Register(props) {
//   return (
// <Modal trigger={<Button>Join the Academy</Button>} closeIcon>
//   {/* <Header icon="archive" content="Archive Old Messages" /> */}
//   <Modal.Content>
//     <p>Please enter all fields.</p>
//   </Modal.Content>
//   <Modal.Actions>
//     <Form.Input type="text" name="full_name" label="Full Name" />
//     <Form.Input type="email" name="email" label="Email" />
//     <Form.Input type="password" name="password" label="Password" />
//     <Button color="green">
//       <Icon name="checkmark" /> Yes
//     </Button>
//   </Modal.Actions>
// </Modal>
//   );
// }

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
          />
          <Form.Input
            type="email"
            name="email"
            placeholder="Email"
            label="Email"
          />
          <Form.Input
            type="password"
            name="password"
            placeholder="Password"
            label="Password"
          />
          <Button color="green">
            <Icon name="checkmark" /> Done?
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default Register;
