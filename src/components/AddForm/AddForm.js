import React, { Component } from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'
import './AddForm.css'
import axios from 'axios'
import API from '../../assets/ExpressURL'

class AddForm extends Component {
  state = {
    name: '',
    postalcode: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    if (e) {
      e.preventDefault()
    }
    console.log(this.state)
    console.log(JSON.stringify(this.state))
    axios.post(API, JSON.stringify(this.state))
  }

  render = () => {
    return (
      <Segment className="form-segment" inverted color="red">
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
              name="postalcode"
              label="Zip Code"
              placeholder="Zip Code (Washington DC only)"
              onChange={e => this.handleChange(e)}
            />
          </Form.Group>
          <Button onClick={this.handleSubmit}>Submit</Button>
        </Form>
      </Segment>
    )
  }
}

export default AddForm
