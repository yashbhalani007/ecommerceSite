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
    whitelist: ['adminauth', 'userauth', 'cart']
}

const persistedReducer = persistReducer(persistConfig, rootreducer)


export const configureStore = () => {

    const sagaMiddleware = createSagaMiddleware()
    let middlewares = [thunk, sagaMiddleware]

    let store = createStore(persistedReducer, applyMiddleware(...middlewares))
    let persistor = persistStore(store)
    sagaMiddleware.run(rootSaga)

    return { store, persistor };
}

