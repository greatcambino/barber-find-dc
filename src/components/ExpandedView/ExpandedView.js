import React, { Component } from 'react'
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'

import API from '../../assets/ExpressURL'
import './ExpandedView.css'
import UpdateForm from '../UpdateForm/UpdateForm'

export default class ExpandedView extends Component {
  state = {
    modalOpen: false
  }

  openEditModal = () => {
    this.props.closeModal()
  }

  openUpdateForm = () => {
    this.setState({
      modalOpen: true
    })
  }

  closeForm = () => {
    this.setState({
      modalOpen: false
    })
  }

  render = () => {
    console.log(this.props)
    return (
      <Modal open={this.props.expandoOpen} dimmer={'blurring'} size="small">
        <Modal.Header>
          {this.props.barber.name}
        </Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Header>
              {this.props.barber.rating}
            </Header>
            <a target="_blank" href="https://goo.gl/maps/nT9dGpLufWR2" />
            <p>
              {this.props.barber.phone}
            </p>
            <p>
              {this.props.barber.website}
            </p>
            <p>
              {this.props.barber.address}
            </p>
            {this.props.barber.reviews.map((item, idx) => {
              return (
                <p key={idx}>
                  {item.text}
                </p>
              )
            })}
          </Modal.Description>
          <Modal.Actions>
            <Button onClick={this.props.closeModal}>Close</Button>
            <Button onClick={this.openUpdateForm}>Close</Button>
          </Modal.Actions>
        </Modal.Content>
        <UpdateForm
          {...this.props}
          modalOpen={this.state.modalOpen}
          closeForm={this.closeForm}
        />
      </Modal>
    )
  }
}
