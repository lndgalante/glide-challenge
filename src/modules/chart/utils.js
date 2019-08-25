/* Constants */
import { MANAGERS } from '../../lib/constants';

const parseEmployeesById = employees => {
  return employees.reduce(
    (acc, employee) => ({
      ...acc,
      [employee.id]: {
        ...employee,
        title: `${employee.first} ${employee.last}`,
        ParentId: employee.manager === MANAGERS.CEO ? null : employee.manager,
      },
    }),
    {}
  );
};

export { parseEmployeesById };
