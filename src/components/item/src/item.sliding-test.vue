<template>
    <div v-clickoutside:touchstart="onSwipeMove" @click="onSwipeMove()" @touchstart="onStartDrag" @touchmove="onDrag"
         @touchend="endDrag"
         class="ion-item-sliding-test item-wrapper" :class="[dragging ? 'active-slide active-options-right' : '' ]">
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
        name: 'ion-item-sliding-test',
        directives: {
            Clickoutside
        },
        data() {
            return {
                start: {
                    x: 0,
                    y: 0
                },
                dragging: false
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
            this.optionsWraper = this.$el;//替代itemWrap 整体移动
            this.rightWrap = this.itemOptionsComponent.$el;
            this.rightWidth = this.itemOptionsComponent.width();
            this.rightWrap.style.webkitTransform = this.translate3d(this.rightWidth);
            this.rightDefaultTransform = this.translate3d(this.rightWidth);
        },
        methods: {
            translate3d(offset) {
                return `translate3d(${offset}px, 0, 0)`;
            },
            onSwipeMove(offset = 0) {
                console.log('onSwipeMove');
                this.optionsWraper.style.webkitTransform = this.translate3d(offset);
                if (offset === 0) {
                    this.dragging = false;
                    this.start.x = 0;
                    this.start.y = 0;
                    this.offsetLeft = 0;
                }
                this.swiping = true;
            },
            onStartDrag(evt) {
                console.log('onStartDrag');
                evt = evt.changedTouches ? evt.changedTouches[0] : evt;
                this.dragging = true;
                this.start.x = evt.pageX;
                this.start.y = evt.pageY;
            },
            onDrag(evt) {
                if (this.opened) {
                    !this.swiping && this.onSwipeMove(0);
                    this.opened = false;
                    return;
                }
                if (!this.dragging) return;
                let swiping;
                const e = evt.changedTouches ? evt.changedTouches[0] : evt;
                const offsetTop = e.pageY - this.start.y;
                const offsetLeft = this.offsetLeft = e.pageX - this.start.x;
                const x = Math.abs(offsetLeft);
                // 只做了 向从右到左 滑动  所以如果是从左到右滑 不处理
                if (offsetLeft > 0 || x > this.rightWidth || !this.rightWidth) {
                    return;
                }
                const y = Math.abs(offsetTop);
                swiping = !(x < 5 || (x >= 5 && y >= x * 1.73));
                if (!swiping) return;
                evt.preventDefault();
                this.onSwipeMove(offsetLeft);
            },
            endDrag(evt) {
                console.log('endDrag');
                if (!this.swiping) return;
                //如果 this.offsetLeft > 0 是从左向右滑动 小于0 是从右到左滑动
                this.swipeLeaveTransition(this.offsetLeft > 0 ? 1 : -1);
            },
            swipeLeaveTransition(direction) {
                setTimeout(() => {
                    this.swipeLeave = true;
                    const oLeft = Math.abs(this.offsetLeft);
                    console.log('oLeft', oLeft);
                    //从右到左滑动 如果滑动的距离超过按钮组的百分之40 则 显示出按钮来
                    if (direction < 0 && oLeft > this.rightWidth * 0.4) {
                        this.onSwipeMove(-this.rightWidth);
                        this.swiping = false;
                        this.opened = true;
                        return;
                    }
                    console.log('233 334');
                    this.onSwipeMove(0);
                    /*once(this.optionsWraper, 'webkitTransitionEnd', _ => {
                     console.log('233');
                     this.optionsWraper.style.webkitTransform = this.rightDefaultTransform;
                     //this.rightWrap.style.webkitTransform = this.rightDefaultTransform;
                     this.swipeLeave = false;
                     this.swiping = false;
                     });*/
                }, 0);
            }

        }
    }
</script>