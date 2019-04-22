import { combineEpics } from 'redux-observable'
import homeEpic from './homeEpic'

export default combineEpics(homeEpic.requestVersionEpic)
