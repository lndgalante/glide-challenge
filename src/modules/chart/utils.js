/* Constants */
import { MANAGERS } from '../../lib/constants';

const parseEmployeesById = employees => {
  return employees.reduce(
    (acc, employee) => ({
      ...acc,
      [employee.id]: {
        hasChildrens: true,
        title: `${employee.first} ${employee.last}`,
        ParentId: employee.manager === MANAGERS.CEO ? null : employee.manager,
        ...employee,
      },
    }),
    {}
  );
};

export { parseEmployeesById };
