import { of } from 'rxjs'
import { switchMap, mergeMap } from 'rxjs/operators'
import { ajax } from 'rxjs/ajax'
import { ofType } from 'redux-observable'

import { VERSION_REQUESTED, versionReceived } from '../actions'

export const requestVersionEpic = action$ =>
  action$.pipe(
    ofType(VERSION_REQUESTED),
    switchMap(() =>
      ajax('http://www.mocky.io/v2/5b4a46fd2f000077001e0e3a').pipe(
        mergeMap(({ response }) => of(versionReceived(response)))
      )
    )
  )
