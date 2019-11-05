// @flow

import { replace, isEmpty } from 'lodash'
import { AUTH } from '../consts'

export function getApiToken() {
  return localStorage.getItem('apiToken')
}

export function setApiToken(apiToken: string) {
  localStorage.setItem('apiToken', apiToken)
}

export function hasApiToken(): boolean {
  const apiToken = getApiToken()
  return !isEmpty(apiToken)
}

export function removeApiToken() {
  localStorage.removeItem('apiToken')
}

export function addBearer(apiToken: string) {
  return AUTH.BEARER + apiToken
}

export function removeBearer(apiToken: string) {
  return replace(apiToken, AUTH.BEARER, '')
}

export default {
  addBearer,
  removeBearer,
  setApiToken,
  hasApiToken,
  removeApiToken
}
