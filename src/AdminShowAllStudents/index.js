import React from "react";
import { Card } from "semantic-ui-react";

function AdminShowAllStudents(props) {
  const padawans = props.padawans.map(padawan => {
    return (
      <Card key={padawan.id}>
        <Card.Content>
          <Card.Header> {padawan.full_name} </Card.Header>
        </Card.Content>
      </Card>
    );
  });

  return <Card.Group> {padawans} </Card.Group>;
}

export default AdminShowAllStudents;
