import React from 'react'

import ReactDOM from 'react-dom'

import '@trendmicro/react-sidenav/dist/react-sidenav.css'

import 'bootstrap-css-only/css/bootstrap.min.css'

import { Switch, Router, Route } from 'react-router'

import { createHashHistory } from 'history'

import { createStore, applyMiddleware } from 'redux'

import { Provider } from 'react-redux'

import createSagaMiddleware from 'redux-saga'

import { LayoutMenu } from './components/LayoutMenu'

import { Home } from './components/Home'

import DroneReducer from './reducers/DroneReducer'

import DroneSaga from './sagas/DroneSaga'

import MapContainer from './containers/MapContainer'

import ChartContainer from './containers/ChartContainer'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(DroneReducer, applyMiddleware(sagaMiddleware))

const history = createHashHistory()

sagaMiddleware.run(DroneSaga)

const App = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <LayoutMenu>
          <Switch>
            <Route path='/maps' component={MapContainer} />
            <Route path='/charts' component={ChartContainer} />
            <Route path='/' component={Home} />
          </Switch>
        </LayoutMenu>
      </Router>
    </Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
