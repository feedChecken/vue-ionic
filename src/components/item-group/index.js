import ItemGroup from '../item/src/item.group.vue';

ItemGroup.install = function() {
    Vue.component(ItemGroup.name, ItemGroup);
};

export default ItemGroup;