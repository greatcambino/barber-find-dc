import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router
} from 'react-router-dom'

import './index.css'

import WelcomePage from './pages/WelcomePage/WelcomePage'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<WelcomePage />, document.getElementById('root'))

registerServiceWorker()
