const ROUTES = {
  employees: '/employees',
  employeeId: id => (id ? `/employees/${id}` : `/employees/:employeeId`),
};

const MANAGERS = {
  CEO: 0,
};

const ICONS = {
  info: 'info',
  error: 'error',
  success: 'success',
  warning: 'warning',
};

export { ROUTES, MANAGERS, ICONS };
