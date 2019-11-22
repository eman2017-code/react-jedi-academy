import React, { Component } from "react";
import { Button, Card, Image, Icon, Header } from "semantic-ui-react";

class PadawanCourseList extends Component {
  constructor() {
    super();

    this.state = {
      showCourseModal: false
    };
  }

  // create a function that will show all the courses that a student has
  openCourses = () => {
    console.log(
      "the student has clicked on a button that will open their courses that they are currently taking"
    );
  };

  render() {
    return (
      <div>
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
              <Card.Header>insert the full_name of padawan</Card.Header>
              <Card.Description>Young Jedi in training</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Button onClick={this.openCourses}>
                <Icon name="book" />
                10 Courses
              </Button>
            </Card.Content>
          </Card>
        </div>
      </div>
    );
  }
}

export default PadawanCourseList;
