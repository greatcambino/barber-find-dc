import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import WelcomeDialog from './components/Welcomedialog/Welcomedialog'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<WelcomeDialog />, document.getElementById('root'))
registerServiceWorker()
