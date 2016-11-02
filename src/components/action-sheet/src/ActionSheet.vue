<template lang="html">
  <div class="ion-action-sheet" :class="['action-sheet-'+theme]">

    <div class="action-sheet-wrapper">
      <div class="action-sheet-container">
        <div class="action-sheet-group">
          <div class="action-sheet-title" v-text="title"></div>
          <button v-for="button of buttons" class="disable-hover action-sheet-button action-sheet-button-default"
                  @click="button.handler"
            :class="[button.role==='destructive'?'action-sheet-destructive':'','action-sheet-button-'+theme,'action-sheet-button-default-'+theme]">
            <span class="button-inner" v-text="button.text">
            </span>
            <div class="button-effect"></div>
          </button>
        </div>

        <div class="action-sheet-group">
          <button class="action-sheet-cancel disable-hover action-sheet-button action-sheet-button-default"
                  @click="cancel.handler"
                  :class="['action-sheet-button-'+theme,'action-sheet-button-default-'+theme]">
            <span class="button-inner" v-text="cancel.text"></span>
            <div class="button-effect"></div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="babel">
  import Vue from 'vue'

  export default Vue.extend({
    name:'ion-action-sheet',
    data(){
      return {
        title: 'hello vue',
        theme:'ios',
        buttons: [
          {
            text: 'Destructive',
            role: 'destructive',
            handler: () => {
              console.log('Destructive clicked');
            }
          },{
            text: 'Archive',
            handler: () => {
              console.log('Archive clicked');
            }
          }
        ],
        cancel:{
          text: 'Cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      }
    },
//    beforeCreate(){
//      debugger;
//    },
//    created(){
//      debugger;
//    },
//    beforeMount(){
//      debugger;
//    },
//    mounted(){
//      debugger;
//    },
    methods:{
      show(){
        let wrapper=this.$el.querySelector('.action-sheet-wrapper');

        wrapper.style.transform='translateY(0)';
      },
      hide(){
        let wrapper=this.$el.querySelector('.action-sheet-wrapper');
        wrapper.style.transform='translateY(100%)';
        setTimeout(()=>{
          this.$destroy();
        },500);
      }
    }
  });
</script>
<style lang="scss">

  @import "action-sheet";
  @import "action-sheet.ios";

  .action-sheet-wrapper{
    transition:all 0.5s ease-in-out;
  }
</style>