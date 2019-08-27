import React from 'react';
import RorgChart from '@lndgalante/r-orgchart';
import PropTypes from 'prop-types';

const OrganizationChart = ({
  data,
  isAnimationEnabled,
  isNodeEditionDisabled,
  isRootEditionDisabled,
  onNodeClick,
  onAddNewChild,
}) => {
  return (
    <RorgChart
      data={data}
      animation={isAnimationEnabled}
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
  isAnimationEnabled: PropTypes.bool,
};

OrganizationChart.defaultProps = {
  isRootEditionDisabled: true,
  isNodeEditionDisabled: true,
  isAnimationEnabled: true,
};

export default OrganizationChart;
