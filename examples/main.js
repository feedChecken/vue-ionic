import Vue from 'vue';
import VueRouter from 'vue-router';
import VueIonic from '../src';
Vue.use(VueIonic);
Vue.use(VueRouter);

//config
Vue.config.debug = true;

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [{
        path: '/',
        component: require('./App.vue'),
        children: [{
            path: '/button',
            component: require('./views/button.vue')
        }]
    }]
});

//启动
const app = new Vue({
    router
}).$mount('#app');
console.log('Hello');