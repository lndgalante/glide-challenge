import { createAction } from 'redux-actions';

/* Employees */
export const getManagerEmployeesRequest = createAction('GET_MANAGER_EMPLOYEES_REQUEST', managerId => ({ managerId }));
export const getManagerEmployeesLoading = createAction('GET_MANAGER_EMPLOYEES_LOADING');
export const getManagerEmployeesSuccess = createAction('GET_MANAGER_EMPLOYEES_SUCCESS', employees => ({ employees }));

/* Employee */
export const getEmployeeRequest = createAction('GET_EMPLOYEE_REQUEST', employeeId => ({ employeeId }));
export const getEmployeeLoading = createAction('GET_EMPLOYEE_LOADING');
export const getEmployeeSuccess = createAction('GET_EMPLOYEE_SUCCESS', employees => ({ employees }));

/* Pagination */
export const setPaginationLimit = createAction('SET_PAGINATION_LIMIT', limit => ({ limit }));
export const setPaginationOffset = createAction('SET_PAGINATION_OFFSET', offset => ({ offset }));
