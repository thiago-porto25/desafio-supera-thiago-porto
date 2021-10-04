import { render } from '@testing-library/react'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(
    <Router>
      <App />
    </Router>,
    div
  )
})
