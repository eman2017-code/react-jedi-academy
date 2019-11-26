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
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/27d50ee6-198c-4501-b5fc-ce874c1d84cf/d12iveq-33f8340e-7374-478c-88dd-4019b6d2efbb.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI3ZDUwZWU2LTE5OGMtNDUwMS1iNWZjLWNlODc0YzFkODRjZlwvZDEyaXZlcS0zM2Y4MzQwZS03Mzc0LTQ3OGMtODhkZC00MDE5YjZkMmVmYmIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.vWyqAXph7jtjXhGaSRORIoOufZWIgXKTbdxBOkzFwNE"
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
