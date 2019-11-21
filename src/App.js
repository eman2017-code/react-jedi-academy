import React from "react";
import "./App.css";
import Login from "./Login";
import Register from "./Register";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      // initially login will be false
      login: false,
      // initially register will be false
      register: false
    };
  }

  // show login form
  showLogin = () => {
    this.setState({
      login: true,
      register: false
    });
  };

  // show the register form
  showRegister = () => {
    this.setState({
      login: false,
      register: true
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.showLogin}>
          <h3>Login</h3>
        </button>
        <button onClick={this.showRegister}>
          <h3>Register</h3>
        </button>
      </div>
    );
  }
}

export default App;
