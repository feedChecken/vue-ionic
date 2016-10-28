/**
 * 
 * @author xierenyuan@qq.com
 * @export 
 * 
 */

import './sass/ui.scss';
import 'ionicons/dist/css/ionicons.css';
import './themes/ionic.build.default.scss';

import Button from './components/button';

const install = function(Vue, opts = {}) {
    if (install.installed) return;
    Vue.component(Button.name, Button);
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
};

module.exports = {
    version: '0.0.1',
    install,
    Button
};