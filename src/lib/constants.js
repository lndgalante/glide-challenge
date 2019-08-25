const ROUTES = {
  employees: '/employees',
  employeeId: id => (id ? `/employees/${id}` : `/employees/:employeeId`),
};

const MANAGERS = {
  CEO: 0,
};

export { ROUTES, MANAGERS };
