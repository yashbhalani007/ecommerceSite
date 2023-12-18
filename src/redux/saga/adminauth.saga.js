
import { signupAPI } from "../../Admin/conatiner/common/adminauth.api";
import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { SIGNUP_REQUEST } from "../Actiontype";

function* adminSignup(action) {
    try {
        const user = yield call(signupAPI, action.payload)
        console.log(user);
    } catch (error) {
        console.log(error);
    }
}

function* watchSaga() {
    yield takeEvery(SIGNUP_REQUEST, adminSignup)
}

export default function* adminAuthSaga() {
    yield all([watchSaga()])
}