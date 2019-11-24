import React, { Component } from "react";
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
    console.log(this.state.loggedInPadawan);
    return (
      <div>
        <PadawanCourseList loggedInPadawan={this.state.loggedInPadawan} />
      </div>
    );
  }
}

export default PadawanDashboard;
