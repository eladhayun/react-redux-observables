import * as Actions from '../actions'

const initialState = {
  version: '',
  isLoading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case Actions.VERSION_REQUESTED:
      return { ...state, version: '', isLoading: true }
    case Actions.VERSION_RECEIVED:
      return { ...state, version: action.version, isLoading: false }
    default:
      return state
  }
}
