import { lazy, Suspense, useContext } from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import { cartContext } from './context/cartContext'
import { AnimatePresence } from 'framer-motion'

import { Header, Cart, Fallback } from './components'

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

      <Suspense fallback={<Fallback />}>
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

      <AnimatePresence exitBeforeEnter={true}>
        {cartOpen && <Cart />}
      </AnimatePresence>
    </div>
  )
}

export default App
