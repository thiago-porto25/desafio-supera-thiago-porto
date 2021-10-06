import { lazy, Suspense, useContext } from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import { cartContext } from './context/cartContext'

import { Header, Cart } from './components'

import * as ROUTES from './constants/routes'
const Home = lazy(() => import('./pages/home'))
const Shop = lazy(() => import('./pages/shop'))
const Product = lazy(() => import('./pages/product'))

function App() {
  const { cartOpen } = useContext(cartContext)
  const { pathname } = useLocation()

  return (
    <div className={`${pathname === '/' ? 'with-background' : ''}`}>
      <Header />

      <Suspense fallback={<div>loading...</div>}>
        <Switch>
          <Route exact path={ROUTES.HOME}>
            <Home />
          </Route>

          <Route path={ROUTES.SHOP}>
            <Shop />
          </Route>

          <Route path={ROUTES.PRODUCT}>
            <Product />
          </Route>
        </Switch>
      </Suspense>

      {cartOpen && <Cart />}
    </div>
  )
}

export default App
