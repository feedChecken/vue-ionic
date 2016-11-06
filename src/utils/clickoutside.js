/**
 * v-clickoutside
 * @desc 点击元素外面才会触发的事件
 * <div v-clickoutside="handleClose">
 */
const clickoutsideContext = '@@clickoutsideContext';

export default {
    bind(el, binding, vnode) {
        const documentHandler = function(e) {
            if (vnode.context && !el.contains(e.target)) {
                vnode.context[el[clickoutsideContext].methodName]();
            }
        };
        el[clickoutsideContext] = {
            documentHandler,
            methodName: binding.expression,
            arg: binding.arg || 'click'
        };
        document.addEventListener(el[clickoutsideContext].arg, documentHandler);
    },

    update(el, binding) {
        el[clickoutsideContext].methodName = binding.expression;
    },

    unbind(el) {
        document.removeEventListener(
            el[clickoutsideContext].arg,
            el[clickoutsideContext].documentHandler);
    },

    install(Vue) {
        Vue.directive('clickoutside', {
            bind: this.bind,
            unbind: this.unbind
        });
    }
};