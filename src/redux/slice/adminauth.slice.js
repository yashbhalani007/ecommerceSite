// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
// import { auth } from "../../firebase";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { useDispatch } from "react-redux";

// const initialState = {
//     isLoading: false,
//     adminauth: [],
//     errorMessage: null
// }

// export const adminSignup = createAsyncThunk(
//     'auth/signup',
//     async (data) => {
//         console.log(data);
//         createUserWithEmailAndPassword(auth, data.email, data.password)
//             .then((userCredential) => {
//                 // Signed up 
//                 const user = userCredential.user;
//                 console.log(user);
//                 // ...
//             })
//             .catch((error) => {
//                 const errorCode = error.code;
//                 const errorMessage = error.message;
//                 // ..
//             });
//         const dispatch = useDispatch()
//         dispatch({ type: SIGNUP_REQUEST, payload: data })

//         return data
//     }
// )

// export const adminauthSlice = createSlice({
//     name: 'adminauth',
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {
//         builder.addCase(adminSignup.fulfilled, (state, action) => {
//             console.log(action);
//             state.isLoading = false
//             state.adminauth = action.payload
//             state.errorMessage = null
//         })
//     }
// })

// export default adminauthSlice.reducer