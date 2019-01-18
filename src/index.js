import 'babel-polyfill'
import 'typeface-roboto'
import './styles/index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from './styles/theme'
import App from './components/App'
import Version from './containers/Version'
import rootReducer from './reducers'
import rootEpic from './epics'
import { createBrowserHistory } from 'history'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { createEpicMiddleware } from 'redux-observable'
import { Route } from 'react-router'
import {
  ConnectedRouter,
  routerMiddleware as createRouterMiddleware
} from 'connected-react-router'

const history = createBrowserHistory()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const routerMiddleware = createRouterMiddleware(history)
const epicMiddleware = createEpicMiddleware()
const store = createStore(
  rootReducer(history),
  composeEnhancers(applyMiddleware(epicMiddleware, routerMiddleware))
)
epicMiddleware.run(rootEpic)

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <ConnectedRouter history={history}>
        <React.Fragment>
          <CssBaseline />
          <App>
            <Route exact path="/" component={Version} />
          </App>
        </React.Fragment>
      </ConnectedRouter>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
)
