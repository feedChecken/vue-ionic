<template>
   <div class="s-home">
       <mt-header class="s-home-header" fixed title="我的商铺">
          <mt-button v-link="'/'" icon="back" slot="left"></mt-button>
          <mt-button  slot="right">
              <i class="iconfont so-search" slot="icon"></i>
          </mt-button>
       </mt-header>
       <section class="s-body">

       </section>
        <mt-cell title="标题文字" v-link="{name:'homeItem',params:{itemId:233}}" is-link value="带链接">
        </mt-cell>
        <mt-cell title="登陆" v-link="{path:'/login'}" is-link >
        </mt-cell>
   </div>
</template>
<script>
    import Vue from 'vue';
    import {
        Cell
    } from 'mint-ui';
    Vue.component(Cell.name, Cell);
    export default {
        components: {

        }
    }
</script>
<style lang="scss" >
  @import "../sass/base/variable";
  $h-color:#FFFFFF;
    .s-home {
        .mint-header.s-home-header{
           background-color: $s-d-color;
           color: $h-color;
           h1.mint-header-title {
            color: $h-color;
          }
          .mint-button-icon {
            color: $h-color;
          }
        }

        .s-body{
            padding-top:45px;
        }
    }
</style>
