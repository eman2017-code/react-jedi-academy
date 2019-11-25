import React, { Component } from "react";
import PadawanCourseList from "../PadawanCourseList";

class PadawanDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedInPadawan: this.props.loggedInPadawan
    };
    console.log("loggedInPadawan -- in padawan dashboard");
    console.log(this.state.loggedInPadawan);
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
