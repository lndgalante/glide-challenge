import delve from 'dlv';

export const getChartEmployees = state => {
  const employees = delve(state, 'chart.data');
  return Object.entries(employees).map(([key, value]) => value);
};

export const getChartEmployee = (state, employeeId) => {
  return delve(state, ['chart', 'data', employeeId]);
};
export const getChartLoading = state => {
  return delve(state, 'chart.loading');
};

export const getChartPagination = state => {
  return delve(state, 'chart.pagination');
};
