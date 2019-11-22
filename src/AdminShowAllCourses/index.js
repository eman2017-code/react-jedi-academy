import React, { Component } from "react";
import { Container, Header, List, Button, Card } from "semantic-ui-react";

class CourseList extends Component {
	constructor() {
		super();

		this.state = {
			course: [],
			students: []
		}
	}
	//we need a function that loops through all of the courses and displays it in the container below.
	getCourse = (props) => {
		const courses  = props.courses.map((course) => {
			return(
				<List>{course.title}</List>	
				)	
		})	
	}

	render() {
		return (
			<div>
			<Card>
			<Header>Classes</Header>
				<Button onClick-={this.addClass}>Add Class</Button>
				<Container>
					<p>this is where we need to loop all of the courses that the school offers</p>
				</Container>
			</Card>

			<Card>
				<Header>Students</Header>
				<Container>
				</Container>
			</Card>
		</div>
		)
	}	
}




export default CourseList;