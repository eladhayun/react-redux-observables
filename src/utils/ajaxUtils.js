import { ajax } from 'rxjs/ajax'
import { getApiToken } from './authUtils'
import { pickBy, identity, memoize } from 'lodash'

const defaultHeaders = {
  contentType: {
    applicationJson: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }
}

const defaultAuthHeaders = memoize(() => {
  return pickBy(
    {
      Authorization: getApiToken()
    },
    identity
  )
})

export const getJSON = (url, headers = {}) => {
  return ajax.getJSON(url, {
    ...defaultAuthHeaders(),
    ...headers
  })
}

export const postJSON = (url, body, headers = {}) => {
  return ajax.post(url, JSON.stringify(body), {
    ...defaultHeaders.contentType.applicationJson,
    ...defaultAuthHeaders(),
    ...headers
  })
}

export const remove = (url, headers = {}) => {
  return ajax.delete(url, {
    ...defaultAuthHeaders(),
    ...headers
  })
}
