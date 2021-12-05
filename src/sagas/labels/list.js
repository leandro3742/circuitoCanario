import { call, put } from 'redux-saga/effects'

import { actionTypes as labelsActions } from '../../features/labels';

export default function* tryLabelsList() {
    try {
        const URL = process.env.REACT_APP_URL+'/labels'
        const response = yield call(fetch, URL)
        const data = yield call([response, 'json'])

        yield put({ type: labelsActions.LIST_SUCCESS, data })
    } catch (e) {
        yield put({ type: labelsActions.LIST_FAILED })
    }
}