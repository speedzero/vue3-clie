const routes = [
  {
    path: '/',
    name: 'template',
    component: () => import('@/layout/index.vue'),
    redirect: '/template',
    children: [
      {
        path: '/template',
        name: '页面1',
        component: () => import('@/views/template/index.vue')
      }
    ]
  }
]

export { routes }
