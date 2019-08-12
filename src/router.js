import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            // redirect: '/login'
            redirect: '/dashboard'
        },
        {
            path: '/',
            component: resolve => require(['./components/Home.vue'], resolve),
            meta: {
                title: '自述文件',
                requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
            },
            children: [{
                    path: '/dashboard',
                    component: resolve => require(['./pages/Dashboard.vue'], resolve),
                    meta: {
                        title: '系统首页'
                    }
                },
                {
                    path: '/production',
                    component: resolve => require(['./pages/Production.vue'], resolve),
                    meta: {
                        title: '生产计划列表'
                    }
                },
                {
                    path: '/orderinfo',
                    component: resolve => require(['./pages/Orderinfo.vue'], resolve),
                    meta: {
                        title: '订单信息列表'
                    }
                },
                {
                    path: '/customer',
                    component: resolve => require(['./pages/Customer.vue'], resolve),
                    meta: {
                        title: '客户列表'
                    }
                }

            ]
        },
        {
            path: '/login',
            component: resolve => require(['./pages/login.vue'], resolve)
        },
    ]
})