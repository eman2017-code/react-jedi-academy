import React from "react";
import "./App.css";
// import Register from "./Register";
import Login from "./Login";
import PadawanDashboard from "./PadawanDashboard";
import Register from "./Register";
import AdminShowAllCourses from "./AdminShowAllCourses"
import AdminShowAllStudents from "./AdminShowAllStudents";
import AdminContainer from "./AdminContainer";

class App extends React.Component {
  constructor() {
    super();
    this.state = {

      // being logged in will initially be false
      loggedIn: true,
      loggedInPadawan: null,

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
        loggedIn: true,
        // loggedInPadawan: parsedLoginResponse.data.full_name
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
    console.log(parsedLoginResponse);

    if (parsedLoginResponse.status.code === 200) {
      this.setState({
        loggedIn: true,
        loggedInPadawan: parsedLoginResponse.data
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

  // THIS IS SOMETHING THAT WE WILL NEED TO ADD INTO THE LOGIN PART


  // {this.state.loggedIn ? <AdminShowAllCourses /> : null}
  // {this.state.loggedIn ? <AdminMainPage /> : null}

  render() {
    return (
      <div className="App">
        {this.state.loggedIn ? (
          <PadawanDashboard loggedInPadawan={this.state.loggedInPadawan} />
        ) : (
          <Login login={this.login} />
        )}
      </div>

    );
  }
}

export default App;
