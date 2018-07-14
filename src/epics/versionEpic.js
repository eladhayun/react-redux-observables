import { Observable } from 'rxjs'
import { VERSION_REQUESTED, versionReceived } from '../actions'

export const requestVersionEpic = action$ => {
  return action$.ofType(VERSION_REQUESTED).switchMap(() => {
    return Observable.ajax
      .getJSON('http://www.mocky.io/v2/5b4a46fd2f000077001e0e3a')
      .delay(2000)
      .map(versionReceived)
  })
}
