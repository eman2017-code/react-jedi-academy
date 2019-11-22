import React, { Component } from "react";
import { Button, Card, Image, Icon, Header } from "semantic-ui-react";
// import PadawanShowCourse from "../PadawanShowCourse";

class PadawanCourseList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      courses: []
    };
  }

  // create a method that will get all the courses that a user is in
  getCoursesPadawanIsIn = async padawanId => {
    try {
      const response = await fetch(
        process.env.REACT_APP_API_URL + "/api/v1/padawans/" + padawanId,
        {
          credentials: "include"
        }
      );
      const parsedResponse = await response.json();
      console.log("this is the parsed response");
      console.log(parsedResponse);
      // if the response is cleared
      if (parsedResponse.status.code === 200) {
        this.setState({
          courses: parsedResponse.data
        });
      }
      // otherwise, give them an error
    } catch (err) {
      console.log(err);
    }
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
              {/* <Card.Header>{this.props.loggedInPadawan.full_name}</Card.Header> */}
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
      </div>
    );
  }
}

export default PadawanCourseList;
