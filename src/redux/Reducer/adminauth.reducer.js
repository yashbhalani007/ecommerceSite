<<<<<<< HEAD
 import { AUTH_ERROR, LOGIN_REQUEST, LOGIN_RESPONSE, SIGNUP_REQUEST, SIGNUP_RESPONSE, USERLOGIN_REQUEST } from "../Actiontype"
=======
import { AUTH_ERROR, LOGIN_REQUEST, LOGIN_RESPONSE, LOGOUT_RESPONSE, SIGNUP_REQUEST, SIGNUP_RESPONSE } from "../Actiontype"
>>>>>>> dff95d269f80cbf8db0c3bb3f5cd2f5f0c874764

const initialState = {
    isLoading: false,
    adminAuth: [],
    errorMessage: null
}

export const adminAuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP_REQUEST:
        case SIGNUP_RESPONSE:
            return {
                isLoading: false,
                adminAuth: [],
                errorMessage: null
            }

        case AUTH_ERROR:
            return {
                isLoading: false,
                adminAuth: [],
                errorMessage: action.payload
            }

        case USERLOGIN_REQUEST:
            return state;

        case LOGIN_REQUEST:
            return state

        case LOGIN_RESPONSE:
            return {
                isLoading: false,
                adminAuth: action.payload,
                errorMessage: null
            }

        case LOGOUT_RESPONSE:
            return {
                isLoading: false,
                adminAuth: null,
                errorMessage: null
            }
        
        default:
            return state
    }
}