import React, { Component } from "react";
import { Button, List } from "semantic-ui-react";
import EnrollmentOfCourses from "../EnrollmentOfCourses";

class PadawanEnrollment extends Component {
  constructor() {
    super();

    this.state = {
      // set courses to be an empty array
      courses: [],
      enrolling: false
    };
  }

  //   componentDidMount() {
  //     this.getCourses();
  //   }

  seeingCourses = () => {
    this.setState({
      enrolling: true
    });
  };

  // create a method that loops though all the courses
  getCourses = async () => {
    // console.log("this.state.courses -- state of courses");
    // console.log(this.state.courses);
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
      this.seeingCourses();
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div>
        <Button onClick={this.getCourses}>Enroll In Courses</Button>
        <div>
          {this.state.enrolling ? (
            <EnrollmentOfCourses courses={this.state.courses} />
          ) : null}
        </div>
      </div>
    );
  }
}

export default PadawanEnrollment;
