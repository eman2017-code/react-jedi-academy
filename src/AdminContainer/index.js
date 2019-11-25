import React, { Component } from "react";
import AdminShowAllStudents from "../AdminShowAllStudents";
import AdminShowAllCourses from "../AdminShowAllCourses";
import AdminAddCourse from "../AdminAddCourse";
import EditCourseModal from "../EditCourseModal";
import { Button, Form, Label, Modal, Header } from "semantic-ui-react";

class AdminContainer extends Component {
  constructor(props) {
  	console.log()
    super(props);

    this.state = {
      padawans: [],
      courses: [],
      addCourse: false,
      editCourseModal: false,
      courseToEdit: {
        title: '',
        description: '',
        start_date: ''
      }
      // idOfCourseToEdit: -1


    };
  }

  componentDidMount() {
    this.getStudents();
    this.getCourses();
    // {* this.loadForm();
    // this.deleteCourse();
    // this.editCourse();
    // this.updateCourse();
    // this.closeModal(); *} 

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
    this.setState({
      courses: this.state.courses.filter(course => course.id !== id)
    });
  }

  editCourse = (idOfCourseToEdit) => {
    const courseToEdit = this.state.courses.find(course => course.id === idOfCourseToEdit)


    console.log("this is the course to edit on AdminContainer");
    console.log(courseToEdit);
    this.setState({
      editCourseModal: true,
      idOfCourseToEdit: idOfCourseToEdit,
      courseToEdit: {
        ...courseToEdit
      }
    })
  }

  handleEdit

  updateCourse = async (newCourseInfo) => {
    // update the course 
    try {
        // hit our API to actually update it 
        const url = process.env.REACT_APP_API_URL + '/api/v1/courses/' + this.state.idOfCourseToEdit

        const updateResponse = await fetch(url, {
          method: 'PUT',
          body: JSON.stringify(newCourseInfo),
          headers: {
            'Content-Type': 'application/json'
          }
        })

        const updateResponseParsed = await updateResponse.json()

        // updating data on screen (let's be functional about it)
        // iterate over courses in state, replace the pertient course
        // with the data from the updateResponse 
        const newCourseArrayWithUpdate = this.state.courses.map((course) => {
          if(course.id === updateResponseParsed.data.id ) {
            // replace it if it's that one course
            course = updateResponseParsed.data
          }
          return course
        })

        this.setState ({
          courses: newCourseArrayWithUpdate
        })

        // close the modal 
        this.closeModal()
      
    } catch (err) {
      console.log(err)
    }

  }

  closeModal = () => {
    this.setState({
      idOfCourseToEdit: -1
    })
  }

  render() {
    return (
      <div>
        <AdminShowAllStudents padawans={this.state.padawans} />
        <AdminShowAllCourses
          courses={this.state.courses}
          deleteCourse={this.deleteCourse}
          editCourse={this.editCourse}

        />
        <Button onClick={this.loadForm}> Add A Course </Button>
        <div>{this.state.addCourse ? <AdminAddCourse addCourse={this.addCourse}/> : null}</div>
      <div>
          {
            this.state.editCourseModal
            ?
            <EditCourseModal editModalOpen={this.state.editCourseModal}
              updateCourse={this.updateCourse}
              courseToEdit={this.state.courseToEdit}

            /> 
            : 
            null 
          }
        </div>
        <Button onClick={this.props.adminLogOut}> Log Out </Button> 
      </div>
    );
  }
}

export default AdminContainer;
