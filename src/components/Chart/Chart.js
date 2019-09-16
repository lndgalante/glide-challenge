import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';
import PropTypes from 'prop-types';

/* Components */
import { Container, EmployeesContainer, StyledTitle } from './styled';
/* Assets */
import { ReactComponent as PlusIcon } from '../../assets/plus.svg';
/* Constants */
import { MANAGERS } from '../../lib/constants';

const Chart = ({ isLoading, employees, onGetManagerEmployees, onGetEmployee }) => {
  const [ceo, setCeo] = useState(null);

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    for (const key in employees) {
      const employee = employees[key];
      if (employee.manager === MANAGERS.CEO) setCeo(employee);
    }
  }, [employees]);

  const renderChildrens = employee => {
    return (
      employee.childrens &&
      employee.childrens.map(nextId => {
        const findEmployee = employees[nextId];

        return (
          <li key={findEmployee.id}>
            <div className={`box ${findEmployee.hasChildrens ? 'has-childrens' : 'no-childrens'}`}>
              <p onClick={() => onGetEmployee(findEmployee.id)}>{findEmployee.title}</p>
              <button onClick={() => onGetManagerEmployees(findEmployee.id)}>
                <PlusIcon />
              </button>
            </div>
            {findEmployee.childrens.length > 0 && (
              <EmployeesContainer totalChildrens={employee.childrens.length}>
                {renderChildrens(findEmployee)}
              </EmployeesContainer>
            )}
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
        {ceo && (
          <div>
            <div className='box root'>
              <p onClick={() => onGetEmployee(ceo.id)}>{ceo.title}</p>
              <button onClick={() => onGetManagerEmployees(ceo.id)}>
                <PlusIcon />
              </button>
            </div>
            <EmployeesContainer totalChildrens={ceo.childrens.length}>{renderChildrens(ceo)}</EmployeesContainer>
          </div>
        )}
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
