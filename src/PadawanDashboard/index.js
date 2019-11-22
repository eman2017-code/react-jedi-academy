import React, { Component } from "react";
import {
  Button,
  Container,
  Divider,
  Form,
  Grid,
  Segment
} from "semantic-ui-react";
import PadawanCourseList from "../PadawanCourseList";

function PadawanDashboard(props) {
  return <PadawanCourseList loggedInPadawan={props.loggedInPadawan} />;
}

// class PadawanDashboard extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       loggedInPadawan: this.props.loggedInPadawan
//     };
//   }
//   render() {
//     return <PadawanCourseList loggedInPadawan={this.state.loggedInPadawan} />;
//   }
// }

export default PadawanDashboard;
