import { put, takeEvery, call } from 'redux-saga/effects'
import { fetchShopsAction, FETCH_SHOPS_SAGA } from "../store/authReducer";

async function fetchShops() {
  try {
    const response = await fetch("http://134.209.197.75/shops").then(resp => resp.json())
      .catch(err => {
        throw new Error("there is some problem");
      })
    return response;

  } catch (err) {
    console.log(err);
    return err;
  }
}

function* shopsWorker() {
  const response = yield call(fetchShops);
  console.log(response);
  yield put(fetchShopsAction(response));
}

export function* shopsWatcher() {
  yield takeEvery(FETCH_SHOPS_SAGA, shopsWorker);
}