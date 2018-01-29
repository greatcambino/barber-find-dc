import React, { Component } from 'react'
import { Button, Modal, Icon } from 'semantic-ui-react'
import './Welcomedialog.css'


export default class WelcomeDialog extends Component {
    render = () => {
        return (
             <Modal open={true} dimmer={false} size='small'> 
                <Modal.Header className='header'>BarberHub</Modal.Header>
                <Modal.Content className='description'>
                    <p>Hello! Are you looking for a spot to get your next haircut? This app lets you browse a listing of barbershops in the Washington DC area (pulled from Foursquare’s API). Or, if you prefer to cut your own hair, check out our listing of self-barbering videos (pulled from YouTube). Our group was given exactly one week to build out this app, which incorporates MongoDB, Express, React.js, Node, and API integration. Click one of the icons below to begin!</p>
                </Modal.Content>
                <Modal.Actions className='button-container'>
                    <Button className='button-icons'>
                        <Icon name='building outline' size='large' />
                        Shops
                    </Button >
                    <p>or</p>
                    <Button className='button-icons'>
                        <Icon name='play outline' size='large' />
                        Videos
                    </Button>
                </Modal.Actions>
            </Modal>
        )
    }

}
