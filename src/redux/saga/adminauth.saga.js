
import { forgotAPI, loginAPI, signupAPI } from "../../Admin/conatiner/common/adminauth.api";
import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { FORGOT_PASSWORD, LOGIN_REQUEST, SIGNUP_REQUEST } from "../Actiontype";
import { authError, loginResponse, signupResponse } from "../action/adminauth.action";
import { setAlert } from "../slice/alert.slice";

function* adminSignup(action) {
    try {
        const user = yield call(signupAPI, action.payload)
        
        

        yield put(signupResponse(user.user))
        yield put(setAlert({text: user.message, color:'success'}))
    } catch (error) {
        console.log(error);
        yield put(authError(error.message))
        yield put(setAlert({text: error.message, color:'error'}))
    }
}

function* adminLogin(action) {
    try {
        const user = yield call(loginAPI, action.payload)
        yield put(loginResponse(user.user))
        yield put(setAlert({text: user.message, color:'success'}))
    } catch (error) {
        yield put(authError(error.message))
        yield put(setAlert({text: error.message, color:'error'}))
    }
}

function* forgotPass(action) {
    try {
        console.log(action.payload);
        const user = yield call(forgotAPI, action.payload)
        yield put(loginResponse(user.user))
        yield put(setAlert({text: user.message, color:'success'}))
    } catch (error) {
        yield put(authError(error.message))
        yield put(setAlert({text: error.message, color:'error'}))
    }
}

function* watchSignup() {
    yield takeEvery(SIGNUP_REQUEST, adminSignup)
}

function* watchLogin() {
    yield takeEvery(LOGIN_REQUEST, adminLogin)
}

function* watchForgot() {
    yield takeEvery(FORGOT_PASSWORD, forgotPass)
}

export default function* adminAuthSaga() {
    yield all([watchSignup(),watchLogin(),watchForgot()])
}