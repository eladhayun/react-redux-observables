import { combineEpics } from 'redux-observable'
import tabOneEpic from './tabOneEpic'

export default combineEpics(tabOneEpic.requestTabOneDataEpic)
