/**
 * 
 * @author xierenyuan@qq.com
 * @export 
 * 
 */

import './sass/ui.scss';
import 'ionicons/dist/css/ionicons.css';
import './themes/ionic.build.default.scss';

import util from './utils/util';
import Button from './components/button';

const VERSION = '0.0.1';

const DEFAULT_CONFIG = {
    theme: 'ios',
    version: VERSION
};

const install = function(Vue, opts = {}) {
    if (install.installed) return;
    Vue.component(Button.name, Button);
    Vue.prototype.$ionic = util.extend(DEFAULT_CONFIG, opts);
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
};

module.exports = {
    version: VERSION,
    install,
    Button
};