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
        },
        //书籍列表
        {
          path: 'booklist',
          name: 'booklist',
          component: () =>
            import ('@/components/views/books/booklist')
        },
        {
          path: 'editbook',
          name: 'editbook',
          component: () =>
            import ('@/components/views/books/editbook')
        }
        //添加分类
        ,
        {
          path: 'addclass',
          name: 'addclass',
          component: () =>
            import('@/components/views/bookclass/addclass')
        },
        //添加轮播图
        , {
          path: 'addswper',
          name: 'addswper',
          component: () =>
            import('@/components/views/swper/addswper')
        }
        //修改个人信息
        ,
        {
          path: 'editadmin',
          name: "editadmin",
          component: () =>
            import('@/components/views/admin/editadmin')
        }
        //测试页面
        ,
        {
          path: 'uploadimg',
          name: 'uploadimg',
          component: () =>
            import ('@/components/views/test/uploadimg')
        },
        //修改轮播图信息
        ,
        {
          path: "editswper",
          name: "editswper",
          component: () =>
            import ('@/components/views/swper/editswper')
        }
        //查看书籍详情
        , {
          path: 'bookdetail',
          name: "bookdetail",
          component: () =>
            import('@/components/views/books/bookdetail')
        },
        //添加书籍到分类
        {
          path: 'addbooktoclass',
          name: 'addbooktoclass',
          component: () =>
            import('@/components/views/bookclass/addbooktoclass')
        }


      ]
    }
  ]
})
