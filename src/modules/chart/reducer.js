import { handleActions } from 'redux-actions';

/* Actions */
import { getEmployeesLoading, getEmployeesSuccess, setPaginationLimit, setPaginationOffset } from './actions';

/* Initial State */
const INITIAL_STATE = {
  data: {},
  loading: { employees: false },
  pagination: { offset: 0, limit: 1 },
};

const chartReducer = handleActions(
  {
    /* Employees */
    [getEmployeesLoading]: (state, action) => ({
      ...state,
      loading: { ...state.loading, employees: true },
    }),
    [getEmployeesSuccess]: (state, action) => {
      const { employees } = action.payload;

      return {
        ...state,
        data: { ...state.data, ...employees },
        loading: { ...state.loading, employees: false },
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
