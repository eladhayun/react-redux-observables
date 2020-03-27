import Actions from '../actions'
import { mapTo, filter, map, withLatestFrom, take } from 'rxjs/operators'
import { ofType } from 'redux-observable'
import { ROUTES } from '../consts'

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

export default {
  appInitEpic,
  fetchRejectionEpic
}
