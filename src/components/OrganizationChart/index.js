import React from 'react';
import RorgChart from 'r-orgchart';
import PropTypes from 'prop-types';

/* Styles */
import './index.css';

const OrganizationChart = ({ data, onAddNewChild }) => {
  return <RorgChart disableRootEdit data={data} addNewChild={onAddNewChild} />;
};

OrganizationChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      ParentId: PropTypes.number,
    })
  ).isRequired,
};

export default OrganizationChart;
