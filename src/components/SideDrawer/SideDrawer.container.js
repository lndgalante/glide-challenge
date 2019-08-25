import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import { Typography } from 'antd';
import PropTypes from 'prop-types';

/* Components */
import SideDrawer from './SideDrawer';
/* Selectors */
import { getChartEmployee, getChartLoading } from '../../modules/chart/selectors';
/* Constants */
import { MANAGERS, ROUTES } from '../../lib/constants';

const SideDrawerContainer = ({ employeeId, placement }) => {
  const loaders = useSelector(getChartLoading);
  const employee = useSelector(state => getChartEmployee(state, employeeId));
  const manager = useSelector(state => getChartEmployee(state, employee.manager));

  const dispatch = useDispatch();
  const handleCloseDrawer = () => dispatch(push(ROUTES.employees));

  const sideDrawerContent = (
    <div>
      {employee.manager !== MANAGERS.CEO && manager && (
        <div>
          <Typography.Text strong>Responds to: </Typography.Text>
          <Typography.Text>
            {manager.first} {manager.last}
          </Typography.Text>
        </div>
      )}
      {employee.office && (
        <div>
          <Typography.Text strong>Works on office: </Typography.Text>
          <Typography.Text>{employee.office}</Typography.Text>
        </div>
      )}
      <div>
        <Typography.Text strong>From department: </Typography.Text>
        <Typography.Text>{employee.department}</Typography.Text>
      </div>
    </div>
  );

  return (
    <SideDrawer
      visible
      closable
      title={employee.title}
      isLoading={loaders.employee}
      placement={placement}
      children={sideDrawerContent}
      onCloseDrawer={handleCloseDrawer}
    ></SideDrawer>
  );
};

SideDrawerContainer.propTypes = {
  employeeId: PropTypes.string.isRequired,
  placement: PropTypes.string,
};

SideDrawerContainer.defaultProps = {
  placement: 'right',
};

export default SideDrawerContainer;
