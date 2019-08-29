const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? ''
    : 'https://2jdg5klzl0.execute-api.us-west-1.amazonaws.com/default/EmployeesChart-Api';

const api = {
  fetchEmployees: async ({ offset = 0, limit = 0 } = {}) => {
    const response = await fetch(`${BASE_URL}?offset=${offset}&limit=${limit}`);
    const data = await response.json();

    return data;
  },
  fetchEmployeesByManagerId: async managerId => {
    const response = await fetch(`${BASE_URL}?manager=${managerId}`);
    const data = await response.json();

    return data;
  },
  fetchEmployeeById: async employeeId => {
    const response = await fetch(`${BASE_URL}?id=${employeeId}`);
    const data = await response.json();

    return data;
  },
};

export default api;
