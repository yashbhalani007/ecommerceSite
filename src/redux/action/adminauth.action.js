import { type } from "@testing-library/user-event/dist/type"
<<<<<<< HEAD
import { AUTH_ERROR, FORGOT_PASSWORD, LOGIN_REQUEST, LOGIN_RESPONSE, SIGNUP_REQUEST, SIGNUP_RESPONSE, USERLOGIN_REQUEST } from "../Actiontype"
=======
import { AUTH_ERROR, FORGOT_PASSWORD, LOGIN_REQUEST, LOGIN_RESPONSE, LOGOUT_ACCOUNT, LOGOUT_RESPONSE, SIGNUP_REQUEST, SIGNUP_RESPONSE } from "../Actiontype"
>>>>>>> dff95d269f80cbf8db0c3bb3f5cd2f5f0c874764

export const handleSignup = (data) => (dispatch) => {
    dispatch({type: SIGNUP_REQUEST, payload: data})
}

export const signupResponse = (data) => (dispatch) => {
    dispatch({type: SIGNUP_RESPONSE, payload: data})
}

export const authError = (data) => (dispatch) => {
    dispatch({type: AUTH_ERROR, payload: data})
}

export const loginRequest = (data) => (dispatch) => {
    console.log(data);
    dispatch({type: LOGIN_REQUEST, payload: data})
}

export const loginResponse = (data) => (dispatch) => {
    dispatch({type: LOGIN_RESPONSE, payload: data})
}

export const forgotPassword = (data) => (dispatch) => {
    dispatch({type: FORGOT_PASSWORD, payload: data})
}
<<<<<<< HEAD
export const userLoginRequest = (data) => (dispatch) =>{
    dispatch({type:USERLOGIN_REQUEST, payload: data})
=======

export const logoutRequest = () => (dispatch) => {
    dispatch({type: LOGOUT_ACCOUNT})
}

export const logoutResponse = () => (dispatch) => {
    dispatch({type: LOGOUT_RESPONSE})
>>>>>>> dff95d269f80cbf8db0c3bb3f5cd2f5f0c874764
}