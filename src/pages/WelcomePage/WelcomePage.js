import React, { Component } from 'react'
import Footer from '../../components/Footer/Footer'
import './WelcomePage.css'
import ImgCarousel from '../../components/ImgCarousel/ImgCarousel'

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
    return <Footer year={this.state.currentYear} />
  }
}

export default WelcomePage

// <Footer year={this.state.currentYear} />
