import React from "react";
import { Card, Button } from "semantic-ui-react";

function AdminShowAllCourses(props) {
  const courses = props.courses.map(course => {
    return (
      <Card key={course.id}>
        <Card.Content>
          <Card.Header>COURSE {course.id}</Card.Header>
          <Card.Header>{course.title}</Card.Header>
          <Card.Description>{course.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button onClick={() => props.deleteCourse(course.id)}>
            Delete Course
          </Button>
          <Button onClick={() => props.editCourse(course.id)}>
            Edit Course
          </Button>
        </Card.Content>
      </Card>
    );
  });
  return <Card.Group>{courses}</Card.Group>;
}
export default AdminShowAllCourses;
