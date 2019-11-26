import React, { Component } from "react";
import PadawanCourseList from "../PadawanCourseList";
import PadawanEnrollment from "../PadawanEnrollment";
import { Button, Grid } from "semantic-ui-react";

class PadawanDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedInPadawan: this.props.loggedInPadawan
    };
  }

  render() {
    return [
      <PadawanCourseList
        key="one"
        loggedInPadawan={this.state.loggedInPadawan}
      />,
      <PadawanEnrollment
        key="two"
        loggedInPadawan={this.state.loggedInPadawan}
      />,
      <Button key="three" onClick={this.props.padawanLogOut}>
        Log Out
      </Button>
    ];
  }
}

export default PadawanDashboard;


