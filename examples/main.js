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

children.push({
    path: '/thumbnail',
    component: require('./views/list/thumbnails.vue')
});

children.push({
    path: '/avatar',
    component: require('./views/list/avatar.vue')
});

children.push({
    path: '/divider',
    component: require('./views/list/divider.vue')
});


children.push({
    path: '/sliding',
    component: require('./views/list/sliding.vue')
});

children.push({
    path: '/sliding1',
    component: require('./views/list/sliding1.vue')
});

children.push({
    path: '/input',
    component: require('./views/input/input.vue')
});

children.push({
    path: '/input1',
    component: require('./views/input/input.1.vue')
});

children.push({
    path: '/inputFloating',
    component: require('./views/input/input.floating.vue')
});

children.push({
    path: '/inputStacked',
    component: require('./views/input/input.stacked.vue')
});

children.push({
    path: '/textarea',
    component: require('./views/input/textarea.vue')
});

children.push({
    path: '/actionSheet',
    component: require('./views/action-sheet/index.vue')
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