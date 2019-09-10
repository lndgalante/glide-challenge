import { call, put, select, takeLatest, takeEvery } from 'redux-saga/effects';
import { push, LOCATION_CHANGE } from 'connected-react-router';
import { matchPath } from 'react-router-dom';

/* Actions */
import {
  getManagerEmployeesRequest,
  getManagerEmployeesSuccess,
  getManagerEmployeesLoading,
  getManagerEmployeesFailure,
  getEmployeeRequest,
  getEmployeeLoading,
  getEmployeeSuccess,
  getEmployeeFailure,
  getAllEmployeesRequest,
  getAllEmployeesLoading,
  getAllEmployeesSuccess,
  getAllEmployeesFailure,
  setEmployeeNoSubemployees,
} from './actions';
/* Selectors */
import { getChartEmployee } from './selectors';
/* Helpers */
import api from '../../lib/api';
import { parseEmployeesById, parseEmployeesWithHasChildrens, openNotificationWithIcon } from './utils';
/* Constants */
import { ROUTES, ICONS } from '../../lib/constants';

/* Workers */
function* getManagerEmployees(action) {
  const { managerId } = action.payload;
  const employee = yield select(state => getChartEmployee(state, managerId));

  try {
    yield put(getManagerEmployeesLoading());
    const employees = yield call(() => api.fetchEmployeesByManagerId(managerId));

    if (employees.length === 0) {
      yield put(setEmployeeNoSubemployees(employee.id));
      openNotificationWithIcon(ICONS.info, `${employee.first} ${employee.last}`, 'Has no dependant employees');
    }

    yield put(getManagerEmployeesSuccess(parseEmployeesById(employees), managerId));
  } catch (error) {
    yield put(getManagerEmployeesFailure());
    openNotificationWithIcon(ICONS.error, `${employee.first} ${employee.last}`, 'We cannot get dependant employees');
  }
}

function* getEmployee(action) {
  const { employeeId } = action.payload;
  const employee = yield select(state => getChartEmployee(state, employeeId));

  try {
    yield put(getEmployeeLoading());
    yield put(push(ROUTES.employeeId(employeeId)));

    const [employee] = yield call(() => api.fetchEmployeeById(employeeId));
    yield put(getEmployeeSuccess(employee));
  } catch (error) {
    yield put(getEmployeeFailure());
    yield put(push(ROUTES.employees));
    openNotificationWithIcon(ICONS.error, `${employee.first} ${employee.last}`, `We couldn't get employee data`);
  }
}

function* getAllEmployees() {
  try {
    yield put(getAllEmployeesLoading());
    const employees = yield call(() => api.fetchEmployees({ offset: 0, limit: Number.MAX_SAFE_INTEGER }));

    const employeesWithHasChildren = parseEmployeesWithHasChildrens(employees);
    yield put(getAllEmployeesSuccess(parseEmployeesById(employeesWithHasChildren)));
  } catch (error) {
    yield put(getAllEmployeesFailure());
    openNotificationWithIcon(ICONS.error, `Employees error`, `We couldn't get all employees data`);
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
    console.error('Error in generator redirectToEmployeesFromEmployeeId', err);
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
