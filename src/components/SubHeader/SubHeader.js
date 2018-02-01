import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
import './SubHeader.css'

class SubHeader extends Component {
  render = () => {
    return (
      <div className="page-container">
        <div className="card-container">
          <Card fluid>
            <Card.Header as="h1" className="head">
              BarberHub
            </Card.Header>
            <Card.Content as="h2" className="sub-head">
              {'> > barbershop listings + self-barbering tutorials < <'}
            </Card.Content>
          </Card>
        </div>
      </div>
    )
  }
}

export default SubHeader
