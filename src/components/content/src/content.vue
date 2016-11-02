<template>
    <section class="ion-content " :class="['content-'+theme]">
        <!--<div class="fixed-content">
             <slot name="ion-fixed,ion-fab"></slot>
        </div>-->
        <div class="scroll-content">
            <slot></slot>
        </div>
        <slot name="ion-refresher"></slot>
    </section>
</template>
<script>
    import ThemeMixin from 'src/minins/theme.mixins';
    export default {
        name: 'ion-content',
        mixins: [ThemeMixin]
    }
</script>
<style lang="scss">
    @import "./content.scss";
    @import "./content.ios.scss";
    @import "./content.md.scss";
    @import "./content.wp.scss";
</style>