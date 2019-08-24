const ROUTES = {
  chart: '/chart',
  chartId: id => (id ? `/chart/${id}` : `/chart/:chartId`),
};

const MANAGERS = {
  CEO: 0,
};

export { ROUTES, MANAGERS };
