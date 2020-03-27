import { switchMap, mergeMap, take, takeUntil, map } from 'rxjs/operators'
import { of, interval } from 'rxjs'
import { ofType } from 'redux-observable'
import { push } from 'react-router'
import { ROUTES } from '../consts'
import Actions from '../actions'

/**
 * @param ACTION_IN (Action In)
 * @param ACTION_OUT (Action Out)
 */
const appPostInitEpic = action$ =>
  action$.pipe(
    ofType(Actions.ACTION_IN),
    switchMap(() =>
      interval(250).pipe(
        take(1),
        takeUntil(action$.pipe(ofType(Actions.BREAK_FLOW))),
        mergeMap(() => of(Actions.actionOut()))
      )
    )
  )

/**
 * @param X_REQUESTED (Action In)
 * @param LOCATION_CHANGE (Action Out)
 */
const appLogoutOnIntervalEpic = action$ =>
  action$.pipe(
    ofType(Actions.PIPE_TRIGGER),
    switchMap(({ seconds }) =>
      action$.pipe(
        switchMap(() =>
          interval(seconds * 1000).pipe(
            takeUntil(action$.pipe(ofType(...[]))),
            take(1),
            map(() => push(ROUTES.LOGOUT))
          )
        )
      )
    )
  )

export default {
  appPostInitEpic,
  appLogoutOnIntervalEpic
}
