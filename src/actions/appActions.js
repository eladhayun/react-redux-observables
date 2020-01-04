import get from 'lodash/get'

// Action Types
const APP_INIT = 'APP_INIT'
const VERSION_REQUESTED = 'VERSION_REQUESTED'
const VERSION_RECEIVED = 'VERSION_RECEIVED'
const FETCH_REJECTED = 'FETCH_REJECTED'
const LOCATION_CHANGED = '@@router/LOCATION_CHANGE'

// Action Creators
const appInit = () => ({ type: APP_INIT })

const requestVersion = () => ({
  type: VERSION_REQUESTED
})

const versionReceived = ({ version }) => ({
  type: VERSION_RECEIVED,
  version
})

const fetchRejected = error => ({
  type: FETCH_REJECTED,
  status: get(error, 'xhr.status', 500),
  message: get(error, 'xhr.statusText', 'Unknown error')
})

export default {
  APP_INIT,
  VERSION_REQUESTED,
  VERSION_RECEIVED,
  FETCH_REJECTED,
  LOCATION_CHANGED,
  appInit,
  requestVersion,
  versionReceived,
  fetchRejected
}
