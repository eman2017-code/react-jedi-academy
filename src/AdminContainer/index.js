import React, { Component } from "react";
import AdminShowAllStudents from "../AdminShowAllStudents";
import AdminShowAllCourses from "../AdminShowAllCourses";
import AdminAddCourse from "../AdminAddCourse";
import { Button } from "semantic-ui-react";

class AdminContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      padawans: [],
      courses: [],
      addCourse: false,
      // courseToAdd: {
      // 	title: '',
      // 	description: ''
      // }


    };
  }

  componentDidMount() {
    this.getStudents();
    this.getCourses();
  }

  getStudents = async () => {
    try {
      const padawans = await fetch(
        process.env.REACT_APP_API_URL + "/api/v1/padawans/",
        {
          credentials: "include"
        }
      );
      const parsedPadawans = await padawans.json();
      console.log(parsedPadawans);

      this.setState({
        padawans: parsedPadawans.data
      });
    } catch (err) {
      console.log(err);
    }
  };

  getCourses = async () => {
    try {
      const courses = await fetch(
        process.env.REACT_APP_API_URL + "/api/v1/courses/",
        {
          credentials: "include"
        }
      );

      const parsedCourses = await courses.json();
      console.log(parsedCourses);

      this.setState({
        courses: parsedCourses.data
      });
    } catch (err) {
      console.log(err);
    }
  };

  addCourse = () => {
  	console.log('Hitting The Button')
  	this.setState({
        addCourse: true
    })
  }
  

  deleteCourse = async id => {
    const deleteCourseResponse = await fetch(
      process.env.REACT_APP_API_URL + "/api/v1/courses/" + id,
      {
        credentials: "include",
        method: "DELETE"
      }
    );

    const deleteCourseParsed = await deleteCourseResponse.json();
    console.log(deleteCourseParsed);
    this.setState({
      courses: this.state.courses.filter(course => course.id !== id)
    });
  };

  render() {
    return (
      <div>
        <AdminShowAllStudents padawans={this.state.padawans} />
        <AdminShowAllCourses
          courses={this.state.courses}
          deleteCourse={this.deleteCourse}
        />
        <Button onClick={this.addCourse}>Add A Course</Button>
        <div>{this.state.addCourse ? <AdminAddCourse/> : null}</div>
      </div>
    );
  }
}

export default AdminContainer;
