import Item from './src/item.vue';

Item.install = function() {
    Vue.component(Item.name, Item);
};

export default Item;