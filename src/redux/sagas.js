import { call, put, takeLatest } from "redux-saga/effects";

import { getUsers } from "./actions";
import { CREATE_USER, REQUEST_USERS, UPDATE_USER, DELETE_USER } from "./constants";
import { postData, getData, deleteData, putData } from "./api";

function* getApiUsers(action) {
  console.log(123);
  
  try {
    const users = yield call(() => getData());
    console.log(users);
    
    yield put(getUsers(users));
  } catch (e) {
    console.log(e);
  }
}

function* postApiUsers(action) {
  console.log(22);
  
  try {
    yield call(() => postData(action.data));
    const users = yield call(() => getData());

    yield put(getUsers(users));
  } catch (e) {
    console.log(e);
  }
}
function* putApiMovies(action) {
  try {
    yield call(() => putData(action.id, action.data));
    const users = yield call(() => getData());

    yield put(getUsers(users));
  } catch (e) {
    console.log(e);
  }
}
function* deleteApiUsers(action) {
  try {
    yield call(() => deleteData(action.id));
    const users = yield call(() => getData());

    yield put(getUsers(users));
  } catch (e) {
    console.log(e);
  }
}

export function* sagaGet() {
  yield takeLatest(REQUEST_USERS, getApiUsers);
}

export function* sagaDelete() {
  yield takeLatest(DELETE_USER, deleteApiUsers);
}

export function* sagaPut() {
  yield takeLatest(UPDATE_USER, putApiMovies);
}

export function* sagaPost() {
  yield takeLatest(CREATE_USER, postApiUsers);
}

