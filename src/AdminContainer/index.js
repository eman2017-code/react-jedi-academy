import React, { Component } from "react";
import AdminShowAllStudents from "../AdminShowAllStudents";
import AdminShowAllCourses from "../AdminShowAllCourses";
import AdminAddCourse from "../AdminAddCourse";
import EditCourseModal from "../EditCourseModal";
import { Button, Header, Grid, Image } from "semantic-ui-react";

class AdminContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      padawans: [],
      courses: [],
      addCourse: false,
      courseToEdit: {
        title: "",
        description: "",
        start_date: "",
        id: ""
      },
      editCourseModal: false
    };
  }

  componentDidMount() {
    this.getStudents();
    this.getCourses();
  }

  // method to get all students
  getStudents = async () => {
    try {
      // make the API call
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
    } catch (err) {}
  };

  // method to get all students
  getCourses = async () => {
    try {
      // make the API call
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
    } catch (err) {}
  };

  // loads form for adding course
  loadForm = () => {
    this.setState({
      addCourse: true
    });
  };

  addCourse = async (e, courseFromForm) => {
    //prevents the browser from reloading when an event is called...
    e.preventDefault();
    try {
      //Call the array of all of the courses in the DB.
      const createdCourseResponse = await fetch(
        process.env.REACT_APP_API_URL + "/api/v1/courses/",
        {
          method: "POST",
          credentials: "include",
          body: JSON.stringify(courseFromForm),
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      const parsedResponse = await createdCourseResponse.json();
      //push all courses + added course into state.
      this.setState({
        courses: [...this.state.courses, parsedResponse.data]
      });

      this.setState({
        addCourse: false
      });
    } catch (err) {}
  };

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
  };

  editCourse = idOfCourseToEdit => {
    const courseToEdit = this.state.courses.find(
      course => course.id === idOfCourseToEdit
    );
    this.setState({
      editCourseModal: true,
      idOfCourseToEdit: courseToEdit.id,
      courseToEdit: {
        ...courseToEdit
      }
    });
  };

  handleEditChange = e => {
    this.setState({
      courseToEdit: {
        ...this.state.courseToEdit,
        [e.currentTarget.title]: e.currentTarget.value
      }
    });
  };

  updateCourse = async newCourseInfo => {
    try {
      // hit our API to actually update it
      const url =
        process.env.REACT_APP_API_URL +
        "/api/v1/courses/" +
        this.state.idOfCourseToEdit;

      const updateResponse = await fetch(url, {
        method: "PUT",
        credentials: "include",
        body: JSON.stringify(newCourseInfo),
        headers: {
          "Content-Type": "application/json"
        }
      });

      const updateResponseParsed = await updateResponse.json();

      const newCourseArrayWithUpdate = this.state.courses.map(course => {
        if (course.id === updateResponseParsed.data.id) {
          // replace it if it's that one course
          course = updateResponseParsed.data;
        }
        return course;
      });

      this.setState({
        editCourseModal: false,
        courses: newCourseArrayWithUpdate
      });
      // close the modal
      this.closeModal();
    } catch (err) {}
  };

  closeModal = () => {
    this.setState({
      editCourseModal: false
    });
  };

  render() {
    return (
      <div>
        <div>
          <Header as="h2">
            <Image
              circular
              src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
            />{" "}
            JEDI ACADEMY - ADMIN DASHBOARD
          </Header>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <Grid
          columns={2}
          textAlign="center"
          style={{ height: "100%" }}
          verticalAlign="top"
          stackable
        >
          <Grid.Column>
            <Header as="h2">JEDI CURRICULUM</Header>
            <AdminShowAllCourses
              courses={this.state.courses}
              deleteCourse={this.deleteCourse}
              editCourse={this.editCourse}
            />
            <Button onClick={this.loadForm}> Add A Course </Button>
            {this.state.addCourse ? (
              <AdminAddCourse addCourse={this.addCourse} />
            ) : null}
          </Grid.Column>
          <Grid.Column>
            <Header as="h2">ENROLLED PADAWANS</Header>
            <AdminShowAllStudents padawans={this.state.padawans} />
            {this.state.editCourseModal ? (
              <EditCourseModal
                editModalOpen={this.state.editCourseModal}
                updateCourse={this.updateCourse}
                courseToEdit={this.state.courseToEdit}
              />
            ) : null}
            <Button onClick={this.props.adminLogOut}> Log Out </Button>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default AdminContainer;
