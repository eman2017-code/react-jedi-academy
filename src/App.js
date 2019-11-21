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
    // switch the state of each
    this.setState({
      login: true,
      register: false
    });
  };

  // show the register form
  showRegister = () => {
    // switch the state of each
    this.setState({
      login: false,
      register: true
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.showLogin}>
          {this.state.login ? <Login /> : null}
          <h3>Login</h3>
        </button>
        <button onClick={this.showRegister} className="register">
          {this.state.register ? <Register /> : null}
          <h3>Register</h3>
        </button>
      </div>
    );
  }
}

export default App;
