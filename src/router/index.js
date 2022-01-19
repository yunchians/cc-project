import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: 'hash',
    routes: [
        {
            path: '',
            name: 'example',
            meta: {
                title: 'example'
            },
            component: () =>
                import ( /* webpackChunkName: "index" */ '../page/example'),
        },
        {
            path: '/index',
            name: 'index',
            meta: {
                title: 'index'
            },
            component: () =>
                import ( /* webpackChunkName: "index" */ '../page/index')
        },
        {
            path: '/day03',
            name: 'day03',
            meta: {
                title: 'Update CSS variable with JS'
            },
            component: () =>
                import ( /* webpackChunkName: "example" */ '../page/JavaScript30/day03')
        },
        {
            path: '/day04',
            name: 'day04',
            meta: {
                title: 'Array Cardio Day 1'
            },
            component: () =>
                import ( /* webpackChunkName: "example" */ '../page/JavaScript30/day04')
        },
        {
            path: '/example',
            name: 'example',
            meta: {
                title: 'example'
            },
            component: () =>
                import ( /* webpackChunkName: "example" */ '../page/example')
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    next()
})

export default router