import 'ionicons-pre/css/ionicons.min.css';
import Vue from 'vue';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';

import Main from './Main.vue';
import VueRouter from 'vue-router';
import RouterConfig from './config/router.config';
Vue.config.debug = true;
//引入ui 插件
Vue.use(MintUI);

//router
Vue.use(VueRouter);
const router = new VueRouter({
    hashbang: true,
    history: false,
    saveScrollPosition: true,
    suppressTransitionError: true,
    linkActiveClass: 'is-selected'
});
//init router
RouterConfig(router);

//启动
 router.start(Main, '#app')

