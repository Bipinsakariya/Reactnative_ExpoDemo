import { call, put, takeEvery } from "redux-saga/effects";
import { types } from "../action/actionType";
import {
    loginSuccess,
    loginFail,
} from '../action/general';
import { login } from "../Api/general";
import { NavigationActions } from '@react-navigation/native';

export function* watchGeneralRequest() {
    yield takeEvery(types.REQUEST_LOGIN, requestLogin);
}

function* requestLogin(action) {
    try {
        const res = yield call(
            login,
            action.payload.email,
            action.payload.password,
        );
        if (res.status === 200) {
            yield put(loginSuccess(res.data.data));
            yield put(NavigationActions.navigate({routeName: 'HomeScreen'}))
        } else {
            yield put(loginFail());
        }
    } catch (e) {
        console.log(e);
        yield put(loginFail());
    }
}