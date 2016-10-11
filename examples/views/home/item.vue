<template>
   <div>
       <mt-header :fixed="true" title="标题过长会隐藏后面的内容啊哈哈哈哈">
            <mt-button v-link="'/'" icon="back" slot="left">返回</mt-button>
            <mt-button @click="show()" icon="more" slot="right"></mt-button>
       </mt-header>
        <h1>子列表</h1>{{$route.params.itemId }}
        <mt-actionsheet :actions="actions" :visible.sync="sheetVisible">
        </mt-actionsheet>
   </div>
</template>
<script>
    import Vue from 'vue';
    import {
        Header,
        Button,
        Actionsheet
    } from 'mint-ui';
    Vue.component(Header.name, Header);
    Vue.component(Button.name, Button);
    Vue.component(Actionsheet.name, Actionsheet);
    export default {
        data() {
                return {
                    sheetVisible: false,
                    actions: [{
                        name: '拍照',
                        method: this.takePhoto
                    }, {
                        name: '从相册中选择',
                        method: this.openAlbum
                    }]
                }
            },
            methods: {
                takePhoto() {
                    console.log('taking photo');
                },
                openAlbum() {
                    console.log('opening album');
                },
                show() {
                    this.sheetVisible = true;
                }
            }
    };
</script>