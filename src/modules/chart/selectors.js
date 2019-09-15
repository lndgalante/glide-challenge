import delve from 'dlv';

export const getChartEmployees = state => {
  return delve(state, 'chart.data');
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
