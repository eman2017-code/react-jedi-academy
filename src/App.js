import React from "react";
import "./App.css";
import Login from "./Login";

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
      login: true
    });
  };

  // show the register form

  render() {
    return (
      <div>
        <button onClick={this.showLogin}>
          <h3>Login</h3>
        </button>
      </div>
    );
  }
}

export default App;
