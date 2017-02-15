<template>
    <ion-content>
        <ion-button @click.native="hander"  >哈哈哈111</ion-button>
        <p>
            <ion-button @click.native="onAlert"  >basic alert</ion-button>
        </p>
    </ion-content>
</template>
<script>
    export default {
        methods: {
            hander() {
                this.$actionSheet({
                    title: 'i am Action Sheet',
                    buttons: [{
                        text: '删除',
                        type: 'del',
                        handler: () => {
                            console.log('删除');
                        }
                    }, {
                        text: '确定',
                        handler: () => {
                            console.log('确定');
                        }
                    }]
                });
            },
            onAlert() {
                this.$alert({
                    title: 'hi i am a title',
                    message: 'alert content'
                });
            }
        }
    };
</script>