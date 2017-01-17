<template>
   <div class="ion-backdrop">
    </div>
</template>
<script>
    export default {
        name: 'ion-backdrop',
        methods: {
            setStyle(attr, val) {
                this.$el.style[attr] = val;
            }
        }
    };
</script>
<style lang="scss">
    @import './backdrop.scss';
</style>