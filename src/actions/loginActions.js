// @flow
// Action Types
const API_TOKEN_STORED = 'API_TOKEN_STORED'
const USERNAME_CHANGED = 'USERNAME_CHANGED'
const PASSWORD_CHANGED = 'PASSWORD_CHANGED'
const VERSION_REQUESTED = 'VERSION_REQUESTED'
const VERSION_RECEIVED = 'VERSION_RECEIVED'
const LOGIN_REQUESTED = 'LOGIN_REQUESTED'
const LOGIN_RECEIVED = 'LOGIN_RECEIVED'

// Action Creators
const apiTokenStored = (apiToken: string) => ({
  type: API_TOKEN_STORED,
  apiToken
})

const changeUsername = (username: string) => ({
  type: USERNAME_CHANGED,
  username
})

const changePassword = (password: string) => ({
  type: PASSWORD_CHANGED,
  password
})

const requestVersion = () => ({
  type: VERSION_REQUESTED
})

const versionReceived = (version: {value: string}) => ({
  type: VERSION_RECEIVED,
  version: version.value
})

const requestLogin = (username: string, password: string) => ({
  type: LOGIN_REQUESTED,
  username,
  password
})

const loginReceived = (apiToken: string) => ({
  type: LOGIN_RECEIVED,
  apiToken
})

export default {
  API_TOKEN_STORED,
  USERNAME_CHANGED,
  PASSWORD_CHANGED,
  VERSION_REQUESTED,
  VERSION_RECEIVED,
  LOGIN_REQUESTED,
  LOGIN_RECEIVED,
  apiTokenStored,
  changeUsername,
  changePassword,
  requestVersion,
  versionReceived,
  requestLogin,
  loginReceived
}
