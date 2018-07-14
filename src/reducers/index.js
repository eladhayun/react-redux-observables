import versionReducer from './versionReducer'
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

export default combineReducers({
  versionReducer,
  router: routerReducer
})
