import React, { Component } from 'react';
import { Card, Button, Form, Input, Select, TextArea, Segment } from 'semantic-ui-react';

class AdminAddCourse extends Component {
  constructor(props) {
    super();
    this.state = {
      title: "",
      description: ""
    };
  }

  handleChange = (e) => {
    // es6 computed properties [e.currentTarget.name]
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  }

  render() {
    return (
      <Segment>
        <h4>Add A Course To The Curriculum</h4>
        <Form onSubmit={(e) => this.props.addCourse(e, this.state)}>
          <Form.Input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />

          <Form.Input
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          />
          <Button type='Submit'>Create Course</Button>
        </Form>
      </Segment>
    );
  }
}

export default AdminAddCourse;