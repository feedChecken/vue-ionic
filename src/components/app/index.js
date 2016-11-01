  const App = require('./src/app.vue');

  /* istanbul ignore next */
  App.install = function(Vue) {
      Vue.component(App.name, App);
  };
  module.exports = App;