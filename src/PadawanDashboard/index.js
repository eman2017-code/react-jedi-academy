import React, { Component } from "react";
import PadawanCourseList from "../PadawanCourseList";
import PadawanEnrollment from "../PadawanEnrollment";

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
      />
    ];
  }
}

export default PadawanDashboard;
