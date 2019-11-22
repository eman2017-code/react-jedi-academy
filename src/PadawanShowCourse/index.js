import React, { Component } from "react";
import { Modal, Button, Card, Image, Icon, Header } from "semantic-ui-react";

function PadawanShowCourse() {
  return (
    <Modal trigger={<Button>Scrolling Content Modal</Button>}>
      <Modal.Header>Profile Picture</Modal.Header>
      <Modal.Content image scrolling>
        <Image
          size="medium"
          src="https://react.semantic-ui.com/images/wireframe/image.png"
          wrapped
        />

        <Modal.Description>
          <Header>Modal Header</Header>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
            doloribus sunt amet quasi veniam maiores, cumque saepe, repellat
            eligendi magnam laboriosam fugit dicta consequuntur aspernatur ex
            ipsam odio minus quae. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Laudantium, doloribus sunt amet quasi veniam
            maiores, cumque saepe, repellat eligendi magnam laboriosam fugit
            dicta consequuntur aspernatur ex ipsam odio minus quae. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Laudantium, doloribus
            sunt amet quasi veniam maiores, cumque saepe, repellat eligendi
            magnam laboriosam fugit dicta consequuntur aspernatur ex ipsam odio
            minus quae. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Laudantium, doloribus sunt amet quasi veniam maiores, cumque saepe,
            repellat eligendi magnam laboriosam fugit dicta consequuntur
            aspernatur ex ipsam odio minus quae. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Laudantium, doloribus sunt amet quasi
            veniam maiores, cumque saepe, repellat eligendi magnam laboriosam
            fugit dicta consequuntur aspernatur ex ipsam odio minus quae.
          </p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button primary>
          Proceed <Icon name="chevron right" />
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default PadawanShowCourse;
