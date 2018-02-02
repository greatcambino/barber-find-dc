// import components
import React, { Component } from 'react'
import Footer from '../../components/Footer/Footer'
import './WelcomePage.css'
import WelcomeDialog from '../../components/WelcomeDialog/WelcomeDialog'

// create component
class WelcomePage extends Component {
  render = () => {
    return (
      <div>
        {/* render components */}
        <WelcomeDialog />
        <Footer year={this.props.year} />
      </div>
    )
  }
}

// export component
export default WelcomePage

// <Footer year={this.state.currentYear} />
