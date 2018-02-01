import React, {Component} from 'react'
import { Button, Header, Icon, Image, Modal, } from 'semantic-ui-react'
import axios from 'axios'

import {API} from '../Urls/Urls'
import './ExpandedView.css'
import chalk from 'chalk'

class ExpandedView extends Component {

    state= {
        shopName: "shop1",
        address: "123 lane",
        hours: "9a - 5p",
        phoneNumber: "123.456.7899",
        website: "barbershop.com",
        reviews: [
            'best haircut of my entire life. 10/10',
            'very good haircut',
            'my haircut was just okay'
        ],
        barbers: {}

    }

    componentDidMount () {
      axios.get('http://localhost:9000')
      .then((res) => {
        this.setState ({
          barber: res.data
        })
      })
      .catch((err) => {
        console.log('error')
        console.log(err)
      })
    }
    render = () => {
        return (
        <Modal open="true" dimmer={false} size= 'small' >
        <h1>{this.state.shopName}</h1>
        <Modal.Content image>
          <Image wrapped size='medium' src='/assets/images/wireframe/image.png' />
          <Modal.Description>
            <h3>Address: {this.state.address}</h3>
            <h3>Hours: {this.state.hours}</h3>
            <h3>Phone number: {this.state.phoneNumber}</h3>
            <h3>Website: {this.state.website}</h3>
            <h3>Reviews: {this.state.reviews.map((item, index) => {
                return (
                    <div key={index}> {item}</div>
                )
            })}</h3>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button className="thumbButton">
             <Icon name= 'thumbs outline up' size= 'big' />
          </Button>
        </Modal.Actions>
        </Modal>
        )

    }
}

export default ExpandedView
