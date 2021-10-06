import { lazy, Suspense } from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'

import { Header } from './components'

import { CartContextProvider } from './context/cartContext'

import * as ROUTES from './constants/routes'
const Home = lazy(() => import('./pages/home'))
const Shop = lazy(() => import('./pages/shop'))
const Product = lazy(() => import('./pages/product'))

function App() {
  const { pathname } = useLocation()

  return (
    <div className={`${pathname === '/' ? 'with-background' : ''}`}>
      <CartContextProvider>
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
      </CartContextProvider>
    </div>
  )
}

export default App
