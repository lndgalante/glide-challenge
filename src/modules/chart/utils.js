const parseEmployeesById = employees => {
  return employees.reduce(
    (acc, employee) => ({
      ...acc,
      [employee.id]: {
        ...employee,
        title: `${employee.first} ${employee.last}`,
        ParentId: employee.manager === 0 ? null : employee.manager,
      },
    }),
    {}
  );
};

const getSubEmployeesById = (employees, employeeId) => {
  return employees.filter(employee => employee.manager !== employeeId).map(({ id }) => id);
};

export { parseEmployeesById, getSubEmployeesById };
