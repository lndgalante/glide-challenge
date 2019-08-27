import { call, put, select, takeLatest, takeEvery } from 'redux-saga/effects';
import { push, LOCATION_CHANGE } from 'connected-react-router';
import { matchPath } from 'react-router-dom';

/* Actions */
import {
  getManagerEmployeesRequest,
  getManagerEmployeesSuccess,
  getManagerEmployeesLoading,
  getEmployeeRequest,
  getEmployeeLoading,
  getEmployeeSuccess,
  getAllEmployeesRequest,
  getAllEmployeesLoading,
  getAllEmployeesSuccess,
  setEmployeeNoSubemployees,
} from './actions';
/* Selectors */
import { getChartEmployee } from './selectors';
/* Helpers */
import api from '../../lib/api';
import { parseEmployeesById, parseEmployeesWithHasChildrens } from './utils';
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

    if (employees.length === 0) {
      yield put(setEmployeeNoSubemployees(employee.id));
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
    yield put(getEmployeeSuccess(parseEmployeesById(employees)));
  } catch (error) {
    yield put(push(ROUTES.employees));
    openNotificationWithIcon('error', `Empleado ${employeeId}`, 'No pudimos conseguir sus datos');
  }
}

function* getAllEmployees() {
  try {
    yield put(getAllEmployeesLoading());
    const employees = yield call(() => api.fetchEmployees({ offset: 0, limit: Number.MAX_SAFE_INTEGER }));

    const employeesWithHasChildren = parseEmployeesWithHasChildrens(employees);
    yield put(getAllEmployeesSuccess(parseEmployeesById(employeesWithHasChildren)));
  } catch (error) {
    openNotificationWithIcon('error', `Empleados`, 'No pudimos conseguir todos los empleados');
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
    console.error('function*redirectToEmployeesFromEmployeeId', err);
  }
}

/* Watchers */
function* chartSaga() {
  yield takeLatest(getEmployeeRequest, getEmployee);
  yield takeLatest(getAllEmployeesRequest, getAllEmployees);
  yield takeLatest(getManagerEmployeesRequest, getManagerEmployees);
  yield takeEvery(LOCATION_CHANGE, redirectToEmployeesFromEmployeeId);
}

export default chartSaga;
