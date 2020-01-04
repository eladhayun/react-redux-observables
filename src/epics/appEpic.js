import Actions from '../actions'
import { of } from 'rxjs'
import {
  mapTo,
  filter,
  map,
  withLatestFrom,
  take,
  switchMap,
  mergeMap,
  catchError,
  delay
} from 'rxjs/operators'
import { ofType } from 'redux-observable'
import { getJson } from '../utils/ajaxUtils'
import { ROUTES, URLS } from '../consts'

const appInitEpic = (action$, state$) =>
  action$.pipe(
    ofType(Actions.LOCATION_CHANGED),
    take(1),
    mapTo(Actions.appInit())
  )

const fetchRejectionEpic = (action$, state$) =>
  action$.pipe(
    ofType(Actions.FETCH_REJECTED),
    withLatestFrom(state$),
    map(([action, state]) => ({ action, state })),
    filter(({ action }) => action.status === 401),
    filter(({ state }) => state.router.location.pathname !== ROUTES.LOGIN),
    filter(() => false), // TODO: Remove this
    mapTo({ type: 'TBD' }) // TODO: Add the appropriate action creator
  )

const requestVersionEpic = action$ =>
  action$.pipe(
    ofType(Actions.VERSION_REQUESTED),
    delay(2000),
    switchMap(() =>
      getJson(URLS.MOCK_VERSION).pipe(
        mergeMap(({ response }) => of(Actions.versionReceived(response))),
        catchError(error => of(Actions.fetchRejected(error)))
      )
    )
  )

export default {
  appInitEpic,
  requestVersionEpic,
  fetchRejectionEpic
}
