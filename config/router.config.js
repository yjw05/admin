export default [
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      { path: '/user', redirect: '/user/login' },
      { path: '/user/login', component: '/User/LoginForm' },
    ],
  },
  {
    path: '/',
    component: '../layouts/BasicLayout',
    authority: ['admin', 'user'],
    routes: [{ path: '/', component: './' }],
  },
];
