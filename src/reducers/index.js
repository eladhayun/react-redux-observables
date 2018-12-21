import versionReducer from './versionReducer'
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

export default history =>
  combineReducers({
    router: connectRouter(history),
    versionReducer
  })
