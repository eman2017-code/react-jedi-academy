import React, { Component } from "react";
import { Container, Header, List } from "semantic-ui-react";

class AdminAllCourses extends Component {
	constructor(){
		super();

		this.state = {
			courseName: ""
		};	
	}
	
	render(){
		return (
			<Container>
				<Header as='h2' icon='book' content='Classes'></Header>
				<List>
					<List.Item>Add Class - Should Probably Be A Button</List.Item>
    				<List.Item>Course 1</List.Item>
    				<List.Item>Course 2</List.Item>
    				<List.Item>Course 3</List.Item>
    				<List.Item>Course 4</List.Item>
    				<List.Item>Course 5</List.Item>
  				</List>
			</Container>
			)
	}
}

export default AdminAllCourses;