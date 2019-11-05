// @flow

import { mapTo, filter, map, withLatestFrom, take } from 'rxjs/operators'
import { ofType } from 'redux-observable'
import { push } from 'connected-react-router'
import { hasApiToken } from '../utils/authUtils'
import Actions from '../actions'
import { ROUTES } from '../consts'

const appInitEpic = (action$: any, state$: any) =>
  action$.pipe(
    ofType(Actions.LOCATION_CHANGED),
    withLatestFrom(state$),
    map(([, state]) => state),
    filter(state => state.router.location.pathname !== ROUTES.LOGIN),
    filter(() => !hasApiToken()),
    take(1),
    map(() => push(ROUTES.LOGIN))
  )

const fetchRejectionEpic = (action$: any, state$: any) =>
  action$.pipe(
    ofType(Actions.FETCH_REJECTED),
    withLatestFrom(state$),
    map(([action, state]) => ({ action, state })),
    filter(({ action }) => action.status === 401),
    filter(({ state }) => state.router.location.pathname !== ROUTES.LOGIN),
    filter(() => false), // TODO: Remove this
    mapTo({ type: 'TBD' })
  )

export default {
  appInitEpic,
  fetchRejectionEpic
}
