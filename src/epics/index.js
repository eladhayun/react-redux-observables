// @flow

import { combineEpics } from 'redux-observable'
import appEpic from './appEpic'

export default combineEpics(appEpic.appInitEpic, appEpic.fetchRejectionEpic)
