import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route, Redirect } from 'react-router-dom';

/* Styles */
import 'antd/dist/antd.css';
/* Pages */
import Chart from './pages/Chart';
/* Redux */
import { configureStore, history } from './store';
/* Consntants */
import { ROUTES } from './lib/constants';

const store = configureStore();

const Challenge = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path={ROUTES.chart} render={Chart} />
          <Route exact path='*' render={() => <Redirect to={ROUTES.chart} />} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
};

ReactDOM.render(<Challenge />, document.querySelector('#root'));
