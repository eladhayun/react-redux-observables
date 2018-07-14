import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import Version from './containers/Version'
import reducer from './reducers'
import epics from './epics'
import createHistory from 'history/createBrowserHistory'
import registerServiceWorker from './utils/registerServiceWorker'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { createEpicMiddleware } from 'redux-observable'
import { Route } from 'react-router'
import {
  ConnectedRouter,
  routerMiddleware as createRouterMiddleware
} from 'react-router-redux'

import './index.css'

const history = createHistory()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const routerMiddleware = createRouterMiddleware(history)
const epicMiddleware = createEpicMiddleware(epics)
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(epicMiddleware, routerMiddleware))
)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App>
        <Route exact path="/" component={Version} />
      </App>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
