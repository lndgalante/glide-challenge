import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route, Redirect } from 'react-router-dom';

/* Styles */
import 'antd/dist/antd.css';
/* Pages */
import Employees from './pages/Employees';
/* Redux */
import { configureStore, history } from './store';
/* Helpers */
import * as serviceWorker from './lib/serviceWorker';
/* Consntants */
import { ROUTES } from './lib/constants';

serviceWorker.register();
const store = configureStore();

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path={ROUTES.employees} render={Employees} />
        <Route exact path={ROUTES.employeeId()} render={Employees} />
        <Route exact path='*' render={() => <Redirect to={ROUTES.employees} />} />
      </Switch>
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(<App />, document.querySelector('#root'));
