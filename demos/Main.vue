<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
    @import './sass/rest.scss';
    @import './fonts/iconfont.css';
    @import './sass/common/common.scss';
    @import './sass/utill.scss';
    v-cloak {
        display: none;
    }
    
    .fade-transition {
        transition: opacity .3s ease;
    }
    
    .fade-enter,
    .fade-leave {
        opacity: 0;
    }
</style>