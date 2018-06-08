<style scoped lang="less">
    @import './left-small-icon.less';
</style>
<template>
<div :style="{width:'60px',height:'49px'}">
  <Icon :type="type" :title="title" style="color:#fff;margin-top:18px;margin-left:23px;cursor:pointer;">dr</Icon>
  </div>
</template>
<script>
export default {
  name: 'left-small-icon',
  props: ['type','title'],
  data : function () {
    return {};
  },
  //钩子函数
  created: function () {
    // console.log(this.type,this.title);
  }
}
</script>
