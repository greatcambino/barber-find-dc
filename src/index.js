// import dependencies
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createHistory, useBasename } from 'history'

// import stylesheet
import './index.css'

// import component
import App from './App'

const browserHistory = useBasename(createHistory)({
  basename: '/barber-find-dc'
})
// render
ReactDOM.render(
  <BrowserRouter history={browserHistory}>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
