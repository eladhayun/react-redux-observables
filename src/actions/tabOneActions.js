// Action Types
const TAB_ONE_DATA_REQUESTED = 'TAB_ONE_DATA_REQUESTED'
const TAB_ONE_DATA_RECEIVED = 'TAB_ONE_DATA_RECEIVED'

// Action Creators
const requestTabOneData = () => ({
  type: TAB_ONE_DATA_REQUESTED
})

const tabOneDataReceived = payload => ({
  type: TAB_ONE_DATA_RECEIVED,
  payload
})

export default {
  TAB_ONE_DATA_REQUESTED,
  TAB_ONE_DATA_RECEIVED,
  requestTabOneData,
  tabOneDataReceived
}
