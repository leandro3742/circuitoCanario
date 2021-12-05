import { call, put } from 'redux-saga/effects'

import { actionTypes as listFeaturesActions } from '../../features/listFeatures';

export default function* tryListFeatures() {
    try {
        const URL = process.env.REACT_APP_URL+'/feature'
        const response = yield call(fetch, URL)
        const data = yield call([response, 'json'])
        yield put({ type: listFeaturesActions.LIST_SUCCESS, data })
    } catch (e) {
        yield put({ type: listFeaturesActions.LIST_FAILED })
    }
}