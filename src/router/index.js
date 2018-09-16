import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const components = {
  login: () =>
    import ('@/components/views/login/login'),
  index: () =>
    import ('@/components/views/index/index'),
  adminlist: () =>
    import ('@/components/views/admin/adminlist'),
  home: () =>
    import ('@/components/views/index/home'),
  addadmin: () =>
    import ('@/components/views/admin/addadmin'),
  swperlist: () =>
    import ('@/components/views/swper/swperlist'),
  classlist: () =>
    import('@/components/views/bookclass/classlist'),
  classdetail: () =>
    import('@/components/views/bookclass/classdetail')

}

export default new Router({
  routes: [{
      path: '/',
      name: 'login',
      component: components.login
    },
    {
      path: '/home',
      name: 'home',
      redirect: '/home/index',
      component: components.home,

      children: [{
          path: 'index',
          name: 'index',
          component: components.index

        },
        {
          path: 'adminlist',
          name: 'adminlist',
          component: components.adminlist
        },
        {
          path: 'addadmin',
          name: 'addadmin',
          component: components.addadmin
        },
        {
          //轮播图列表
          path: 'swperlist',
          name: 'swperlist',
          component: components.swperlist

        },
        {
          //分类列表
          path: 'classlist',
          name: 'classlist',
          component: components.classlist
        },
        //分类详情
        {
          path: 'classdetail',
          name: 'classdetail',
          component: components.classdetail

        },
        //添加书籍
        {
          path: 'addbook',
          name: 'addbook',
          component: () =>
            import ('@/components/views/books/addbook')

        },
        //修改分类
        , {
          path: 'changeclass',
          name: 'changeclass',
          component: () =>
            import ('@/components/views/bookclass/changeclass')
        }


      ]
    }
  ]
})