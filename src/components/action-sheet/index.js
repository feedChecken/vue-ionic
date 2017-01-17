import Vue from 'vue';

let ActionSheetConstructor = Vue.extend(require('./src/action.sheet.vue'));
let instance;
let seed = 1;

let ActionSheet = function(options = {}) {
    let id = 'message_' + seed++;
    instance = new ActionSheetConstructor({
        data: options
    });
    instance.id = id;
    instance.vm = instance.$mount();
    document.body.appendChild(instance.vm.$el);
    instance.vm.open();
    instance.dom = instance.vm.$el;
};

export default ActionSheet;