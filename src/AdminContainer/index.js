import React, { Component } from 'react';
import AdminShowAllStudents from '../AdminShowAllStudents';


class AdminContainer extends Component {
	constructor(props){
		super(props)

		this.state = {
			padawans: []

		}
	}

	componentDidMount(){
		this.getStudents();
		this.getCourses();
	}
	getStudents = async () => {

		try{

			const padawans = await fetch(process.env.REACT_APP_API_URL + '/api/v1/courses')
			const parsedPadawans = wait padawans.json();
			console.log(parsedPadawans);

			this.setState({
				padawans: parsedPadawans.data 
			})

		} catch(err) {
			console.log(err);
		}
		
	}

	render(){
		return(

			<AdminShowAllStudents padawans={this.state.padawans} />
			
			)
	}


}

export default AdminContainer

