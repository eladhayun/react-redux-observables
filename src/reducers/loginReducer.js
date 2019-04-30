import Actions from '../actions/loginActions'
import AppActions from '../actions/appActions'

const initialState = {
  version: '',
  username: '',
  password: '',
  apiToken: '',
  loginFailed: false,
  loginSuccessful: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case AppActions.LOCATION_CHANGED:
      return { ...initialState }
    case AppActions.FETCH_REJECTED:
      return { ...state, loginFailed: true }
    case Actions.VERSION_RECEIVED:
      return { ...state, version: action.version }
    case Actions.USERNAME_CHANGED:
      return { ...state, username: action.username }
    case Actions.PASSWORD_CHANGED:
      return { ...state, password: action.password }
    case Actions.LOGIN_RECEIVED:
      return { ...state, apiToken: action.apiToken, loginSuccessful: true }
    default:
      return state
  }
}
