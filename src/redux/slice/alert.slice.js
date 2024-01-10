import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    text: '',
    color: ''
}

const alertSlice = createSlice({
    name: 'alert',
    initialState,
    reducers: {
        setAlert: (state, action) => {
            console.log("Product Uploaded");
            state.text = action.payload.text;
            state.color = action.payload.color;
        },
        clearAlert: (state, action) => {
            state.text = '';
            state.color = '';
        }
    }
})

export const { setAlert, clearAlert } =  alertSlice.actions
export default alertSlice.reducer