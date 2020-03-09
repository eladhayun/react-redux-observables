import { isEmpty } from 'lodash'

export function getApiToken() {
  return localStorage.getItem('apiToken')
}

export function setApiToken(apiToken) {
  localStorage.setItem('apiToken', apiToken)
}

export function hasApiToken() {
  const apiToken = getApiToken()
  return !isEmpty(apiToken)
}

export function removeApiToken() {
  localStorage.removeItem('apiToken')
}

export default {
  setApiToken,
  hasApiToken,
  removeApiToken
}
