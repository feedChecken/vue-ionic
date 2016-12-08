/**
 * ion-item 
 * @author xierenyuan@qq.com
 */

import Item from './src/item.vue';

Item.install = function(Vue) {
    Vue.component(Item.name, Item);
};

export default Item;