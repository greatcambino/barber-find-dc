import React, { Component } from 'react'

import { Link, Route, Switch } from 'react-router-dom'

import './App.css'

import WelcomePage from './pages/WelcomePage/WelcomePage'
import ListView from './pages/ListView/ListView'
import About from './pages/About/About'

class App extends Component {
  state = {
    year: ''
  }

  componentDidMount = () => {
    let year = new Date().getFullYear()
    this.setState({
      year: year
    })
  }

  render = () => {
    return (
      <main>
        <Switch>
          <Route
            exact
            path="/"
            render={props => <WelcomePage year={this.state.year} />}
          />
          <Route
            exact
            path="/shops"
            render={props => <ListView year={this.state.year} />}
          />
          <Route
            exact
            path="/videos"
            render={props => <ListView year={this.state.year} />}
          />
          <Route exact path="/about" render={props => <About {...props} />} />
        </Switch>
      </main>
    )
  }
}

export default App
