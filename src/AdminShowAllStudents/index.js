import React, { Component } from "react";
// import { Form } from "semantic-ui-react";

function AdminShowAllStudents(props){

	const padawans = props.padawans.map((padawan) => {
		return (

			<li key={padawan.id}> {padawan.full_name} </li>
		)
	})

	return(

		<ul> { padawans } </ul>

	)
}

export default AdminShowAllStudents 