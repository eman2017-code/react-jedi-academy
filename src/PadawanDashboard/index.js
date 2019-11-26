import React, { Component } from "react";
import PadawanCourseList from "../PadawanCourseList";
import PadawanEnrollment from "../PadawanEnrollment";
import { Button, Grid, Header, Image } from "semantic-ui-react";

class PadawanDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedInPadawan: this.props.loggedInPadawan
    };
  }

  render() {
    return [
      <div>
        <div>
          <Header as="h2">
            <Image
              circular
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/27d50ee6-198c-4501-b5fc-ce874c1d84cf/d12iveq-33f8340e-7374-478c-88dd-4019b6d2efbb.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI3ZDUwZWU2LTE5OGMtNDUwMS1iNWZjLWNlODc0YzFkODRjZlwvZDEyaXZlcS0zM2Y4MzQwZS03Mzc0LTQ3OGMtODhkZC00MDE5YjZkMmVmYmIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.vWyqAXph7jtjXhGaSRORIoOufZWIgXKTbdxBOkzFwNE"
            />{" "}
            JEDI ACADEMY - PADAWAN DASHBOARD
          </Header>
        </div>
        <br></br>
        <br></br>
        <br></br>

        <Grid
          columns={2}
          style={{ height: "100%" }}
          verticalAlign="top"
          stackable
        >
          <Grid.Column>
            <PadawanCourseList
              key="one"
              loggedInPadawan={this.state.loggedInPadawan}
            />
            ,
          </Grid.Column>
          <Grid.Column>
            <Header as="h2">ENROLLMENT OPTIONS</Header>
            <PadawanEnrollment
              key="two"
              loggedInPadawan={this.state.loggedInPadawan}
            />
            ,
            <Button key="three" onClick={this.props.padawanLogOut}>
              Log Out
            </Button>
          </Grid.Column>
        </Grid>
      </div>
    ];
  }
}

export default PadawanDashboard;
