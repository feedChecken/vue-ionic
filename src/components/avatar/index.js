/**
 * ion-avatar
 * @author xierenyuan@qq.com
 */
import Avatar from './src/avatar.vue';

Avatar.install = function() {
    Vue.component(Avatar.name, Avatar);
};

export default Avatar;