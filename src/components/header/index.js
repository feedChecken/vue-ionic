/**
 *  header 组件
 * @author xierenyuan@qq.com  
 */

import Header from './src/header.vue';
import Footer from './src/footer.vue';
import ToolBar from './src/toolbar.vue';
import Title from './src/title.vue';
import Buttons from './src/buttons.vue';

/* istanbul ignore next */
Header.install = function(Vue) {
    Vue.component(Header.name, Header);
};


Footer.install = function(Vue) {
    Vue.component(Footer.name, Footer);
};

ToolBar.install = function(Vue) {
    Vue.component(ToolBar.name, ToolBar);
};

Title.install = function(Vue) {
    Vue.component(Title.name, Title);
};

Buttons.install = function(Vue) {
    Vue.component(Buttons.name, Buttons);
};

module.exports = {
    Header,
    Footer,
    ToolBar,
    Title,
    Buttons
};