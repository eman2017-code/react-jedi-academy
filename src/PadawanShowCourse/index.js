import React from "react";
import { Card } from "semantic-ui-react";

function PadawanShowCourse(props) {
  const padawanCourses = props.padawanCourses.map(padawanCourse => {
    return (
      <Card key={padawanCourse.id}>
        <Card.Content>
          <Card.Header>{padawanCourse.course_id.title}</Card.Header>
          <Card.Header>{padawanCourse.course_id.description}</Card.Header>
        </Card.Content>
        {/* <Card.Content extra>
          <Button>View Course</Button>
        </Card.Content> */}
      </Card>
    );
  });
  return <Card.Group>{padawanCourses}</Card.Group>;
}

export default PadawanShowCourse;
