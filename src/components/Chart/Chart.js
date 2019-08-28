import React from 'react';
import { Spin } from 'antd';
import PropTypes from 'prop-types';

/* Components */
import { Container, StyledTitle } from './styled';
import OrganizationChart from '../OrganizationChart';

const Chart = ({ isLoading, employees, onGetManagerEmployees, onGetEmployee }) => {
  return (
    <Container>
      <StyledTitle>
        Organization
        <br />
        chart
      </StyledTitle>
      <Spin spinning={isLoading}>
        <OrganizationChart data={employees} onAddNewChild={onGetManagerEmployees} onNodeClick={onGetEmployee} />
      </Spin>
    </Container>
  );
};

Chart.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  employees: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number })).isRequired,
  onGetEmployee: PropTypes.func.isRequired,
  onGetManagerEmployees: PropTypes.func.isRequired,
};

export default Chart;
