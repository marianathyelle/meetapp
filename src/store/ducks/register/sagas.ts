import { call, put } from 'redux-saga/effects';
import { API_URL } from '../../../services';
import { loadFailure, loadSuccess } from './actions';

export function* request(data: any) {
  const init: RequestInit = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data.payload)
  }

  console.log(JSON.stringify(data.payload));

  try {
    const response = yield call(fetch, `${API_URL}/user`, init);

    console.log(response);
    yield put(loadSuccess());
  } catch(err) {
    yield put(loadFailure());
  }
}