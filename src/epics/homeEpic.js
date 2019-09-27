import { of } from 'rxjs'
import { switchMap, mergeMap, delay, catchError } from 'rxjs/operators'
import { ofType } from 'redux-observable'
import { getJson } from '../utils/ajax'
import Actions from '../actions/homeActions'
import AppActions from '../actions/appActions'

const URLS = {
  DATA: '/api/mock/data'
}

const requestDataEpic = action$ =>
  action$.pipe(
    ofType(Actions.DATA_REQUESTED),
    delay(2000),
    switchMap(() =>
      getJson(URLS.DATA).pipe(
        mergeMap(({ response }) => of(Actions.dataReceived(response))),
        catchError(error => of(AppActions.fetchRejected(error)))
      )
    )
  )

export default {
  requestDataEpic
}
