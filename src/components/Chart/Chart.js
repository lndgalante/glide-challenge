import React from 'react';
import { Spin } from 'antd';
import PropTypes from 'prop-types';

/* Components */
import OrganizationChart from '../OrganizationChart';

const Chart = ({ isLoading, employees, onGetManagerEmployees, onGetEmployee }) => {
  return (
    <Spin spinning={isLoading}>
      <OrganizationChart data={employees} onAddNewChild={onGetManagerEmployees} onNodeClick={onGetEmployee} />
    </Spin>
  );
};

Chart.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  employees: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number })).isRequired,
  onGetEmployee: PropTypes.func.isRequired,
  onGetManagerEmployees: PropTypes.func.isRequired,
};

export default Chart;
