import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

/* Components */
import Chart from './Chart';
/* Actions */
import { getManagerEmployeesRequest, getEmployeeRequest } from '../../modules/chart/actions';
/* Selectors */
import { getChartEmployees, getChartLoading } from '../../modules/chart/selectors';
/* Constants */
import { MANAGERS } from '../../lib/constants';

const ChartContainer = () => {
  const loaders = useSelector(getChartLoading);
  const employees = useSelector(getChartEmployees);

  const dispatch = useDispatch();
  const handleGetEmployee = id => dispatch(getEmployeeRequest(id));
  const handleGetManagerEmployees = id => dispatch(getManagerEmployeesRequest(id));

  useEffect(() => {
    dispatch(getManagerEmployeesRequest(MANAGERS.CEO));
  }, [dispatch]);

  return (
    <Chart
      employees={employees}
      isLoading={loaders.managerEmployees}
      onGetEmployee={handleGetEmployee}
      onGetManagerEmployees={handleGetManagerEmployees}
    />
  );
};

export default ChartContainer;
