import React from 'react';
import delve from 'dlv';
import PropTypes from 'prop-types';

/* Actions */
import Chart from '../components/Chart';
import SideDrawer from '../components/SideDrawer';

const Employees = ({ match }) => {
  const employeeId = delve(match, 'params.employeeId');

  return (
    <main>
      <Chart />
      {employeeId && <SideDrawer employeeId={employeeId} />}
    </main>
  );
};

Employees.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      employeeId: PropTypes.string,
    }),
  }),
};

export default Employees;
