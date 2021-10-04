import { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import * as ROUTES from '@src/constants/routes'

const Home = lazy(() => import('@pages/home'))
const Shop = lazy(() => import('@pages/shop'))
const Product = lazy(() => import('@pages/product'))

function App() {
  return (
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
  )
}

export default App
