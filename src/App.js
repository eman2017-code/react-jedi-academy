import React from "react";
import "./App.css";
// import Register from "./Register";
import Login from "./Login";
import PadawanDashboard from "./PadawanDashboard";
import AdminShowAllCourses from "./AdminShowAllCourses";
import AdminShowAllStudents from "./AdminShowAllStudents";
import AdminContainer from "./AdminContainer";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // being logged in will initially be false
      loggedIn: false,
      loggedInPadawan: null,
      // checking to see if user is an admin
      isAdmin: false
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
    console.log(parsedLoginResponse.data);

    if (parsedLoginResponse.data.full_name === "admin") {
      this.setState({
        isAdmin: true,
        loggedInPadawan: this.state.loggedInPadawan
      });
    } else {
      // if the reponse is good
      if (parsedLoginResponse.status.code === 200) {
        this.setState({
          loggedIn: true,
          loggedInPadawan: parsedLoginResponse.data
        });
      } else {
        console.log(parsedLoginResponse);
      }
    }
  }

   adminLogOut = async () => {
        const response = await fetch(
      // fetch the response from the API
      process.env.REACT_APP_API_URL + "/api/v1/padawans/logout",
      {
        method: "GET",
        // this is the cookies
        credentials: "include",
        body: JSON.stringify(),
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    const parsedLoginResponse = await response.json();
    console.log(parsedLoginResponse);
    console.log(this.state);

    if (parsedLoginResponse.status.code === 200) {   
      this.setState({
        isAdmin: false
      });
      console.log(this.state)
    } else {
      console.log(parsedLoginResponse);
    }
  }

  padawanLogOut = async () => {
        const response = await fetch(
      // fetch the response from the API
      process.env.REACT_APP_API_URL + "/api/v1/padawans/logout",
      {
        method: "GET",
        // this is the cookies
        credentials: "include",
        body: JSON.stringify(),
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    const parsedLoginResponse = await response.json();
    console.log(parsedLoginResponse);
    console.log(this.state);

    if (parsedLoginResponse.status.code === 200) {   
      this.setState({
        loggedIn: false
      });
      console.log(this.state)
    } else {
      console.log(parsedLoginResponse);
    }
  };

  render() {
    const componentToRender = () => {
      if (this.state.isAdmin) {
        return <AdminContainer loggedInPadawan={this.state.loggedInPadawan} adminLogOut={this.adminLogOut}/>;
      } else if (this.state.loggedIn) {
        return (
          <PadawanDashboard loggedInPadawan={this.state.loggedInPadawan} padawanLogOut={this.padawanLogOut}/>
        );
      } else {
        return <Login login={this.login} />;
      }
    };

    return <div className="App">{componentToRender()}</div>;
  }
}

export default App;
