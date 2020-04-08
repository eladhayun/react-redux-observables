import { combineEpics } from 'redux-observable'
import * as tabOneEpic from './tabOneEpic'

export default combineEpics(
  ...Object.values({
    ...tabOneEpic
  })
)
