import React from "react";
import "./App.css";
// import Register from "./Register";
import Login from "./Login";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // being logged in will initially be false
      loggedIn: false,
      // initially register will be false
      register: false
    };
  }

  // create a route to login
  login = async loginInfo => {
    const response = await fetch(
      // fetch the response from the API
      process.env.REACT_APP_API_URL + "/api/v1/padawans/login",
      {
        method: "POST",
        // this is the cookies
        credentials: "include",
        body: JSON.stringify(loginInfo),
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    const parsedLoginResponse = await response.json();

    if (parsedLoginResponse.status.code === 200) {
      console.log("you are now logged in");
      this.setState({
        loggedIn: true
      });
    } else {
      console.log("Login Failed:");
      console.log(parsedLoginResponse);
    }
  };

  render() {
    return (
      <div>
        <Login login={this.login} />
      </div>
    );
  }
}

export default App;
