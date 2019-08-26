import React from 'react';
import { Button } from 'antd';

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

export default Navbar;
