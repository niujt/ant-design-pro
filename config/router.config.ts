export default [
  // user
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      { path: '/user', redirect: '/user/login' },
      { path: '/user/login', name: 'login', component: './user/login' },
    ],
  },
  // app
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    routes: [
      // dashboard
      { path: '/', redirect: '/dashboard/analysis', authority: ['admin', 'user'] },
      {
        path: '/dashboard',
        name: 'dashboard',
        icon: 'dashboard',
        routes: [
          {
            path: '/dashboard/analysis',
            name: 'analysis',
            component: './dashboard/analysis',
          },
        ],
      },
      // forms
      {
        path: '/form',
        icon: 'form',
        name: 'form',
        routes: [
          {
            path: '/form/basic-form',
            name: 'basic-form',
            component: './form/basic-form',
          },
          {
            path: '/form/step-form',
            name: 'step-form',
            component: './form/step-form',
            hideChildrenInMenu: true,
          },
          {
            path: '/form/advanced-form',
            name: 'advanced-form',
            authority: ['admin'],
            component: './form/advanced-form',
          },
        ],
      },
      // list
      {
        path: '/list',
        icon: 'table',
        name: 'list',
        routes: [
          {
            path: '/list/basic-list',
            name: 'basic-list',
            component: './list/basic-list',
          },
          {
            path: '/list/card-list',
            name: 'card-list',
            component: './list/card-list',
          },
        ],
      },
      {
        path: '/account',
        icon: 'user',
        name: 'account',
        routes: [
          {
            path: '/account/center',
            name: 'center',
            component: './account/center',
          },
          {
            path: '/account/settings',
            name: 'settings',
            component: './account/settings',
          },
        ],
      },
    ],
  },
];
