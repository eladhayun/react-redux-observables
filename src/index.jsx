// @flow

import 'typeface-roboto'
import './styles/index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import { createBrowserHistory } from 'history'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { createEpicMiddleware } from 'redux-observable'
import { Route, Switch } from 'react-router'
import {
  ConnectedRouter,
  routerMiddleware as createRouterMiddleware
} from 'connected-react-router'
import { ROUTES } from './consts'
import rootEpic from './epics'
import rootReducer from './reducers'
import App from './components/App'
import theme from './styles/theme'

const root = document.getElementById('root')
const history = createBrowserHistory()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const routerMiddleware = createRouterMiddleware(history)
const epicMiddleware = createEpicMiddleware()
const store = createStore(
  rootReducer(history),
  composeEnhancers(applyMiddleware(epicMiddleware, routerMiddleware))
)
epicMiddleware.run(rootEpic)

if (root !== null) {
  ReactDOM.render(
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <ConnectedRouter history={history}>
          <CssBaseline />
          <Switch>
            <Route path={ROUTES.ROOT} component={App} />
          </Switch>
        </ConnectedRouter>
      </MuiThemeProvider>
    </Provider>,
    root
  )
}
