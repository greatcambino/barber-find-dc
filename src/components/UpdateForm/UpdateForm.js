import React, { Component } from 'react'
import { Button, Form, Segment, Grid, Modal } from 'semantic-ui-react'
import './UpdateForm.css'
import axios from 'axios'
import API from '../../assets/ExpressURL'

class UpdateForm extends Component {
  state = {
    name: this.props.barber.name,
    address: this.props.barber.address,
    website: this.props.barber.website,
    postalcode: this.props.barber.postalcode,
    phone: this.props.barber.phone,
    city: this.props.barber.city,
    state: this.props.barber.state
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    // e.preventDefault()
    let putAPI = `${API}/${this.props.barber._id}`
    let req = {
      url: putAPI,
      method: 'PUT',
      data: JSON.stringify(this.state)
    }
    axios(req)
    this.props.closePreviousForm()
  }

  render = () => {
    return (
      <Modal
        closeOnDimmerClick={true}
        closeOnDocumentClick={true}
        open={this.props.modalOpen}
      >
        <div className="form-parent">
          <div className="update-form">
            <Grid columns={1} padded>
              <Grid.Column>
                <Segment>
                  <Form>
                    <h4>Add a Barbershop</h4>
                    <Form.Group widths="equal">
                      <Form.Input
                        fluid
                        name="name"
                        label="Name of Barbershop"
                        placeholder={this.props.barber.name}
                        onChange={e => this.handleChange(e)}
                      />
                      <Form.Input
                        fluid
                        name="postalcode"
                        label="Zip Code"
                        placeholder={this.props.barber.postalcode}
                        onChange={e => this.handleChange(e)}
                      />
                    </Form.Group>
                    <Form.Group widths="equal">
                      <Form.Input
                        fluid
                        name="website"
                        label="Website"
                        placeholder={this.props.barber.website}
                        onChange={e => this.handleChange(e)}
                      />
                      <Form.Input
                        fluid
                        name="address"
                        label="Address"
                        placeholder={this.props.barber.address}
                        onChange={e => this.handleChange(e)}
                      />
                    </Form.Group>
                    <Form.Group widths="equal">
                      <Form.Input
                        fluid
                        name="city"
                        label="City"
                        placeholder={this.props.barber.city}
                        onChange={e => this.handleChange(e)}
                      />
                      <Form.Input
                        fluid
                        name="state"
                        label="State"
                        placeholder={this.props.barber.state}
                        onChange={e => this.handleChange(e)}
                      />
                    </Form.Group>
                    <Form.Group widths="equal">
                      <Form.Input
                        fluid
                        name="phone"
                        label="Phone Number"
                        placeholder={this.props.barber.phone}
                        onChange={e => this.handleChange(e)}
                      />
                    </Form.Group>
                    <Button type="button" onClick={this.handleSubmit}>
                      Submit
                    </Button>
                    <Button type="button" onClick={this.props.closeForm}>
                      Close
                    </Button>
                  </Form>
                </Segment>
              </Grid.Column>
            </Grid>
          </div>
        </div>
      </Modal>
    )
  }
}

export default UpdateForm
