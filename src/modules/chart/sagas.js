import { call, put, delay, takeLatest } from 'redux-saga/effects';

/* Actions */
import { getEmployeesRequest, getEmployeesSuccess, getEmployeesLoading } from './actions';
/* Helpers */
import api from '../../lib/api';
import { parseEmployeesById } from './utils';

/* Workers */
function* getEmployees(action) {
  try {
    yield delay(1000);

    const { employeeId } = action.payload;
    yield put(getEmployeesLoading());
    const employees = yield call(() => api.fetchEmployeesByManagerId(employeeId));
    yield put(getEmployeesSuccess(parseEmployeesById(employees)));
  } catch (error) {}
}

/* Watchers */
function* chartSaga() {
  yield takeLatest(getEmployeesRequest, getEmployees);
}

export default chartSaga;
