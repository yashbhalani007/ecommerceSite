import { USERLOGIN_RESPONSE, USERLOGOUT_REQUEST, USERLOGOUT_RESPONSE } from "../Actiontype"

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

         case USERLOGOUT_REQUEST:
            return state;

        case USERLOGOUT_RESPONSE :
            
                return{
                  isLoading: false,
                  error: null,
                  user: null
                }
        
        default:
            return state
    }
}