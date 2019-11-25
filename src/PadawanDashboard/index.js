import React, { Component } from "react";
import PadawanCourseList from "../PadawanCourseList";
import PadawanShowCourse from "../PadawanShowCourse";
import { Button } from "semantic-ui-react";

class PadawanDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedInPadawan: this.props.loggedInPadawan
    };
  }
  render() {
    return (
      <div>
        <PadawanCourseList loggedInPadawan={this.state.loggedInPadawan} />
        <Button onClick={this.props.padawanLogOut}>Log Out</Button>
      </div>
    );
  }
}

export default PadawanDashboard;
