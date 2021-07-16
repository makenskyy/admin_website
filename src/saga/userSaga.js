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


    return json;

  } catch (err) {
    return err;
  }
}


function* loginWorker(payload) {
  const data = yield call(login, payload);
  if (data.status === 200) yield put(loginSuccessAction(data));
  else yield put(loginFailAction(data));
}

export function* loginWatcher() {
  yield takeEvery(USER_LOGIN_SAGA, loginWorker);
}


/*
  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjIsI…TM1fQ.BRWAqZpGoaBq4rujxvF2PqQVycctkCUO15FleONtz94

  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjIsI…TYwfQ._MUrpOqHUkqoPcPjVsCmGSf5Pb9xfeFBDUlIyRmRXZo

*/