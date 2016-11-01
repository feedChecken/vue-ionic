<template>
    <header class="ion-header" :class="[cTheme]">
        <slot></slot>
    </header>
</template>
<script>
    export default {
        name: 'ion-header',
        computed: {
            cTheme: function() {
                return `header-${this.$ionic.theme}`;
            }
        }
    }
</script>
<style lang="scss">
    .ion-header {
        top: 0;
    }
</style>