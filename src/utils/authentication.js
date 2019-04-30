import { replace } from 'lodash'
import AUTHENTICATION from '../constants/authentication'

function addBearer(apiToken) {
  return AUTHENTICATION.BEARER + apiToken
}

function removeBearer(apiToken) {
  return replace(apiToken, AUTHENTICATION.BEARER, '')
}

export default {
  addBearer,
  removeBearer
}
