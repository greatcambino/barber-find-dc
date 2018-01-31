import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'

import './index.css'

import VideoView from './pages/VideoView/VideoView'
import WelcomePage from './pages/WelcomePage/WelcomePage'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <Router>
    <VideoView />
  </Router>,
  document.getElementById('root')
)

registerServiceWorker()
