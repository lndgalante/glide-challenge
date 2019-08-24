import { createAction } from 'redux-actions';

/* Employees */
export const getEmployeesRequest = createAction('GET_EMPLOYEES_REQUEST', employeeId => ({ employeeId }));
export const getEmployeesLoading = createAction('GET_EMPLOYEES_LOADING');
export const getEmployeesSuccess = createAction('GET_EMPLOYEES_SUCCESS', employees => ({ employees }));

/* Pagination */
export const setPaginationLimit = createAction('SET_PAGINATION_LIMIT', limit => ({ limit }));
export const setPaginationOffset = createAction('SET_PAGINATION_OFFSET', offset => ({ offset }));
