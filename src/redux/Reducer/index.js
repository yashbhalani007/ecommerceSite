import { combineReducers } from "@reduxjs/toolkit";
import { adminAuthReducer } from "./adminauth.reducer";
import alertSlice from "../slice/alert.slice";
import userSlice from "../slice/user.slice";

export const rootreducer = combineReducers({
    adminauth: adminAuthReducer,
    alert: alertSlice,
    users: userSlice
})