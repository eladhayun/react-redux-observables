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
import { Route, Redirect } from 'react-router'
import { ConnectedRouter, routerMiddleware as createRouterMiddleware } from 'connected-react-router'
import ROUTES from './constants/routes'
import rootEpic from './epics'
import rootReducer from './reducers'
import Home from './containers/Home'
import Login from './containers/Login'
import App from './components/App'
import theme from './styles/theme'

const root = document.getElementById('root')
const history = createBrowserHistory()
// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const routerMiddleware = createRouterMiddleware(history)
const epicMiddleware = createEpicMiddleware()
const store = createStore(
  rootReducer(history),
  composeEnhancers(applyMiddleware(epicMiddleware, routerMiddleware)),
)
epicMiddleware.run(rootEpic)

if (root !== null) {
  ReactDOM.render(
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <ConnectedRouter history={history}>
          <React.Fragment>
            <CssBaseline />
            <App>
              <Route exact path={ROUTES.ROOT} render={() => <Redirect to={ROUTES.HOME} />} />
              <Route exact path={ROUTES.LOGIN} component={Login} />
              <Route path={ROUTES.HOME} component={Home} />
            </App>
          </React.Fragment>
        </ConnectedRouter>
      </MuiThemeProvider>
    </Provider>,
    root,
  )
}
