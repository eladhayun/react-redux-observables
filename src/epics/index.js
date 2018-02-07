import { combineEpics } from 'redux-observable';
import { requestVersionEpic } from './versionEpic';

export default combineEpics(requestVersionEpic);
