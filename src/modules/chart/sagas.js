import { call, put, delay, select, takeLatest } from 'redux-saga/effects';

/* Actions */
import { getEmployeesRequest, getEmployeesSuccess, getEmployeesLoading } from './actions';
/* Selectors */
import { getChartEmployee } from './selectors';
/* Helpers */
import api from '../../lib/api';
import { openNotificationWithIcon } from '../../lib/utils';
import { parseEmployeesById } from './utils';

/* Workers */
function* getEmployees(action) {
  const { employeeId } = action.payload;
  const employee = yield select(state => getChartEmployee(state, employeeId));

  try {
    yield delay(1000);

    yield put(getEmployeesLoading());
    const employees = yield call(() => api.fetchEmployeesByManagerId(employeeId));

    if (employees.length === 0) {
      openNotificationWithIcon('info', `${employee.first} ${employee.last}`, 'No posee empleados a cargo');
    }

    yield put(getEmployeesSuccess(parseEmployeesById(employees)));
  } catch (error) {
    openNotificationWithIcon('error', `${employee.first} ${employee.last}`, 'No pudimos conseguir sus empleados');
  }
}

/* Watchers */
function* chartSaga() {
  yield takeLatest(getEmployeesRequest, getEmployees);
}

export default chartSaga;
