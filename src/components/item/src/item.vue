<template>
    <a class="item " :class="['item-'+theme]">
        <div class="item-inner">
            <div class="input-wrapper">
                <slot name="ion-label"></slot>
                <ion-label ref="label" v-if="viewLabel">
                    <slot></slot>
                </ion-label>
            </div>
        </div>
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
    @import './item.ios.scss';
    @import './item.md.scss';
    @import './item.wp.scss';
</style>