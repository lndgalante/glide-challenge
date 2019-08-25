import React from 'react';
import RorgChart from '@lndgalante/r-orgchart';
import PropTypes from 'prop-types';

const OrganizationChart = ({ isNodeEditionDisabled, isRootEditionDisabled, data, onAddNewChild, onNodeClick }) => {
  return (
    <RorgChart
      data={data}
      disableRootEdit={isRootEditionDisabled}
      disableEditNodes={isNodeEditionDisabled}
      onNodeClick={onNodeClick}
      addNewChild={onAddNewChild}
    />
  );
};

OrganizationChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      ParentId: PropTypes.number,
    })
  ).isRequired,
  onNodeClick: PropTypes.func.isRequired,
  onAddNewChild: PropTypes.func.isRequired,
  isRootEditionDisabled: PropTypes.bool,
  isNodeEditionDisabled: PropTypes.bool,
};

OrganizationChart.defaultProps = {
  isRootEditionDisabled: true,
  isNodeEditionDisabled: true,
};

export default OrganizationChart;
