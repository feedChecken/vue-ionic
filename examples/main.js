import Vue from 'vue';
import VueRouter from 'vue-router';
import VueIonic from '../src';
Vue.use(VueIonic, {
    theme: 'ios'
});
Vue.use(VueRouter);

//config
Vue.config.debug = true;

const children = [{
    path: '/button',
    component: require('./views/button.vue')
}, {
    path: '/header',
    component: require('./views/header.vue')
}, {
    path: '/label',
    component: require('./views/label.vue')
}];
children.push({
    path: '/list',
    component: require('./views/list/list.vue')
});

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [{
        path: '/',
        component: require('./App.vue'),
        children: children
    }]
});

//启动
const app = new Vue({
    router
}).$mount('#app');