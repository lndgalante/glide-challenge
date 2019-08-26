import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

/* Components */
import Navbar from './Navbar';
/* Actions */
import { getAllEmployeesRequest } from '../../modules/chart/actions';
/* Selectors */
import { getChartLoading } from '../../modules/chart/selectors';

const NavbarContainer = () => {
  const dispatch = useDispatch();
  const loaders = useSelector(getChartLoading);

  const handleGetAllEmployees = id => dispatch(getAllEmployeesRequest());

  return <Navbar isLoading={loaders.allEmployees} onGetAllEmployees={handleGetAllEmployees} />;
};

export default NavbarContainer;
