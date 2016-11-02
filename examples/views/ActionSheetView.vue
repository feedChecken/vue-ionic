<template lang="html">
  <div class="view">
    <button color="assertive" v-on:click="onClick">click me</button>
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
          title:'确定删除吗',
          buttons:[
            {
              role:'destructive',
              text:'删除',
              handler(){
                console.log('remove')
              }
            },
            {

              text:'编辑',
              handler(){
                console.log('remove')
              }
            }
          ]
        });

        actionSheet.show();
      }
    }
  }
</script>
<style lang="scss">

</style>