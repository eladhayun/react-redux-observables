import Actions from '../actions/homeActions'

const initialState = {
  data: '',
  isLoading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case Actions.DATA_REQUESTED:
      return { ...state, version: '', isLoading: true }
    case Actions.DATA_RECEIVED:
      return { ...state, data: action.data, isLoading: false }
    default:
      return state
  }
}
