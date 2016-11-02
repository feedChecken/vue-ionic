  /**
   *  通用 样式引入组件  【项目必须】
   * @author xierenyuan@qq.com  
   */

  const App = require('./src/app.vue');

  /* istanbul ignore next */
  App.install = function(Vue) {
      Vue.component(App.name, App);
  };
  module.exports = App;