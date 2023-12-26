
import { forgotAPI, loginAPI, logoutAPI, signupAPI, userloginAPI } from "../../Admin/conatiner/common/adminauth.api";
import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { ADMIN_LOGIN_SUCCESS, FORGOT_PASSWORD, LOGIN_REQUEST, LOGOUT_ACCOUNT, SIGNUP_REQUEST, USERLOGIN_REQUEST } from "../Actiontype";
import { authError, loginResponse, logoutResponse, signupResponse, userLoginResponse } from "../action/adminauth.action";
import { setAlert } from "../slice/alert.slice";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";

function* adminSignup(action) {
    try {
        const user = yield call(signupAPI, action.payload)
        if (user.user) {
            try {
                const docRef = addDoc(collection(db, "users"), { ...action.payload, emailVerified: false, uid: user.user.uid, type: action.payload.pickup || action.payload.store_name ? 'supplier' : 'consumer' });
                console.log(docRef.id);
                console.log("Document written with ID: ", docRef.id);
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        }
        yield put(signupResponse(user.user))
        yield put(setAlert({ text: user.message, color: 'success' }))
        
    } catch (error) {
        console.log(error);
        yield put(authError(error.message))
        yield put(setAlert({ text: error.message, color: 'error' }))
    }
}

function* adminLogin(action) {
    try {
        const user = yield call(loginAPI, action.payload.data)
        yield put(loginResponse(user.user))
        yield put(setAlert({ text: user.message, color: 'success' }))
        action.payload.callback('/admin/')
    } catch (error) {
        yield put(authError(error.message))
        yield put(setAlert({ text: error.message, color: 'error' }))
    }
}

function* userAdminLogin(action){
    try {
        const user = yield call(userloginAPI, action.payload)
        yield put(userLoginResponse(user.user))
        yield put(setAlert({ text: user.message, color: 'success' }))
    } catch (error) {
        yield put(authError(error.message))
        yield put(setAlert({ text: error.message, color: 'error' }))
    }
}

function* forgotPass(action) {
    try {
        const user = yield call(forgotAPI, action.payload)
        yield put(loginResponse(user.user))
        yield put(setAlert({ text: user.message, color: 'success' }))
    } catch (error) {
        yield put(authError(error.message))
        yield put(setAlert({ text: error.message, color: 'error' }))
    }
}

function* logOut(action) {
    try {
        const user = yield call(logoutAPI)
        yield put(logoutResponse())
        yield put(setAlert({text: user.message, color:'success'}))
    } catch (error) {
        
    }
}

function* watchSignup() {
    yield takeEvery(SIGNUP_REQUEST, adminSignup)
}

function* watchLogin() {
    yield takeEvery(LOGIN_REQUEST, adminLogin)
}

function* watchUserLogin() {
    yield takeEvery(USERLOGIN_REQUEST, userAdminLogin)
}

function* watchForgot() {
    yield takeEvery(FORGOT_PASSWORD, forgotPass)
}

function* watchLogout() {
    yield takeEvery(LOGOUT_ACCOUNT, logOut)
}

export default function* adminAuthSaga() {
    yield all([watchSignup(), watchLogin(), watchForgot(),watchUserLogin(),watchLogout()])
}