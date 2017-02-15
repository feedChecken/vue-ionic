import Vue from 'vue';
import utils from 'src/utils/util';
const AlertConstructor = Vue.extend(require('./src/alert.vue'));

let instance;
let instances = [];
let speed = 1;

/**
 * 
 * alert 消息框
 * @param {any} options  可以传入单个objec 或者单个消息
 */
function Alert(options) {
    options = options || {};
    if (utils.isString(options)) {
        options = {
            message: options
        };
    }

    let id = 'ion_alert_' + speed;
    let userOnClose = options.onClose;

    options.close = function() {
        Alert.close(id, userOnClose);
    };

    instance = new AlertConstructor({
        data: options
    });
    instance.id = id;
    instance.vm = instance.$mount();
    instance.dom = instance.vm.$el;
    document.body.appendChild(instance.dom);
    instance.vm.open();
    instances.push(instance);

}

Alert.close = function(id, userOnClose) {
    for (let i = 0, len = instances.length; i < len; i++) {
        let instance = instances[i];
        if (id === instance.id) {
            if (utils.isFunction(userOnClose)) {
                userOnClose(instance);
            }
            instances.splice(i, 1);
            break;
        }
    }
};

export default Alert;