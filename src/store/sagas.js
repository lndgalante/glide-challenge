import { all } from 'redux-saga/effects';

/* Sagas */
import employeesSaga from '../modules/chart/sagas';

function* rootSaga() {
  yield all([employeesSaga()]);
}

export default rootSaga;
