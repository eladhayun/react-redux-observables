// @flow

import authConsts from './authConsts'
import routesConsts from './routesConsts'

export const AUTH = authConsts
export const ROUTES = routesConsts

export default {
  ...authConsts,
  ...routesConsts
}
