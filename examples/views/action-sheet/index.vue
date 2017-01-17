<template>
    <ion-content>
        <ion-button @click.native="hander"  >哈哈哈111</ion-button>
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
            }
        }
    };
</script>