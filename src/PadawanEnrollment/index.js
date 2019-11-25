import React, { Component } from "react";
import { Button } from "semantic-ui-react";
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

  seeingCourses = () => {
    this.setState({
      enrolling: true
    });
  };

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

      console.log("this.state.courses -- courses");
      console.log(this.state.courses);

      this.seeingCourses();
      // this.selectCourses();
    } catch (err) {
      console.log(err);
    }
  };

  // create a method that will actually enroll a padawan into a course
  selectCourses = async courseId => {
    console.log("courseId -- courseId");
    console.log(courseId);
    console.log("you are hitting the selectCourses");
    const reponse = await fetch(
      process.env.REACT_APP_API_URL + "/api/v1/enrollments/" + courseId,
      {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(courseId),
        header: {
          "Content-Type": "application/json"
        }
      }
    );
    const parsedSelectedCourseResponse = await reponse.json();
    console.log("parsedSelectedCourseResponse.data");
    console.log(parsedSelectedCourseResponse.data);
  };

  render() {
    return (
      <div>
        <Button onClick={this.getCourses}>Enroll In Courses</Button>
        <div>
          {this.state.enrolling ? (
            <EnrollmentOfCourses
              courses={this.state.courses}
              selectedCourses={this.selectCourses}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default PadawanEnrollment;
