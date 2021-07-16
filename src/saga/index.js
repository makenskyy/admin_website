import { all } from 'redux-saga/effects';
import { loginWatcher } from './userSaga';

export function* rootWatcher() {
  yield all([loginWatcher()])
}