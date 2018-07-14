import { VERSION_REQUESTED, VERSION_RECEIVED } from '../actions'

const initialState = {
  version: '',
  isLoading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case VERSION_REQUESTED:
      return { ...state, version: '', isLoading: true }
    case VERSION_RECEIVED:
      const version = action.version.value
      return { ...state, version, isLoading: false }
    default:
      return state
  }
}
