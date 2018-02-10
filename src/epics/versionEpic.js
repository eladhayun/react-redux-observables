import { Observable } from 'rxjs';
import { VERSION_REQUESTED, versionReceived } from '../actions';

export const requestVersionEpic = action$ => {
  return action$.ofType(VERSION_REQUESTED).switchMap(() => {
    return Observable.ajax
      .getJSON('http://localhost:5000/version')
      .delay(2000)
      .map(versionReceived);
  });
};
