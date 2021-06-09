import { call, put, select, takeEvery, takeLatest } from "redux-saga/effects";
import ACTION from "../constants/ActionName";

function* onLogin() {
  try {
    // TODO login
  } catch (error) {
    console.log("%c#ERROR", "color:red", error);
  }
}

function* authSaga() {
  yield takeLatest(ACTION.LOGIN, onLogin);
}

export default authSaga;
