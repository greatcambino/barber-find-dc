import React, { Component } from 'react'
import { Header } from 'semantic-ui-react'
import './SubHeader.css'

class SubHeader extends Component {
  render = () => {
    return (
      <div>
        <Header as={'h1'} className="head">
          BarberHub
        </Header>

        <Header as={'h2'} dividing className="sub-header">
          {'> > barbershop listings + self-barbering tutorials < <'}
        </Header>
      </div>
    )
  }
}
export default SubHeader
