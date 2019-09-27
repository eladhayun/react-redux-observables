import { map, tap, mapTo, pluck, filter, switchMap, mergeMap, catchError } from 'rxjs/operators'
import { of } from 'rxjs'
import { ofType } from 'redux-observable'
import { push } from 'connected-react-router'
import { getJson, postJson } from '../utils/ajax'
import localStorage from '../utils/localStorage'
import ROUTES from '../constants/routes'
import Actions from '../actions/loginActions'
import AppActions from '../actions/appActions'

const URLS = {
  VERSION: '/api/mock/version',
  AUTHENTICATE: '/api/mock/authenticate'
}

const requestVersionEpic = action$ =>
  action$.pipe(
    ofType(AppActions.LOCATION_CHANGED),
    pluck('payload', 'location', 'pathname'),
    filter(pathname => pathname === ROUTES.LOGIN),
    mapTo(Actions.requestVersion())
  )

const versionRequestedEpic = action$ =>
  action$.pipe(
    ofType(Actions.VERSION_REQUESTED),
    switchMap(() =>
      getJson(URLS.VERSION).pipe(
        mergeMap(({ response }) => of(Actions.versionReceived(response))),
        catchError(error => of(AppActions.fetchRejected(error)))
      )
    )
  )

const loginRequestedEpic = action$ =>
  action$.pipe(
    ofType(Actions.LOGIN_REQUESTED),
    switchMap(({ username, password }) =>
      postJson(`${URLS.AUTHENTICATE}?password=${password}&username=${username}`).pipe(
        mergeMap(({ xhr }) => of(Actions.loginReceived(xhr.getResponseHeader('Authorization')))),
        catchError(error => of(AppActions.fetchRejected(error)))
      )
    )
  )

const loginReceivedEpic = action$ =>
  action$.pipe(
    ofType(Actions.LOGIN_RECEIVED),
    pluck('apiToken'),
    filter(apiToken => apiToken),
    tap(apiToken => localStorage.setApiToken(apiToken)),
    map(apiToken => Actions.apiTokenStored(apiToken))
  )

const tokenStoredEpic = action$ =>
  action$.pipe(
    ofType(Actions.API_TOKEN_STORED),
    map(() => push(ROUTES.HOME))
  )

export default {
  requestVersionEpic,
  versionRequestedEpic,
  loginRequestedEpic,
  loginReceivedEpic,
  tokenStoredEpic
}
