import { call, put } from 'redux-saga/effects'

import { actionTypes as categoriesActions } from '../../features/categories';

export default function* tryUsersList() {
    try {
        const URL = process.env.REACT_APP_URL+'/featureCategories'
        const response = yield call(fetch, URL)
        const data = yield call([response, 'json'])

        yield put({ type: categoriesActions.LIST_SUCCESS, data })
    } catch (e) {
        yield put({ type: categoriesActions.LIST_FAILED })
    }
}