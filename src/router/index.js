import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'hash',
    routes: [
        {
            path: '',
            name: 'index',
            component: () =>
                import ( /* webpackChunkName: "index" */ '../page/index')
        },
        {
            path: '/index',
            name: 'index',
            component: () =>
                import ( /* webpackChunkName: "index" */ '../page/index')
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