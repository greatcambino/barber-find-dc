import React, { Component } from 'react'
import { Modal, Icon } from 'semantic-ui-react'

export default class AboutModal extends Component {
  render = () => {
    return (
      <Modal open={true} dimmer={false}>
        <Modal.Header className="header">
          <h2>About BarberHub</h2>
        </Modal.Header>
        <Modal.Content className="description">
          <p>
            Written as a group with Terrence Campbell, Chris Tran, and Zach
            Bauer. This app will, in the future, allow people to search for and
            favorite their preferred barbers, allow for writing detailed
            reviews, and leave feedback for specific barbers. We hope you enjoy
            our project.
          </p>
          <br />
          <h2>
            With <Icon name="heart" color="red" />
          </h2>
        </Modal.Content>
      </Modal>
    )
  }
}
