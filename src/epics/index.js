import { combineEpics } from 'redux-observable'
import appEpic from './appEpic'
import loginEpic from './loginEpic'
import homeEpic from './homeEpic'

export default combineEpics(
  appEpic.handleInitEpic,
  appEpic.handleFetchRejectionEpic,
  appEpic.logoutEpic,
  loginEpic.requestVersionEpic,
  loginEpic.versionRequestedEpic,
  loginEpic.loginRequestedEpic,
  loginEpic.loginReceivedEpic,
  loginEpic.tokenStoredEpic,
  homeEpic.requestDataEpic
)
