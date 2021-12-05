import {takeLatest} from 'redux-saga/effects'
// import {actionTypes as usersActions} from '../features/users';
import {actionTypes as listFeaturesActions} from '../features/listFeatures';
import {actionTypes as labelsActions} from '../features/labels';
import {actionTypes as categoriesActions} from '../features/categories';
import {actionTypes as stagesActions} from '../features/stages';

// import tryUsersList from './users/list'
import tryListFeatures from './listFeatures/list'
import tryCategoriesList from './categories/list'
import tryLabelsList from './labels/list'
import tryStagesList from './stages/list'

export default function* rootSaga() {
    yield takeLatest(listFeaturesActions.LIST_TRY, tryListFeatures);
    yield takeLatest(labelsActions.LIST_TRY, tryLabelsList);
    yield takeLatest(categoriesActions.LIST_TRY, tryCategoriesList);
    yield takeLatest(stagesActions.LIST_TRY, tryStagesList);
    // yield takeLatest(usersActions.LIST_TRY, tryUsersList);
    // yield takeLatest('TRY_LIST', tryUsersList);
    // yield takeLatest('TRY_LIST', tryUsersList);
    // yield takeLatest('TRY_LIST', tryUsersList);
}