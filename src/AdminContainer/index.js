import React, { Component } from 'react';
import AdminShowAllStudents from '../AdminShowAllStudents';
import AdminShowAllCourses from '../AdminShowAllCourses';
// import CourseList from './CourseList';


class AdminContainer extends Component {
	constructor(props){
		super(props)

		this.state = {
			padawans: [],
			courses: []

		}
	}

	componentDidMount(){
		this.getStudents();
		this.getCourses();
	}

	getStudents = async () => {

		try{

			const padawans = await fetch(process.env.REACT_APP_API_URL + '/api/v1/padawans')
			const parsedPadawans = await padawans.json();
			console.log(parsedPadawans);

			this.setState({
				padawans: parsedPadawans.data 
			})

		} catch(err) {
			console.log(err);
		}
		
	}

	getCourses = async () => {

		try {
			const courses = await fetch(process.env.REACT_APP_API_URL + '/api/v1/courses/', {
				credentials: "include"
			});

			const parsedCourses = await courses.json();
					console.log(parsedCourses)

			this.setState({
				courses: parsedCourses.data
			})
			
		}
		catch (err) {
		console.log(err)
		}
		
	};

	render(){
		return(
			<div> 
				<AdminShowAllStudents padawans={this.state.padawans} />
				<AdminShowAllCourses courses={this.state.courses} />
			</div> 
			)
	}


}

export default AdminContainer

