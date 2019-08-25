import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Spin } from 'antd';

/* Components */
import OrganizationChart from '../OrganizationChart';
/* Actions */
import { getEmployeesRequest } from '../../modules/chart/actions';
/* Selectors */
import { getChartEmployees, getChartLoading } from '../../modules/chart/selectors';
/* Constants */
import { MANAGERS } from '../../lib/constants';

const Component = () => {
  const dispatch = useDispatch();
  const loaders = useSelector(getChartLoading);
  const employees = useSelector(getChartEmployees);

  useEffect(() => {
    dispatch(getEmployeesRequest(MANAGERS.CEO));
  }, [dispatch]);

  const getSubEmployees = id => dispatch(getEmployeesRequest(id));

  return (
    <div>
      <h1>Big Corp Chart</h1>
      <Spin spinning={loaders.employees}>
        <OrganizationChart data={employees} onAddNewChild={getSubEmployees} />
      </Spin>
    </div>
  );
};

export default Component;
