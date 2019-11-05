// @flow

import get from 'lodash/get'
import keyMirror from 'keymirror'

// Action Types
const Actions = {
  LOCATION_CHANGED: '@@router/LOCATION_CHANGE',
  ...keyMirror({
    FETCH_REJECTED: null
  })
}

// Action Creators
const fetchRejected = (error: any) => ({
  type: Actions.FETCH_REJECTED,
  status: get(error, 'xhr.status', 500),
  message: get(error, 'xhr.statusText', 'Unknown error')
})

export default {
  ...Actions,
  fetchRejected
}
