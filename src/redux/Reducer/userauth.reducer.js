import { USERLOGIN_RESPONSE } from "../Actiontype"

const initialState = {
    isLoading: false,
    userAuth: [],
    errorMessage: null
}

export const userAuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case USERLOGIN_RESPONSE:
            return  {
                isLoading: false,
                userAuth: action.payload,
                errorMessage: null
            }
        
        default:
            return state
    }
}