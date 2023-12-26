import { combineReducers } from "@reduxjs/toolkit";
import { adminAuthReducer } from "./adminauth.reducer";
import alertSlice from "../slice/alert.slice";
import { userAuthReducer } from "./userauth.reducer";

export const rootreducer = combineReducers({
    adminauth: adminAuthReducer,
    alert: alertSlice,
    userauth : userAuthReducer,
})