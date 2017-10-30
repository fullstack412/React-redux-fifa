import * as redux from "redux"
import * as reportBundle from "./ReportBundle"
import thunk from 'redux-thunk';

export let StoreState = {
    ReportBundle: reportBundle.State
}

export default function createStore() {

    let preCombinedReducers = {};

    preCombinedReducers[reportBundle.name] = reportBundle.Reducer;

    let reducersDefaultState = {}

    reducersDefaultState[reportBundle.name] = reportBundle.DefaultState;


    let precombinedReducers = redux.combineReducers(preCombinedReducers);

    let createStoreWithMiddleware = redux.applyMiddleware(
        thunk,
    )(redux.createStore);

    return createStoreWithMiddleware(
        precombinedReducers,
        reducersDefaultState
    );
}