import React, { Component } from "react";
import { Button, List } from "semantic-ui-react";

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

  showAllCourses() {
    const courses = this.state.courses.map(course => {
      return <List.Item key={course.id}> {courses.title} </List.Item>;
    });

    return <List bulleted> {courses} </List>;
  }

  render() {
    return <Button onClick={this.getCourses}>Select Your Courses!</Button>;
  }
}

export default PadawanEnrollment;
