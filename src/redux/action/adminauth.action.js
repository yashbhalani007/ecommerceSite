import { type } from "@testing-library/user-event/dist/type"
import { SIGNUP_REQUEST } from "../Actiontype"

export const handleSignup = (data) => (dispatch) => {
    dispatch({type: SIGNUP_REQUEST, payload: data})
}