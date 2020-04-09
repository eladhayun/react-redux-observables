import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import appReducer, { loadingReducer } from './appReducer'
import tabOneReducer from './tabOneReducer'

export default history =>
  combineReducers({
    router: connectRouter(history),
    appReducer,
    loadingReducer,
    tabOneReducer
  })
