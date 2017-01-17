<template>
    <ion-content>
        <ion-button @touchstart="hander" @click.native="hander" >哈哈哈111</ion-button>
    </ion-content>
</template>
<script>
    export default {
        methods: {
            hander() {
                this.$actionSheet();
            }
        }
    };
</script>