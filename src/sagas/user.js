import { put, all, call, fork, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import {
    SUCCESS_INFO,
    REQUEST_INFO,
    FAILURE_INFO
} from "../actions/ActionTypes";

function fetchAPI(){
    return axios.get('https://jsonplaceholder.typicode.com/posts/1')
}

function* fetchInfo(action){
    try{
        const result = yield call(fetchAPI, action.data);
        yield put({
            type: SUCCESS_INFO,
            data: result.data,
        });
    } catch(e){
        console.error(e);
        yield put({
            type: FAILURE_INFO,
            message: e.message,
        });
    }
}

function* watchFetch(){
    yield takeEvery(REQUEST_INFO, fetchInfo);
}

export default function* userSaga(){
    yield all([
        fork(watchFetch),
    ]);
}
