import React from "react";
import "./App.css";
import Login from "./Login";
import Register from "./Register";
import AdminShowAllCourses from "./AdminShowAllCourses"

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      // initially login will be false
      login: false,
      loggedIn: false,
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
  login = async loginInfo => {
    // we have to fetch the response from the API
    const response = await fetch(
      process.env.REACT_APP_API_URL + "/api/v1/padawans/login",
      {
        method: "POST",
        // always include the credentials
        credentials: "include",
        // must be JSON
        body: JSON.stringify(loginInfo),
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    // wait for the response
    const parsedLoginResponse = await response.json();
    // if the resonse is good
    if (parsedLoginResponse.status.code == 200) {
      // then set the state of logged in to true
      this.setState({
        loggedIn: true
      });
    } // otherwise
    else {
      console.log(parsedLoginResponse);
    }
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
      {this.state.loggedIn ? <AdminShowAllCourses /> : null}
      </div>
    );
  }
}

export default App;
