import React, { Component } from "react";
import { Container, Header, List } from "semantic-ui-react";
import AdminShowAllCourses from "../AdminShowAllCourses";


class AdminDashboard extends React.Component {
	constructor() {
		super()
		this.state = {

		}
	}
	
	render(){
		return(
			<container>
				<Header as='h2' content='JEDI ACADEMY DASHBOARD'>
				</Header>
				<AdminShowAllCourses/>
			</container>

		)
	}

}

export default AdminDashboard;