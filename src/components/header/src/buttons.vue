<template>
    <section class="ion-buttons" :class="[cTheme]">
        <slot></slot>
    </section>
</template>
<script>
    export default {
        name: 'ion-buttons',
        computed: {
            cTheme: function() {
                return `bar-buttons-${this.$ionic.theme}`;
            }
        }
    }
</script>