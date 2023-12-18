import { combineReducers } from "@reduxjs/toolkit";
import adminauthSlice from "../slice/adminauth.slice";

export const rootreducer = combineReducers({
    adminauth: adminauthSlice
})