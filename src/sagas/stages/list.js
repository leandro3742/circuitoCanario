import { call, put } from 'redux-saga/effects'

import { actionTypes as stagesActions } from '../../features/stages';

export default function* tryStagesList() {
    try {
        const URL = process.env.REACT_APP_URL+'/featureStages'
        const response = yield call(fetch, URL)
        const data = yield call([response, 'json'])

        yield put({ type: stagesActions.LIST_SUCCESS, data })
    } catch (e) {
        yield put({ type: stagesActions.LIST_FAILED })
    }
}