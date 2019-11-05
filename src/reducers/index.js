import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import appReducer from './appReducer'

export default history =>
  combineReducers({
    router: connectRouter(history),
    appReducer
  })
