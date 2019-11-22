import React, { Component } from 'react';
import AdminShowAllStudents from '../AdminShowAllStudents';
import CourseList from './CourseList';


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

			<AdminShowAllStudents padawans={this.state.padawans} />
			<CourseList />
			
			)
	}


}

export default AdminContainer

