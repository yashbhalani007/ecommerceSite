import { combineReducers } from "@reduxjs/toolkit";
import { adminAuthReducer } from "./adminauth.reducer";
import alertSlice from "../slice/alert.slice";
import userSlice from "../slice/user.slice";
import { userAuthReducer } from "./userauth.reducer";

export const rootreducer = combineReducers({
    adminauth: adminAuthReducer,
    userauth : userAuthReducer,
    alert: alertSlice,
    users: userSlice
})