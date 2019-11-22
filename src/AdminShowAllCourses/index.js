import React from 'react';
import { Card, Button } from 'semantic-ui-react';

function AdminShowAllCourses(props){
  const courses = props.courses.map((course) => {
    return (
        <Card key={course.id}>
          <Card.Content>
          	<Card.Header>Course {course.title}</Card.Header>
            <Card.Header>{course.title}</Card.Header>
          </Card.Content>
          <Card.Content extra>
            <Button>Delete Course</Button>
            <Button>Edit Course</Button>
          </Card.Content>
        </Card>
        )
  })
  return (
      <Card.Group>
        { courses }
      </Card.Group>
    )
}
export default AdminShowAllCourses