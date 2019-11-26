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
              src="https://react.semantic-ui.com/images/avatar/large/patrick.png"
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
        />,
        </Grid.Column>
        <Grid.Column>
        <Header as="h2">ENROLLMENT OPTIONS</Header>
        <PadawanEnrollment
          key="two"
          loggedInPadawan={this.state.loggedInPadawan}
        />,
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