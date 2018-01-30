import React, { Component } from 'react'

import { Link, Route, Switch } from 'react-router-dom'

import './App.css'

import WelcomePage from './pages/WelcomePage/WelcomePage'
import ListView from './pages/ListView/ListView'
import About from './pages/About/About'

class App extends Component {
  render () {
    return (
      <main>
        <Switch>
          <Route path='/' component={WelcomePage} />
          <Route path='/shops' component={ListView} />
          <Route path='/about' component={About} />
        </Switch>
      </main>
    )
  }
}

export default App
