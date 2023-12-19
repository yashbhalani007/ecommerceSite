import { all } from "redux-saga/effects";
import adminAuthSaga from "./adminauth.saga";

export default function* rootSaga() {
    yield all([
        adminAuthSaga()
    ])
}