import React from 'react';
import { Spin } from 'antd';
import PropTypes from 'prop-types';

/* Components */
import { Container, StyledTitle } from './styled';
// import OrganizationChart from '../OrganizationChart';
/* Assets */
import { ReactComponent as PlusIcon } from '../../assets/plus.svg';

const Chart = ({ isLoading, employees, onGetManagerEmployees, onGetEmployee }) => {
  const renderChildrens = employee => {
    return (
      employee.childrens &&
      employee.childrens.map(nextId => {
        const findEmployee = employees.find(({ id }) => String(id) === nextId);

        return (
          <li key={findEmployee.id}>
            <div className={`box ${findEmployee.hasChildrens ? 'has-childrens' : 'no-childrens'}`}>
              <p onClick={() => onGetEmployee(findEmployee.id)}>{findEmployee.title}</p>
              <button onClick={() => onGetManagerEmployees(findEmployee.id)}>
                <PlusIcon />
              </button>
            </div>
            {findEmployee.childrens.length > 0 && <ul>{renderChildrens(findEmployee)}</ul>}
          </li>
        );
      })
    );
  };

  return (
    <Container>
      <StyledTitle>
        Organization
        <br />
        chart
      </StyledTitle>

      <Spin spinning={isLoading}>
        {employees.map(employee => {
          if (!employee.root) return null;

          return (
            <div>
              <div className='box root'>
                <p onClick={() => onGetEmployee(employee.id)}>{employee.title}</p>
                <button onClick={() => onGetManagerEmployees(employee.id)}>
                  <PlusIcon />
                </button>
              </div>
              <ul>{renderChildrens(employee)}</ul>
            </div>
          );
        })}

        {/* <OrganizationChart data={employees} onAddNewChild={onGetManagerEmployees} onNodeClick={onGetEmployee} /> */}
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
