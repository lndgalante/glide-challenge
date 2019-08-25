import { call, put, delay, select, takeLatest, takeEvery } from 'redux-saga/effects';
import { push, LOCATION_CHANGE } from 'connected-react-router';
import { matchPath } from 'react-router-dom';
import delve from 'dlv';

/* Actions */
import {
  getManagerEmployeesRequest,
  getManagerEmployeesSuccess,
  getManagerEmployeesLoading,
  getEmployeeRequest,
  getEmployeeLoading,
  getEmployeeSuccess,
} from './actions';
/* Selectors */
import { getChartEmployee } from './selectors';
/* Helpers */
import api from '../../lib/api';
import { parseEmployeesById } from './utils';
import { openNotificationWithIcon } from '../../lib/utils';
/* Constants */
import { ROUTES } from '../../lib/constants';

/* Workers */
function* getManagerEmployees(action) {
  const { managerId } = action.payload;
  const employee = yield select(state => getChartEmployee(state, managerId));

  try {
    yield put(getManagerEmployeesLoading());
    const employees = yield call(() => api.fetchEmployeesByManagerId(managerId));

    yield delay(400);

    if (employees.length === 0) {
      openNotificationWithIcon('info', `${employee.first} ${employee.last}`, 'No posee empleados a cargo');
    }

    yield put(getManagerEmployeesSuccess(parseEmployeesById(employees)));
  } catch (error) {
    openNotificationWithIcon('error', `${employee.first} ${employee.last}`, 'No pudimos conseguir sus empleados');
  }
}

function* getEmployee(action) {
  const { employeeId } = action.payload;

  try {
    yield put(getEmployeeLoading());
    yield put(push(ROUTES.employeeId(employeeId)));

    const employees = yield call(() => api.fetchEmployeeById(employeeId));

    yield delay(400);

    yield put(getEmployeeSuccess(parseEmployeesById(employees)));
  } catch (error) {
    yield put(push(ROUTES.employees));
    openNotificationWithIcon('error', `Empleado ${employeeId}`, 'No pudimos conseguir sus datos');
  }
}

function* redirectToEmployeesFromEmployeeId(action) {
  try {
    const { pathname } = action.payload.location;
    const employeeIdPath = ROUTES.employeeId();
    const matchEmployeeId = matchPath(pathname, { path: employeeIdPath, exact: true, strict: false });

    if (matchEmployeeId) {
      const { employeeId } = matchEmployeeId.params;
      const employee = yield select(state => getChartEmployee(state, employeeId));

      if (!employee) yield put(push(ROUTES.employees));
    }
  } catch (err) {
    openNotificationWithIcon('error', 'Error in redirectToEmployeesFromEmployeeId generator', err.message);
  }
}

/* Watchers */
function* chartSaga() {
  yield takeLatest(getEmployeeRequest, getEmployee);
  yield takeLatest(getManagerEmployeesRequest, getManagerEmployees);
  yield takeEvery(LOCATION_CHANGE, redirectToEmployeesFromEmployeeId);
}

export default chartSaga;
