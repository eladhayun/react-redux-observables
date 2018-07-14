// Action Types
export const VERSION_REQUESTED = 'VERSION_REQUESTED'
export const VERSION_RECEIVED = 'VERSION_RECEIVED'

// Action Creators
export const requestVersion = () => ({
  type: VERSION_REQUESTED
})

export const versionReceived = version => ({
  type: VERSION_RECEIVED,
  version
})
