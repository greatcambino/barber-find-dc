import React, { Component } from 'react'
import Footer from '../../components/Footer/Footer'
import './WelcomePage.css'
import WelcomeDialog from '../../components/WelcomeDialog/WelcomeDialog'

class WelcomePage extends Component {
  componentDidMount = () => {
    console.log(this.props.location)
  }
  render = () => {
    return (
      <div>
        <WelcomeDialog />
        <Footer year={this.props.year} />
      </div>
    )
  }
}

export default WelcomePage

// <Footer year={this.state.currentYear} />
