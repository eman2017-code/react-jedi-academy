import React from "react";
import { Card, Button } from "semantic-ui-react";
import PadawanDashboard from "../PadawanDashboard";

function EnrollmentOfCourses(props) {
  const courses = props.courses.map(course => {
    return (
      <Card key={course.id}>
        <Card.Content>
          <Card.Header>{course.title}</Card.Header>
          <Card.Description>{course.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button onClick={props.selectedCourses}>Enroll</Button>
        </Card.Content>
      </Card>
    );
  });
  return <Card.Group>{courses}</Card.Group>;
}
export default EnrollmentOfCourses;
