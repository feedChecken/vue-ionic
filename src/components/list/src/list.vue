<template>
    <div class="ion-list" :class="['list-'+theme]">
        <slot></slot>
    </div>
</template>
<script>
    import ThemeMixin from 'src/minins/theme.mixins';
    export default {
        name: 'ion-list',
        mixins: [ThemeMixin]
    }
</script>
<style lang="scss">
    @import './list.scss';
    @import './list.ios.scss';
    @import './list.md.scss';
    @import './list.wp.scss';
</style>