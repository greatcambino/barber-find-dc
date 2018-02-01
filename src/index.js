import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import './index.css'

import AddForm from './components/AddForm/AddForm'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <BrowserRouter>
    <AddForm />
  </BrowserRouter>,
  document.getElementById('root')
)

// registerServiceWorker()
