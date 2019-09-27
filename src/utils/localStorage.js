// @flow
import { isEmpty } from 'lodash'

function getApiToken() {
  return localStorage.getItem('apiToken')
}

function setApiToken(apiToken: string) {
  localStorage.setItem('apiToken', apiToken)
}

function hasApiToken(): boolean {
  const apiToken = getApiToken()
  return !isEmpty(apiToken)
}

function removeApiToken() {
  localStorage.removeItem('apiToken')
}

export default {
  getApiToken,
  setApiToken,
  hasApiToken,
  removeApiToken
}
