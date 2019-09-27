import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import loginReducer from './loginReducer'
import homeReducer from './homeReducer'

export default history =>
  combineReducers({
    router: connectRouter(history),
    loginReducer,
    homeReducer
  })
