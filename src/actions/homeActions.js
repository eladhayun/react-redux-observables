// @flow
// Action Types
const DATA_REQUESTED = 'DATA_REQUESTED'
const DATA_RECEIVED = 'DATA_RECEIVED'

// Action Creators
const requestData = () => ({
  type: DATA_REQUESTED
})

const dataReceived = (data: any) => ({
  type: DATA_RECEIVED,
  data: data.value
})

export default {
  DATA_REQUESTED,
  DATA_RECEIVED,
  requestData,
  dataReceived
}
