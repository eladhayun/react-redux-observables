import Actions from '../actions'

const initialState = {
  isLoading: true,
  version: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case Actions.VERSION_REQUESTED:
      return {
        isLoading: true
      }
    case Actions.VERSION_RECEIVED:
      return {
        ...state,
        isLoading: false,
        version: action.version
      }
    case Actions.FETCH_REJECTED:
      return { ...state }
    default:
      return state
  }
}
