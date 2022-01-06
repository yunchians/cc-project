import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            redirect: {
                name: 'index'
            }
        },
        {
            path: '/index',
            name: 'index',
            component: () =>
                import ( /* webpackChunkName: "index" */ '../page/index')
        },
        {
            path: '/queueTest',
            name: 'queueTest',
            component: () =>
                import ( /* webpackChunkName: "queueTest" */ '../page/queueTest')
        },
        {
            path: '/example',
            name: 'example',
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