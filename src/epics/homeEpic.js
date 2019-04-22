import { of } from 'rxjs'
import { switchMap, mergeMap, delay } from 'rxjs/operators'
import { ajax } from 'rxjs/ajax'
import { ofType } from 'redux-observable'
import * as Actions from '../actions'

const URLS = {
  VERSION: 'http://www.mocky.io/v2/5b4a46fd2f000077001e0e3a'
}

const requestVersionEpic = action$ => action$.pipe(
  ofType(Actions.VERSION_REQUESTED),
  delay(2000),
  switchMap(() => ajax(URLS.VERSION)
    .pipe(mergeMap(({ response }) => of(Actions.versionReceived(response)))))
)

export default {
  requestVersionEpic
}
