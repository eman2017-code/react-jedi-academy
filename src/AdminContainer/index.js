import React, { Component } from "react";
import AdminShowAllStudents from "../AdminShowAllStudents";
import AdminShowAllCourses from "../AdminShowAllCourses";
import AdminAddCourse from "../AdminAddCourse";
import { Button } from "semantic-ui-react";

class AdminContainer extends Component {
  constructor(props) {
  	console.log()
    super(props);

    this.state = {
      padawans: [],
      courses: [],
      addCourse: false


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
  }

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
  }

  loadForm = () => {
  	this.setState({
        addCourse: true
    })	
  }
  

  addCourse = async (e, courseFromForm) => {
  	//prevents the browser from reloading when an event is called...
  	 // e.preventDefault();
  	 e.preventDefault();
  	try {
  	//Call the array of all of the courses in the DB.
  		const createdCourseResponse = await fetch(
  			process.env.REACT_APP_API_URL + "/api/v1/courses/",
  			{
  				method: 'POST',
          		credentials: "include",
          		body: JSON.stringify(courseFromForm),
          		headers: {
          			'Content-Type': 'application/json'
        		}
          				
        	}

  		)
  		const parsedResponse = await createdCourseResponse.json();
      	//push all courses + added course into state.
      	this.setState({courses: [...this.state.courses, parsedResponse.data]})
      	this.setState({
        addCourse: false
    })

  	}
  	
  	catch (err) {
  		console.log(err)
  	}

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
        <Button onClick={this.loadForm}>Add A Course</Button>
        <div>{this.state.addCourse ? <AdminAddCourse addCourse={this.addCourse}/> : null}</div>
        <Button onClick={this.props.logOut}>Log Out</Button>
      </div>
    );
  }
}

export default AdminContainer;
