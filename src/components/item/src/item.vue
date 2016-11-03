<template>
    <a class="item item-block" :class="['item-'+theme]">
        <slot name="item-left"></slot>
        <div class="item-inner">
            <div class="input-wrapper">
                <slot name="ion-label"></slot>
                <ion-label ref="label" v-if="viewLabel">
                    <slot></slot>
                </ion-label>
                <slot name="item-content"></slot>
            </div>
            <slot name="item-right"></slot>
        </div>
        <div class="button-effect"></div>
    </a>
</template>
<script>
    import ItemMixin from './item.mixin';
    export default {
        name: 'ion-item',
        mixins: [ItemMixin]
    }
</script>
<style lang="scss">
    @import './item.scss';
    @import './item-media.scss';
    @import './item-reorder.scss';
    @import './item-sliding.scss';
    @import './item.ios.scss';
    @import './item.md.scss';
    @import './item.wp.scss';
</style>