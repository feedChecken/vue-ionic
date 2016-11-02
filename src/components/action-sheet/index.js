import ActionSheet from './src/ActionSheet.vue'

/* istanbul ignore next */
ActionSheet.install = function (Vue) {
  Vue.component(ActionSheet.name, ActionSheet);
};

ActionSheet.create = function (option) {
  var actionsheet = new ActionSheet({
    el: document.createElement('div'),
    data: option
  });
  
  document.body.appendChild(actionsheet.$el);

  return actionsheet;
};

export default ActionSheet;