import { of } from 'rxjs'
import { switchMap, mergeMap, catchError } from 'rxjs/operators'
import { ofType } from 'redux-observable'
import { getJSON } from '../utils/ajaxUtils'
import Actions from '../actions'

const URLS = {
  DATA: '/api/mock/data'
}

export const requestTabOneDataEpic = action$ =>
  action$.pipe(
    ofType(Actions.TAB_ONE_DATA_REQUESTED),
    switchMap(() =>
      getJSON(URLS.DATA).pipe(
        mergeMap(({ response }) => of(Actions.tabOneDataReceived(response))),
        catchError(error => of(Actions.fetchRejected(error)))
      )
    )
  )
