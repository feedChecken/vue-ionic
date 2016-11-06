<template>
    <div class="ion-item-options">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'ion-item-options',
        data() {
            return {
                componentName: 'ionItemOptions'
            }
        },
        methods: {
            width() {
                let elRef = this.$slots.default || [];
                let width = 0;
                for (const el of elRef) {
                    if (el.tag != undefined) {
                        width += el.elm.getBoundingClientRect().width;
                    }
                }
                return width;
            }
        }
    }
</script>