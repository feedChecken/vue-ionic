<template>
   <div class="ion-backdrop">
    </div>
</template>
<script>
    import util from 'src/utils/util';
    const disableCls = 'pointer--none';
    const enableCls = 'pointer--auto';
    export default {
        name: 'ion-backdrop',
        methods: {
            setStyle(attr, val) {
                this.$el.style[attr] = val;
            },
            disableClick() {
                let $el = this.$el;
                util.hasClass($el, enableCls) && util.removeClass($el, enableCls);
                util.addClass($el, disableCls);
            },
            enableClick() {
                let $el = this.$el;
                util.hasClass($el, disableCls) && util.removeClass($el, disableCls);
                util.addClass($el, enableCls);
            }
        }
    };
</script>
<style lang="scss">
    @import './backdrop.scss';
    .pointer--none {
        pointer-events: none;
    }
    
    .pointer--auto {
        pointer-events: auto;
    }
</style>