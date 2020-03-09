// Action Types
const FETCH_REJECTED = 'FETCH_REJECTED'
const LOCATION_CHANGED = '@@router/LOCATION_CHANGE'

// Action Creators
const fetchRejected = error => ({
  type: FETCH_REJECTED,
  status: error?.xhr?.status || 500,
  message: error?.xhr?.statusText || 'Unknown error'
})

export default {
  FETCH_REJECTED,
  LOCATION_CHANGED,
  fetchRejected
}
