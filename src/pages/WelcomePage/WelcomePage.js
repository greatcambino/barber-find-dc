import React, { Component } from 'react'
import Footer from '../../components/Footer/Footer'
import './WelcomePage.css'
import ImgCarousel from '../../components/ImgCarousel/ImgCarousel'
import WelcomeDialog from '../../components/WelcomeDialog/WelcomeDialog'

class WelcomePage extends Component {
  state = {
    currentYear: ''
  }

  componentDidMount = () => {
    let year = new Date().getFullYear()
    this.setState({
      currentYear: year
    })
  }

  render = () => {
    return (
      <div>
        <WelcomeDialog />
        <Footer year={this.state.currentYear} />
      </div>
    )
  }
}

export default WelcomePage

// <Footer year={this.state.currentYear} />
