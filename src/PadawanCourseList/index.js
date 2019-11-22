import React, { Component } from "react";
import { Button, Card, Image, Icon, Header } from "semantic-ui-react";
import PadawanShowCourse from "../PadawanShowCourse";

class PadawanCourseList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showCourseModal: false
    };
  }

  // create a function that will show all the courses that a student has
  openCourses = () => {
    this.setState({
      showCourseModal: true
    });
  };

  render() {
    return (
      <div>
        <div>
          <PadawanShowCourse showCourseModal={this.state.showCourseModal} />
        </div>
        <div>
          <Header as="h2">
            <Image
              circular
              src="https://react.semantic-ui.com/images/avatar/large/patrick.png"
            />{" "}
            JEDI ACADEMY - PADAWAN DASHBOARD
          </Header>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div>
          <Card>
            <Image
              src="https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
              wrapped
              ui={false}
            />
            <Card.Content>
              {/* <Card.Header>{this.props.loggedInPadawan.full_name}</Card.Header> */}
              <Card.Description>Young Jedi in training</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Button onClick={this.openCourses}>
                <Icon name="book" />
                View Classes
              </Button>
            </Card.Content>
          </Card>
        </div>
      </div>
    );
  }
}

export default PadawanCourseList;
