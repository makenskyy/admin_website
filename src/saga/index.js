import { all } from 'redux-saga/effects';
import { shopsWatcher } from './shopsSaga';
import { loginWatcher } from './userSaga';

export function* rootWatcher() {
  yield all([loginWatcher(), shopsWatcher()])
}