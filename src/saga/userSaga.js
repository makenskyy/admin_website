import { put, takeEvery, all, call } from 'redux-saga/effects'

import { loginSuccessAction, USER_LOGIN_SAGA, loginFailAction } from '../store/authReducer';
import { axios } from 'axios';

import { useHistory } from 'react-router-dom';

async function login(payload) {
  try {
    const response = await fetch("http://134.209.197.75/auth/local", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload.payload)
    }).then(resp => {
      if (resp.status >= 400 && resp.status < 500) {
        throw {
          status: resp.status,
          message: "Incorrect password or email"
        }
      } else if (resp.status == 500) {
        throw {
          status: resp.status,
          message: "Server error"
        }
      }
      return resp;
    })

    const json = await response.json();


    localStorage.setItem('jwt', json.jwt);
    localStorage.setItem('userInfo', JSON.stringify(json.user));

    return json;

  } catch (err) {
    return err;
  }
}


function* loginWorker(payload) {
  const response = yield call(login, payload);
  if (response.jwt) yield put(loginSuccessAction(response.user))
  else {
    yield put(loginFailAction(response.message));
  }
}

export function* loginWatcher() {
  yield takeEvery(USER_LOGIN_SAGA, loginWorker);
}
