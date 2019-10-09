import { toLower, startCase } from 'lodash'

export const titleCase = text => startCase(toLower(text))

export const pipe = (...fns) => fns.reduce((f, g) => (...args) => g(f(...args)))

export const scrollToTop = () => window.scrollTo(0, 0)

export const filterObject = (obj, predicate) =>
  Object.keys(obj)
    .filter(key => predicate(obj[key]))
    .reduce((res, key) => Object.assign(res, { [key]: obj[key] }), {})

export default {
  filterObject,
  pipe,
  scrollToTop,
  titleCase
}
