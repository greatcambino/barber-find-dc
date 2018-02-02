import React, { Component } from 'react'
import { Button, Form, Segment, Grid, Modal, Header } from 'semantic-ui-react'
import './AddForm.css'
import axios from 'axios'
import API from '../../assets/ExpressURL'


class AddForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      postalCode: ''
    }
  }


  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.post(API, JSON.stringify(this.state)).catch(err =>
      console.log(err)
    )
  }


  render = () => {
    return (
      <Segment className="form-segment" inverted color='red'>
        <Form>
          <h4>Add a Barbershop</h4>
          <Form.Group widths="equal" >
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
          <Button onClick={this.handleSubmit}>Submit</Button>
        </Form>
      </Segment>

    )
  }
}

export default AddForm
