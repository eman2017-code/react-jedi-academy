import React, { Component } from "react";
import { Button, Card, Image, Icon, Header } from "semantic-ui-react";
import PadawanShowCourse from "../PadawanShowCourse";
// import PadawanShowCourse from "../PadawanShowCourse";

class PadawanCourseList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      courses: [],
      showCourse: false,
      viewFellowPadawans: false,
      loggedInPadawan: this.props.loggedInPadawan
    };
  }

  // create a method that will get all the courses that a user is in
  getCoursesPadawanIsIn = async () => {
    try {
      const response = await fetch(
        process.env.REACT_APP_API_URL +
          "/api/v1/padawans/" +
          this.state.loggedInPadawan.id,
        {
          credentials: "include"
        }
      );
      const parsedResponse = await response.json();

      // if the response is cleared
      if (parsedResponse.status.code === 200) {
        this.setState({
          courses: parsedResponse.data,
          showCourse: true
        });
      }
      // otherwise, give them an error
    } catch (err) {}
  };

  // show the courses on the screen that the user is taking
  render() {
    return (
      <div className="ui centered cards">
      <Header as="h2">JEDI IN TRAINING</Header>
        <div>
          <div>
            <Card>
              <Image
                src="https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
                wrapped
                ui={false}
              />
              <Card.Content>
                <Card.Header>
                  {this.props.loggedInPadawan.full_name}
                </Card.Header>
                <Card.Description>Young Jedi in training</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Button onClick={this.getCoursesPadawanIsIn}>
                  <Icon name="book" />
                  View Classes
                </Button>
              </Card.Content>
            </Card>
          </div>
          <div>
            {this.state.showCourse ? (
              <PadawanShowCourse
                padawanCourses={this.state.courses}
                getPadawansACourseIsAttachedTo={this.state.courses}
              />
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default PadawanCourseList;
