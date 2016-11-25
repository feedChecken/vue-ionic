/**
 * @author William Du
 * @email parox2014@gmail.com
 * @qq 515344469
 */

import ActionSheet from './src/ActionSheet'


ActionSheet.create = function (option) {
  let actionSheet = new ActionSheet({
    data: option
  });
  
  actionSheet.$mount();
  
  document.body.appendChild(actionSheet.$el);
  
  return actionSheet;
};


/* istanbul ignore next */
ActionSheet.install = function (Vue) {
  Vue.component(ActionSheet.name, ActionSheet);
};
export default ActionSheet;