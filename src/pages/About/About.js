// import components
import React, { Component } from 'react'
import './About.css'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import AboutModal from '../../components/AboutModal/AboutModal'

// create component
class About extends Component {
  render () {
    return (
      <div className='About'>
        <NavBar path={this.props.location.pathname} />
        <AboutModal />
        <Footer year={this.props.year} />}
      </div>
    )
  }
}

export default About
