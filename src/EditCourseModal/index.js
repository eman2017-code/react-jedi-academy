import React, {Component} from 'react'
import { Form, Button, Label, Header, Modal } from 'semantic-ui-react';

class EditCourseModal extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      title: '',
      description: '',
      start_date: ''
    }
  }

  componentDidMount() {

    console.log("this is props on CDM modal>> ");
    console.log(this.props.courseToEdit);
    // this does add a few extra properties to state
    // component did mount mounts data to form 
    this.setState({
      title: this.props.courseToEdit.title,
      description: this.props.courseToEdit.description,
      start_date: this.props.courseToEdit.start_date
    })
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value 
    })
  }

  handleSubmit = (event) => {
    event.preventDefault() // no page reload 
    this.props.updateCourse(this.state)
  }

render () {
  console.log("this is props on render EditCourseModal");
  console.log(this.props);
  return(

    <Modal open={this.props.editModalOpen} closeIcon onClose={this.props.closeModal}>
      <Header>Edit Course</Header>
      <Modal.Content>

        <Form onSubmit={this.handleSubmit}>
          <Label> Title: </Label> 
          <Form.Input 
          type="text" 
          name="title" 
          value={this.state.title} 
          onChange={this.handleChange}
          /> 

          <Label> Description: </Label> 
          <Form.Input 
          type="text" 
          name="description" 
          value={this.state.description} 
          onChange={this.handleChange}
          /> 

          <Label> Start Date: </Label> 
          <Form.Input 
          type="text" 
          name="start_date" 
          value={this.state.start_date} 
          onChange={this.handleChange}
          /> 

        <Button type="submit">Submit</Button> 

        </Form> 
 
      </Modal.Content> 
    </Modal>

    )
  }
}
export default EditCourseModal;