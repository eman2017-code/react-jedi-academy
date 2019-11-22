import React, { Component } from "react";
import { List } from "semantic-ui-react";

function AdminShowAllStudents(props){

	console.log("this is props in <AdminShowAllStudents/> >>> ", props)

	const padawans = props.padawans.map((padawan) => {
		return (
			 
			<List.Item key={padawan.id}> {padawan.full_name} </List.Item>
		)
	})

	return(

		<List bulleted> { padawans } </List>

	)
}

export default AdminShowAllStudents 