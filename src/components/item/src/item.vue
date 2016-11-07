<template>
    <a class="item " :class="['item-'+theme]">
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
    import util from 'src/utils/util';
    import ItemMixin from './item.mixin';
    export default {
        name: 'ion-item',
        mixins: [ItemMixin],
        mounted() {
            this.init();
        },
        props: {
            type: {
                type: String,
                default: 'item'
            }
        },
        methods: {
            init() {
                let $el = this.$el;
                let detailNone = 'detail-none';
                let blockCls = 'item-block';
                let type = this.type;
                switch (type) {
                    case 'link':
                        //如果是link 需要连接 则设置有右边连接 所以如果存在detail-none 则移除
                        if ($el.hasAttribute(detailNone)) {
                            $el.removeAttribute(detailNone);
                        }
                        break;
                    default:
                        // a 链接 class  默认有 向右箭头  如何设置detail-none 则移除向右箭头
                        if (!$el.hasAttribute(detailNone)) {
                            $el.setAttribute(detailNone, '');
                        }
                        break;
                }

                //如果是默认情况下 则添加 class item-block divider 时 不需要添加
                if (!util.hasClass($el, blockCls) && type != 'divider') {
                    util.addClass($el, blockCls);
                }

                // 如果是 divider 类型 需要添加 class  ion-item-divider
                if (type == 'divider' && !util.hasClass($el, 'ion-item-divider')) {
                    util.addClass($el, 'ion-item-divider');
                }
            }
        }
    }
</script>
<style lang="scss">
    @import './item.scss';
    @import './item-media.scss';
    @import './item-reorder.scss';
    @import './item-sliding.scss';
    @import './item-sliding-test.scss';
    @import './item.ios.scss';
    @import './item.md.scss';
    @import './item.wp.scss';
</style>