import React from 'react';
import delve from 'dlv';
import PropTypes from 'prop-types';

/* Actions */
import Container from './styled';
import Chart from '../../components/Chart';
import Navbar from '../../components/Navbar';
import SideDrawer from '../../components/SideDrawer';

const Employees = ({ match }) => {
  const employeeId = delve(match, 'params.employeeId');

  return (
    <Container>
      <Navbar></Navbar>
      <Chart />
      {employeeId && <SideDrawer employeeId={employeeId} />}
    </Container>
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
