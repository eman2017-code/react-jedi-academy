import React, { Component } from "react";
import { Button } from "semantic-ui-react";

class PadawanEnrollment extends Component {
  constructor() {
    super();

    this.state = {
      // set courses to be an empty array
      courses: []
    };
  }

  // create a method that loops though all the courses
  getCourses = async () => {
    try {
      // make the fetch call to the API
      const courses = await fetch(
        process.env.REACT_APP_API_URL + "/api/v1/courses/",
        {
          // they have to be logged in
          credentials: "include"
        }
      );

      const parsedCourses = await courses.json();
      console.log("parsedCourses -- all the courses");
      console.log(parsedCourses);

      this.setState({
        courses: parsedCourses.data
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return <Button onClick={this.getCourses}>Show Courses</Button>;
  }
}

export default PadawanEnrollment;
