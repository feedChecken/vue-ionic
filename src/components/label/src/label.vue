<template>
    <label class="ion-label" :class="['label-'+theme,aColor]">
        <slot></slot>
    </label>
</template>
<script>
    import ThemeMixin from 'src/minins/theme.mixins';
    export default {
        name: 'ion-label',
        mixins: [ThemeMixin],
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