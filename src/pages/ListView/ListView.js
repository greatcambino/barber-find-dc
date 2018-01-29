import React, { Component } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'

class ListView extends Component {
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
        <NavBar />
        <Footer year={this.state.currentYear} />
      </div>
    )
  }
}

export default ListView
