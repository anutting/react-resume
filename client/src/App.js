import React from 'react'
import { HashRouter } from 'react-router-dom'
import Router from './Router'

import '../styles/index.scss'

export default class App extends React.Component {
  render () {
    return (
      <HashRouter>
        <Router/>
      </HashRouter>
    )
  }
}
