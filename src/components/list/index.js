/**
 * ion-list
 * @author xierenyuan@qq.com
 */
import List from './src/list.vue';
import ListHeader from './src/list.header.vue';

List.install = function(Vue) {
    Vue.component(List.name, List);
};

ListHeader.install = function(Vue) {
    Vue.component(ListHeader.name, ListHeader);
};

export {
    List,
    ListHeader
};