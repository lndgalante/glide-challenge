import { notification } from 'antd';

/* Constants */
import { MANAGERS } from '../../lib/constants';

const parseEmployeesById = employees => {
  return employees.reduce(
    (acc, employee) => ({
      ...acc,
      [employee.id]: {
        childrens: [],
        hasChildrens: true,
        root: employee.manager === MANAGERS.CEO,
        title: `${employee.first} ${employee.last}`,
        ParentId: employee.manager === MANAGERS.CEO ? null : employee.manager,
        ...employee,
      },
    }),
    {}
  );
};

const parseEmployeesWithHasChildrens = employees => {
  return employees.map(employee => {
    const hasChildrens = employees.some(emp => emp.manager === employee.id);
    return { ...employee, hasChildrens };
  });
};

const openNotificationWithIcon = (type, message, description) => {
  notification[type]({ message, description });
};

export { parseEmployeesById, parseEmployeesWithHasChildrens, openNotificationWithIcon };
