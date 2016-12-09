<template>
    <div class="ion-list-header item " :class="['item-'+theme,'list-header-'+theme]">
        <div class="item-inner">
            <div class="input-wrapper">
                <slot name="ion-label"></slot>
                <ion-label ref="label" >
                    <slot></slot>
                </ion-label>
                <slot name="item-content"></slot>
            </div>
            <slot name="item-right"></slot>
        </div>
        <div class="button-effect"></div>
    </div>
</template>
<script>
    import ItemMixin from '../../item/src/item.mixin';
    export default {
        name: 'ion-list-header',
        mixins: [ItemMixin]
    }
</script>