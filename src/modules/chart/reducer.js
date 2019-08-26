import { handleActions } from 'redux-actions';

/* Actions */
import {
  getManagerEmployeesLoading,
  getManagerEmployeesSuccess,
  getEmployeeLoading,
  getEmployeeSuccess,
  setPaginationLimit,
  setPaginationOffset,
  getAllEmployeesLoading,
  getAllEmployeesSuccess,
} from './actions';

/* Initial State */
const INITIAL_STATE = {
  data: {},
  pagination: { offset: 0, limit: 1 },
  loading: { managerEmployees: false, employee: false, allEmployees: false },
};

const chartReducer = handleActions(
  {
    /* Manager Employees */
    [getManagerEmployeesLoading]: (state, action) => ({
      ...state,
      loading: { ...state.loading, managerEmployees: true },
    }),
    [getManagerEmployeesSuccess]: (state, action) => {
      const { employees } = action.payload;

      return {
        ...state,
        data: { ...state.data, ...employees },
        loading: { ...state.loading, managerEmployees: false },
      };
    },

    /* Employee */
    [getEmployeeLoading]: (state, action) => ({
      ...state,
      loading: { ...state.loading, employee: true },
    }),
    [getEmployeeSuccess]: (state, action) => {
      const { employees } = action.payload;

      return {
        ...state,
        data: { ...state.data, ...employees },
        loading: { ...state.loading, employee: false },
      };
    },

    /* All Employees */
    [getAllEmployeesLoading]: (state, action) => ({
      ...state,
      loading: { ...state.loading, allEmployees: true },
    }),
    [getAllEmployeesSuccess]: (state, action) => {
      const { employees } = action.payload;

      return {
        ...state,
        data: { ...state.data, ...employees },
        loading: { ...state.loading, allEmployees: false },
      };
    },

    /* Pagination */
    [setPaginationLimit]: (state, action) => {
      const { limit } = action.payload;

      return {
        ...state,
        pagination: { ...state.pagination, limit },
      };
    },
    [setPaginationOffset]: (state, action) => {
      const { offset } = action.payload;

      return {
        ...state,
        pagination: { ...state.pagination, offset },
      };
    },
  },
  INITIAL_STATE
);

export default chartReducer;
