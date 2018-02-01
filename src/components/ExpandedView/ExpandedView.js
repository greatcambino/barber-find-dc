import React, { Component } from 'react'
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'

import API from '../../assets/ExpressURL'
import './ExpandedView.css'
import chalk from 'chalk'

class ExpandedView extends Component {
  render = () => {
    return (
      <Modal open={this.props.modalOpen} dimmer={false} size="small">
        <Modal.Header>
          {this.props.name}
        </Modal.Header>
        <Modal.Content image>
          <iframe src="https://www.google.com/maps/embed/v1/place
          &q=Washington+DC
          &key=AIzaSyAe_2Yi4B4N3WH9Wj3HA2XnLugNyhMLSpg" />
          <Modal.Description>
            <Header>
              {' '}{this.props.topRating}{' '}
            </Header>
            <p>
              {this.props.phone}
            </p>
            <p>
              {this.props.website}
            </p>
            <p>
              {this.props.location}
            </p>
          </Modal.Description>
          <Modal.Meta>
            {this.props.reviews}
          </Modal.Meta>
        </Modal.Content>
      </Modal>
    )
  }
}

export default ExpandedView
