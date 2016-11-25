<template lang="html">
  <div class="view">
    <ion-button @touchstart="onClick">click me</ion-button>

    <ion-action-sheet></ion-action-sheet>
  </div>
</template>
<script lang="babel">
  import ActionSheet from '../../src/components/action-sheet'

  export default{
    data(){
      return {
        msg: 'hello vue'
      }
    },
    methods: {
      onClick(){
        var actionSheet=ActionSheet.create({
          title:'确定删除吗'
        });

        actionSheet.show();
      }
    }
  }
</script>
<style lang="scss">

</style>