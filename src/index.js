import React from 'react'
import ReactDOM from 'react-dom'
import App from '@src/App'
import { BrowserRouter as Router } from 'react-router-dom'

import { globalStyle as GlobalStyle } from '@src/globalStyle'
import 'normalize.css/normalize.css'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
