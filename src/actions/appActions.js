// @flow
import get from 'lodash/get'

// Action Types
const FETCH_REJECTED = 'FETCH_REJECTED'
const LOCATION_CHANGED = '@@router/LOCATION_CHANGE'
const LOGOUT = 'LOGOUT'

// Action Creators
const fetchRejected = (error: any) => ({
  type: FETCH_REJECTED,
  status: get(error, 'xhr.status', 500),
  message: get(error, 'xhr.statusText', 'Unknown error')
})

const logout = () => ({
  type: LOGOUT
})

export default {
  FETCH_REJECTED,
  LOCATION_CHANGED,
  LOGOUT,
  fetchRejected,
  logout
}
