// @flow
// Action Types
export const VERSION_REQUESTED = 'VERSION_REQUESTED'
export const VERSION_RECEIVED = 'VERSION_RECEIVED'

// Action Creators
export const requestVersion = () => ({
  type: VERSION_REQUESTED
})

export const versionReceived = (payload: { value: string }) => ({
  type: VERSION_RECEIVED,
  version: payload.value
})
