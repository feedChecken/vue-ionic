<template>
  <div>
    <router-view transition="fade" transition-mode="out-in" keep-alive></router-view>
    <img :src="imgUrl" alt="">
    <mt-tabbar v-if="isApp" :fixed="true" class="s-tab-bar" >
      <mt-tab-item id="首页" v-link="{ path: '/home' }">
        <i slot="icon" class="ion-home"></i>
        商家首页
      </mt-tab-item>
      <mt-tab-item id="订单" v-link="{ path: '/order' }">
        <i slot="icon" class="ion-ios-cart"></i>
        订单
      </mt-tab-item>
      <mt-tab-item id="凹凸凹" @click="ao" >
        <i slot="icon" class="ion-qr-scanner"></i>
        凹凸凹
      </mt-tab-item>
     <mt-tab-item id="附近" v-link="{ path: '/found' }">
        <i slot="icon" class="ion-location"></i>
        附近
      </mt-tab-item>
      <mt-tab-item id="我的" v-link="{ path:'/my' }" >
        <i slot="icon" class="ion-ios-bookmarks"></i>
        众筹
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
    import {
        Toast
    } from 'mint-ui';
    import img from './assets/logo.png';
    export default {
        data() {
                return {
                    isApp: true,
                    imgUrl: img,
                };
            },
            methods: {
                ao: function() {
                    Toast('我是凹凸凹');
                    navigator.camera.getPicture(imageData => {
                        Toast('拍照成功！');
                        this.imgUrl = `data:image/jpeg;base64,${imageData}`;
                        Toast('地址:' + this.imgUrl);
                    }, message => {
                        Toast(`拍照失败${message}！`);
                    }, {
                        quality: 20,
                        allowEdit: true,
                        destinationType: Camera.DestinationType.DATA_URL
                    });
                }
            }
    }
</script>
<style lang="scss" scope>
    .r {
        width: 100px;
        height: 100px;
        background: url(./assets/logo.png);
    }
</style>