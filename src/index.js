import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import WelcomePage from './pages/WelcomePage/WelcomePage'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<WelcomePage />, document.getElementById('root'))
registerServiceWorker()
