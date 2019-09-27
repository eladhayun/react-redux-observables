import { mapTo, filter, map, tap, withLatestFrom, take } from 'rxjs/operators'
import { ofType } from 'redux-observable'
import { push } from 'connected-react-router'
import localStorage from '../utils/localStorage'
import Actions from '../actions/appActions'
import ROUTES from '../constants/routes'

const handleInitEpic = (action$, state$) =>
  action$.pipe(
    ofType(Actions.LOCATION_CHANGED),
    withLatestFrom(state$),
    map(([, state]) => state),
    filter(state => state.router.location.pathname !== ROUTES.LOGIN),
    filter(() => !localStorage.hasApiToken()),
    take(1),
    map(() => push(ROUTES.LOGIN))
  )

const handleFetchRejectionEpic = (action$, state$) =>
  action$.pipe(
    ofType(Actions.FETCH_REJECTED),
    withLatestFrom(state$),
    map(([action, state]) => ({ action, state })),
    filter(({ action }) => action.status === 401),
    filter(({ state }) => state.router.location.pathname !== ROUTES.LOGIN),
    mapTo(Actions.logout())
  )

const logoutEpic = action$ =>
  action$.pipe(
    ofType(Actions.LOGOUT),
    tap(() => localStorage.removeApiToken()),
    map(() => push(ROUTES.LOGIN))
  )

export default {
  handleInitEpic,
  handleFetchRejectionEpic,
  logoutEpic
}
