import React, { Component } from 'react'
import { Button, Modal, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import './WelcomeDialog.css'

export default class WelcomeDialog extends Component {
  render = () => {
    return (
      <Modal open={true} dimmer={false} size="small">
        <Modal.Header className="header">BarberHub</Modal.Header>
        <Modal.Content className="description">
          <p>
            Whether you’re looking for your next barber or looking for better
            tips on cutting your own hair, this app is a one-stop shop.
            BarberHub lists highly rated barbershops in the Washington DC area
            along with a round-up of tutorials in self-barbering. This app
            incorporates MongoDB, Express, React.js, and API integration. Click
            one of the icons below to begin!
          </p>
        </Modal.Content>
        <Modal.Actions className="button-container">
          <Button as={Link} to="/shops" className="button-icons">
            <Icon name="building outline" size="large" />
            Shops
          </Button>
          <p>or</p>
          <Button as={Link} to="/videos" className="button-icons">
            <Icon name="play" size="large" />
            Tutorials
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}
