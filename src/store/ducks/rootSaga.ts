import { all, takeLatest } from 'redux-saga/effects';

import { RegisterTypes } from './register/types';
import { request } from './register/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(RegisterTypes.LOAD_REQUEST, request)
  ]);
} 