import { createAction } from 'redux-actions';

/* Manager Employees */
export const getManagerEmployeesRequest = createAction('GET_MANAGER_EMPLOYEES_REQUEST', managerId => ({ managerId }));
export const getManagerEmployeesLoading = createAction('GET_MANAGER_EMPLOYEES_LOADING');
export const getManagerEmployeesSuccess = createAction('GET_MANAGER_EMPLOYEES_SUCCESS', (employees, managerId) => ({
  employees,
  managerId,
}));
export const getManagerEmployeesFailure = createAction('GET_MANAGER_EMPLOYEES_FAILURE');

/* Employee */
export const getEmployeeRequest = createAction('GET_EMPLOYEE_REQUEST', employeeId => ({ employeeId }));
export const getEmployeeLoading = createAction('GET_EMPLOYEE_LOADING');
export const getEmployeeSuccess = createAction('GET_EMPLOYEE_SUCCESS', employee => ({ employee }));
export const getEmployeeFailure = createAction('GET_EMPLOYEE_FAILURE');

/* All Employees */
export const getAllEmployeesRequest = createAction('GET_ALL_EMPLOYEE_REQUEST');
export const getAllEmployeesLoading = createAction('GET_ALL_EMPLOYEE_LOADING');
export const getAllEmployeesSuccess = createAction('GET_ALL_EMPLOYEE_SUCCESS', employees => ({ employees }));
export const getAllEmployeesFailure = createAction('GET_ALL_EMPLOYEE_FAILURE');

/* Employee Childrens */
export const setEmployeeNoSubemployees = createAction('SET_EMPLOYEE_NO_SUBEMPLOYEES', employeeId => ({ employeeId }));

/* Pagination */
export const setPaginationLimit = createAction('SET_PAGINATION_LIMIT', limit => ({ limit }));
export const setPaginationOffset = createAction('SET_PAGINATION_OFFSET', offset => ({ offset }));
