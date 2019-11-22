import React from "react";
import "./App.css";
// import Register from "./Register";
import Login from "./Login";
import PadawanDashboard from "./PadawanDashboard";
// import PadawanDashboard from "./PadawanDashboard";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // being logged in will initially be false
      loggedIn: true
      // initially register will be false
      // register: false
    };
  }

  // create register route to be passed into the register component
  register = async registerInfo => {
    // we have to fetch this information in the route in our api
    const response = await fetch(
      process.env.REACT_APP_API_URL + "/api/v1/padawans/register",
      {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(registerInfo),
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    const parsedLoginResponse = await response.json();
    // if the response is cleared
    if (parsedLoginResponse.status.code === 201) {
      this.setState({
        loggedIn: true
      });
    } else {
      console.log("Registration Failed:");
      console.log(parsedLoginResponse);
    }
  };

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
      this.setState({
        loggedIn: true
      });
    } else {
      console.log(parsedLoginResponse);
    }
  };

  // logOut = async loginInfo => {
  //   const response = await fetch(
  //     process.env.REACT_APP_API_URL + "/api/v1/padwans/logout",
  //     {
  //       method: "GET",
  //       // these are the cookies
  //       credentials: "include",
  //       body: JSON.stringify(loginInfo),
  //       headers: {
  //         "Content-Type": "application/json"
  //       }
  //     }
  //   );
  //   const parsedLoginResponse = await response.json();

  //   if (parsedLoginResponse.status.code === 200) {
  //     console.log("you are now logged in");
  //     this.setState({
  //       loggedIn: true
  //     });
  //   } else {
  //     console.log("Login Failed:");
  //     console.log(parsedLoginResponse);
  //   }
  // };

  render() {
    return (
      <div className="App">
        {this.state.loggedIn ? (
          <PadawanDashboard />
        ) : (
          <Login login={this.login} />
        )}
        {/* {this.state.loggedIn ? <PadawanDashboard /> : null} */}
        {/* {this.state.register ? <PadawanDashboard /> : null} */}
      </div>
    );
  }
}

export default App;
