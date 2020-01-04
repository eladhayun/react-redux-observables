import authConsts from './authConsts'
import routesConsts from './routesConsts'
import urlsConsts from './urlsConsts'

export const AUTH = authConsts
export const ROUTES = routesConsts
export const URLS = urlsConsts

export default {
  ...authConsts,
  ...routesConsts,
  ...urlsConsts
}
