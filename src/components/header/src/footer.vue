<template>
    <footer class="ion-footer" :class="[cTheme]">
       <slot></slot>
    </footer>
</template>
<script>
    export default {
        name: 'ion-footer',
        computed: {
            cTheme: function() {
                return `footer-${this.$ionic.theme}`;
            }
        }
    }
</script>
<style lang="scss">
    .ion-footer {
        bottom: 0;
    }
</style>