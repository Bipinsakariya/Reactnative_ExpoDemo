import { types } from "./actionType";

export function requestLogin(email, password) {
    return {
		type: types.REQUEST_LOGIN,
		payload: {
            loading: true,
            email,
            password
		}
	};
}

export function loginSuccess(userData) {
    return {
        type: types.LOGIN_SUCCESS,
        payload: {
            loading: false,
            userData
        }
    }
}

export function loginFail(){
    return {
        type: types.LOGIN_FAIL,
        payload: {
            loading: false,
            userData:''
        }
    }
}

export function requestJournalData(page) {
    return {
		type: types.REQUEST_JOURNAL_DATA,
		payload: {
            loading: true,
            page
		}
	};
}

export function journalDataSuccess(journalData) {
    return {
        type: types.JOURNAL_DATA_SUCCESS,
        payload: {
            loading: false,
            journalData
        }
    }
}

export function journalDataFail(){
    return {
        type: types.JOURNAL_DATA_FAIL,
        payload: {
            loading: false,
            journalData:''
        }
    }
}