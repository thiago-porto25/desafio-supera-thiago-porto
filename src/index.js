import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import { CartContextProvider } from './context/cartContext'

import { globalStyle as GlobalStyle } from './globalStyle'
import 'normalize.css/normalize.css'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <CartContextProvider>
        <GlobalStyle />
        <App />
      </CartContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
