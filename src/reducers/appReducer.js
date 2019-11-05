import Actions from '../actions'

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case Actions.FETCH_REJECTED:
      return { ...state }
    default:
      return state
  }
}
