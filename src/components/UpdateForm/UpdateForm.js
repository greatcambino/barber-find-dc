import React, { Component } from 'react'
import { Button, Form, Segment, Grid, Modal } from 'semantic-ui-react'
import GridColumn from 'semantic-ui-react/dist/commonjs/collections/Grid/GridColumn'
import './UpdateForm.css'
import axios from 'axios'
import API from '../../assets/ExpressURL'

class UpdateForm extends Component {
  state = {
    name: this.props.name,
    address: this.props.address,
    website: this.props.website,
    postalCode: this.props.postalCode,
    hours: this.props.hours,
    phone: this.props.phone,
    city: this.props.city,
    state: this.props.state
  }

  handleChange(e) {
    console.log(this.state)
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.post(API, JSON.stringify(this.state)).catch(err =>
      console.log(err).then(res => {
        this.props.history.push('/shops') // don't forget to update this path
      })
    )
  }

  render = () => {
    return (
      <Modal>
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
                        placeholder="Name of Barbershop"
                        onChange={e => this.handleChange(e)}
                      />
                      <Form.Input
                        fluid
                        name="postalCode"
                        label="Zip Code"
                        placeholder="Zip Code (Washington DC only)"
                        onChange={e => this.handleChange(e)}
                      />
                    </Form.Group>
                    <Form.Group widths="equal">
                      <Form.Input
                        fluid
                        name="website"
                        label="Website"
                        placeholder="Website"
                        onChange={e => this.handleChange(e)}
                      />
                      <Form.Input
                        fluid
                        name="address"
                        label="Address"
                        placeholder="Address"
                        onChange={e => this.handleChange(e)}
                      />
                    </Form.Group>
                    <Form.Group widths="equal">
                      <Form.Input
                        fluid
                        name="city"
                        label="City"
                        placeholder="City"
                        onChange={e => this.handleChange(e)}
                      />
                      <Form.Input
                        fluid
                        name="state"
                        label="State"
                        placeholder="State"
                        onChange={e => this.handleChange(e)}
                      />
                    </Form.Group>
                    <Form.Group widths="equal">
                      <Form.Input
                        fluid
                        name="hours"
                        label="Hours"
                        placeholder="Hours"
                        onChange={e => this.handleChange(e)}
                      />
                      <Form.Input
                        fluid
                        name="phone"
                        label="Phone Number"
                        placeholder="Phone Number"
                        onChange={e => this.handleChange(e)}
                      />
                    </Form.Group>
                    <Button onClick={this.handleSubmit}>Submit</Button>
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
