import React, { Component } from 'react'
import Footer from '../../components/Footer/Footer'

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
