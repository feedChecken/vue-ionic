<template>
	<label class="ion-label" v-if="viewLabel" :class="['label-'+theme,aColor]">
        <slot></slot>
    </label>
</template>
<script>
    import ThemeMixin from 'src/minins/theme.mixins';
    import util from 'src/utils/util';
    export default {
        name: 'ion-label',
        mixins: [ThemeMixin],
        data() {
            return {
                viewLabel: true
            }
        },
        beforeMount() {
            //如果slot 没有值 则隐藏该label 不管任何label 的是
            if (util.isUndefined(this.$slots.default)) {
                this.viewLabel = false;
            }
        },
        computed: {
            aColor: function() {
                return `label-${this.theme}-${this.color}`;
            }
        }
    }
</script>
<style lang="scss">
    @import './label.scss';
    @import './label.ios.scss';
    @import './label.md.scss';
    @import './label.wp.scss';
</style>