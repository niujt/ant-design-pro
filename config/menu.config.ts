export default [
  {
    path: '/dashboard',
    name: 'dashboard',
    icon: 'dashboard',
    children: [
      {
        path: '/dashboard/analysis',
        name: 'analysis',
        exact: true,
      },
      {
        path: '/dashboard/monitor',
        name: 'monitor',
        exact: true,
      },
      {
        path: '/dashboard/workplace',
        name: 'workplace',
        exact: true,
      },
    ],
  },
];
