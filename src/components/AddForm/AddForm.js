import React, { Component } from 'react'
import { Button, Form, Segment, Grid } from 'semantic-ui-react'
import GridColumn from 'semantic-ui-react/dist/commonjs/collections/Grid/GridColumn';
import './AddForm.css'
// import axios from 'axios'
// import {API} from 


class AddForm extends Component {
    constructor (props) {
        super(props) 
        this.state = {
            name: '',
            postalCode:''
        }
    }


    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        // axios.post(API, this.state)
        .catch(err => console.log(err)
        .then(res => {
            this.setState({...res.data})
            this.props.history.push('/')    // don't forget to update this path
        })
    )
    }

    render = () => {

        return (
           <div className="form-parent">
           <div className='add-form'>
            <Grid columns={1} padded >
            <Grid.Column>
                <Segment>
                    <Form >
                        <h4>Add a Barbershop</h4>
                        <Form.Group widths='equal'>
                            <Form.Input fluid label='Name of Barbershop' placeholder='Name of Barbershop' onChange={(e) => this.handleChange(e)} />
                            <Form.Input fluid label='Zip Code' placeholder='Zip Code (Washington DC only)' onChange={(e) => this.handleChange(e)} />
                        </Form.Group>
                        <Button type='submit'>Submit </Button>
                    </Form>
                </Segment>
                </Grid.Column>
            </Grid>
            </div>
            </div>
        )
    }
}

export default AddForm


