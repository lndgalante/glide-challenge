import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

/* Reducers */
import chart from '../modules/chart/reducer';

const createRootReducer = history => {
  const reducers = { router: connectRouter(history), chart };
  return combineReducers(reducers);
};

export default createRootReducer;
