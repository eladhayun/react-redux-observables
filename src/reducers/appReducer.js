import Actions from '../actions'
import { endsWith } from 'lodash'

const initialState = {}

export const loadingReducer = (state = { withLoader: false }, action) => {
  switch (true) {
    case action.type === Actions.FETCH_REJECTED:
      return {
        ...state,
        withLoader: false
      }
    case endsWith(action.type, '_REQUESTED'):
      return {
        ...state,
        withLoader: action.type
      }
    case endsWith(action.type, '_RECEIVED'):
      return {
        ...state,
        withLoader: action.type
      }
    default:
      return state
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case Actions.FETCH_REJECTED:
      return { ...state }
    default:
      return state
  }
}
