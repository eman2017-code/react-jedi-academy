import React, { Component } from "react";
import { Container, Header, List } from "semantic-ui-react";
import AdminShowAllCourses from "../AdminShowAllCourses";


class AdminDashboard extends Component {
	constructor() {
		super()
		this.state = {
			courses: [],

		}
	}
//We are mounting the app to the DOM and immediately calling all data from our API.
	componentDidMount(){
		this.getCourses();
	}

	getCourses = async () => {
		try {
			const courses = await fetch(process.env.REACT_APP_API_URL + '/api/v1/courses/');
			const parsedCourses = await courses.json();
			this.setState({
				courses: parsedCourses.data
			})
			
		}
		catch (err) {
			console.log(err)
		}
		
	}


	
	render(){
		return(
			<Container>
				<Header as='h2' content='JEDI ACADEMY FACULTY DASHBOARD'>
				</Header>
				<AdminShowAllCourses/>
			</Container>

		)
	}

}

export default AdminDashboard;