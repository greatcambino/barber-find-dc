import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const WelcomeDialog = () =>
  <Card>
    <Card.Content>
      <Card.Header>BarberHub</Card.Header>
      <Card.Description>
        Hello! This app lets you browse a listing of barbers in the Washington
        DC area (pulled from Foursquare’s API) and view self-barbering
        techniques from videos we’ve pulled from YouTube. Our group was given
        exactly one week to build out this app, which includes Express, MongoDB,
        React.js, and API integration. Click Play to begin!
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <div>
        <Icon link name='play circle' size='huge' color='red' />
      </div>
    </Card.Content>
  </Card>

export default WelcomeDialog
