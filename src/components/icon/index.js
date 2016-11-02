/**
 *  icon 组件
 * @author xierenyuan@qq.com  
 */

const Icon = require('./src/icon.vue');

/* istanbul ignore next */
Icon.install = function(Vue) {
    Vue.component(Icon.name, Icon);
};
module.exports = Icon;