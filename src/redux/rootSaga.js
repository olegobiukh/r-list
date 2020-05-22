import { all } from "redux-saga/effects";
import * as userSagas from "./sagas";

export default function* rootSaga() {
  yield all([...userSagas.sagasData]);
}
