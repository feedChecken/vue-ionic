<template>
    <div class="ion-app" :class="[cTheme]">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'ion-app',
        computed: {
            cTheme: function() {
                return `${this.$ionic.theme}`;
            }
        }
    }
</script>
<style lang="scss">
    @import './app.scss';
    @import './app.ios.scss';
    @import './app.md.scss';
</style>