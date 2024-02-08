import { applyMiddleware, createStore } from "@reduxjs/toolkit"
import persistReducer from "redux-persist/es/persistReducer"
import storage from "redux-persist/lib/storage"
import createSagaMiddleware from 'redux-saga'
import { thunk } from "redux-thunk"
// import rootSaga from "./saga/rootsaga"
import persistStore from "redux-persist/es/persistStore"
import { rootreducer } from "./Reducer"
import rootSaga from "./saga/rootsaga"

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['adminauth','userauth','cart','wishlist', 'selectcategory']
}

const persistedReducer = persistReducer(persistConfig, rootreducer)
const sagaMiddleware = createSagaMiddleware() 
let middlewares = [thunk, sagaMiddleware]

export const configureStore = () => {
    let store = createStore(persistedReducer, applyMiddleware(...middlewares))

    sagaMiddleware.run(rootSaga)

    return store;
}

export let store = configureStore()
export let persistor= persistStore(store)

