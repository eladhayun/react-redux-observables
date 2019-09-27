import { from } from 'rxjs'
import { ajax } from 'rxjs/ajax'
import { mergeMap, take } from 'rxjs/operators'
import localStorage from './localStorage'

const defaultHeaders = {
  contentType: {
    applicationJson: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }
}

function getApiToken() {
  return from(new Promise(resolve => resolve(localStorage.getApiToken()))).pipe(take(1))
}

function defaultAuthHeaders(apiToken) {
  if (apiToken) {
    return {
      Authorization: apiToken
    }
  }
  return {}
}

export const getJson = (url, headers = {}) =>
  getApiToken().pipe(
    mergeMap(apiToken =>
      ajax.get(url, {
        ...defaultHeaders.contentType.applicationJson,
        ...defaultAuthHeaders(apiToken),
        ...headers
      })
    )
  )

export const postJson = (url, body, headers = {}) =>
  getApiToken().pipe(
    mergeMap(apiToken =>
      ajax.post(url, JSON.stringify(body), {
        ...defaultHeaders.contentType.applicationJson,
        ...defaultAuthHeaders(apiToken),
        ...headers
      })
    )
  )

export const remove = (url, headers = {}) =>
  getApiToken().pipe(
    mergeMap(apiToken =>
      ajax.delete(url, {
        ...defaultAuthHeaders(apiToken),
        ...headers
      })
    )
  )
