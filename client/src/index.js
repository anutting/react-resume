// import dependencies we'll need for this file
import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'

// import our react app
import App from './App'

// reference the mount point in our index.html
const mountPoint = document.getElementById('root')

// Tell react to start the application
render(
  <AppContainer>
    <App/>
  </AppContainer>,
  mountPoint
)

// Setup automatic refreshing when we change a file
if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default
    render(
      <AppContainer>
        <NextApp/>
      </AppContainer>,
      mountPoint
    )
  })
}
