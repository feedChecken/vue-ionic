<template>
    <div v-clickoutside:touchstart="onSwipeMove"
         @click="onSwipeMove()" 
         @touchstart="onStartDrag"
         @touchmove="onDrag"
         @touchend="endDrag"
         class="ion-item-sliding item-wrapper" >
        <slot></slot>
    </div>
</template>
<script>
    import util from 'src/utils/util';
    import Clickoutside from 'src/utils/clickoutside';
    import {
        once
    } from 'wind-dom/src/event';
    export default {
        name: 'ion-item-sliding',
        directives: {
            Clickoutside
        },
        data() {
            return {
                start: {
                    x: 0,
                    y: 0
                }
            }
        },
        mounted() {
            let children = this.$children;
            for (const child of children) {
                if (child.componentName === 'ionItem') {
                    this.itemComponent = child;
                }
                if (child.componentName === 'ionItemOptions') {
                    this.itemOptionsComponent = child;
                }
            }
            if (!this.itemComponent) {
                throw new Error('ion-item-sliding 组件下必须包含 ion-item');
            }
            this.itemWrap = this.itemComponent.$el;
            this.rightWrap = this.itemOptionsComponent.$el;
            this.rightWidth = this.itemOptionsComponent.width();
        },
        methods: {
            translate3d(offset) {
                return `translate3d(${offset}px, 0, 0)`;
            },
            onSwipeMove() {
                console.log('onSwipeMove');
            },
            onStartDrag(evt) {
                console.log('onStartDrag', evt);
            },
            onDrag(evt) {
                console.log('onDrag', evt);
            },
            endDrag(evt) {
                console.log('endDrag', evt);
            }

        }
    }
</script>