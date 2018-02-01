import React, { Component } from 'react'
import { Header, Card } from 'semantic-ui-react'
import './SubHeader.css'

class SubHeader extends Component {
  render = () => {
    return (
      <div className="card-container">
        <div className="sub-header">
          <Card fluid>
            <Card.Content>
              <Header as={'h1'} className="head">
                BarberHub
              </Header>

              <Header as={'h2'} dividing className="sub-header">
                {'> > barbershop listings + self-barbering tutorials < <'}
              </Header>
            </Card.Content>
          </Card>
        </div>
      </div>
    )
  }
}
export default SubHeader
