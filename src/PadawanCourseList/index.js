import React, { Component } from "react";
import { Button, Card, Image, Icon } from "semantic-ui-react";

class PadawanCourseList extends Component {
  constructor() {
    super();

    this.state = {};
  }
  render() {
    return (
      <Card>
        <Image
          src="https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
          wrapped
          ui={false}
        />
        <Card.Content>
          <Card.Header>insert the full_name of padawan</Card.Header>
          <Card.Description>
            Daniel is a comedian living in Nashville.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="user" />
            10 Courses
          </a>
        </Card.Content>
      </Card>
    );
  }
}

export default PadawanCourseList;
