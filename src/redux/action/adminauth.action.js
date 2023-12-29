import { type } from "@testing-library/user-event/dist/type"
import { AUTH_ERROR, FORGOT_PASSWORD, LOGIN_REQUEST, LOGIN_RESPONSE, LOGOUT_ACCOUNT, LOGOUT_RESPONSE,USERLOGIN_REQUEST, SIGNUP_REQUEST, SIGNUP_RESPONSE, USERLOGIN_RESPONSE, USERLOGOUT_REQUEST, USERLOGOUT_RESPONSE } from "../Actiontype"
import { addUsersData } from "../slice/user.slice"

export const handleSignup = (data) => (dispatch) => {
    console.log(data);
    dispatch({type: SIGNUP_REQUEST, payload: data})
}

export const signupResponse = (data) => (dispatch) => {
    dispatch({type: SIGNUP_RESPONSE, payload: data})
}

export const addSignupResponse = (data) => (dispatch) => {
    dispatch(addUsersData(data))
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

export const userLogoutRequest = () => (dispatch) => {
    dispatch({type: USERLOGOUT_REQUEST})
}

export const forgotPassword = (data) => (dispatch) => {
    dispatch({type: FORGOT_PASSWORD, payload: data})
}

export const userLoginRequest = (data) => (dispatch) => {
    console.log(data);
    dispatch({type: USERLOGIN_REQUEST, payload: data})
}

export const userLoginResponse = (data) => (dispatch) => {
    dispatch({type: USERLOGIN_RESPONSE, payload: data})
}

export const logoutRequest = () => (dispatch) => {
    dispatch({type: LOGOUT_ACCOUNT})
}

export const logoutResponse = () => (dispatch) => {
    dispatch({type: LOGOUT_RESPONSE})
}

export const uselogoutResponse = () => (dispatch) => {
    dispatch({type: USERLOGOUT_RESPONSE})
}