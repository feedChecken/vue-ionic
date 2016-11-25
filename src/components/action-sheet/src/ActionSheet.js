import Vue from 'vue'
import "./action-sheet.scss";
import "./action-sheet.ios.scss";
import "./action-sheet.md.scss";

export default Vue.component('ion-action-sheet',{
  template: `<div @click="onSheetClick" class="ion-action-sheet" :class="['action-sheet-'+theme]">

    <div class="action-sheet-wrapper">
      <div class="action-sheet-container">
        <div class="action-sheet-group">
          <div class="action-sheet-title" v-text="title"></div>
          <button v-for="button of buttons" 
          class="disable-hover action-sheet-button action-sheet-button-default" 
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
  </div>`,
  data(){
    return {
      title: 'hello vue',
      theme: 'ios',
      buttons: [
        {
          text: 'Destructive',
          role: 'destructive',
          handler: function () {
            alert('Destructive clicked');
          }
        }, {
          text: 'Archive',
          handler: function () {
            alert('Archive clicked');
          }
        }
      ],
      cancel: {
        text: 'Cancel',
        handler: function () {
          alert('Cancel clicked');
        }
      }
    }
  },
  methods: {
    onSheetClick(){

      this.hide();
    },
    show(){
      let wrapper = this.$el.querySelector('.action-sheet-wrapper');
      
      wrapper.style.transform = 'translateY(0)';
    },
    hide(){
      let wrapper = this.$el.querySelector('.action-sheet-wrapper');
      wrapper.style.transform = 'translateY(100%)';
      setTimeout(function () {
        this.$destroy();
      }.bind(this), 500);
    }
  }
});

 