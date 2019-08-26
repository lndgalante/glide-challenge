import React from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';

/* Components */
import { Container } from './styled';

const Navbar = ({ isLoading, onGetAllEmployees }) => {
  return (
    <Container>
      <Button type='primary' loading={isLoading} onClick={onGetAllEmployees}>
        Display all employees
      </Button>
    </Container>
  );
};

Navbar.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onGetAllEmployees: PropTypes.func.isRequired,
};

export default Navbar;
