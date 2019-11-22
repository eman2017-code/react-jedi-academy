import React, { Component } from "react";
// import {
//   Button,
//   Container,
//   Divider,
//   Form,
//   Grid,
//   Segment
// } from "semantic-ui-react";
import PadawanCourseList from "../PadawanCourseList";
import PadawanShowCourse from "../PadawanShowCourse";

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
      </div>
    );
  }
}

export default PadawanDashboard;
