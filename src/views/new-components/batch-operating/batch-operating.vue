<style scoped lang="less">
@import './batch-operating.less';
</style>
<template>
<!-- 档案列表组件 -->
  <div>
    gfdgdfgfd
  </div>

</template>
<script>
export default {

  data: function () {
    return {};
  },
  components: {

  },
  methods: {
    handleSelectAll (statusDesc) {
      this.$refs.selection.selectAll(statusDesc);
    }
  },


  //生命周期钩子函数
  created: function () {
    
  },
  beforeCreate: function () {
      //alert('beforeCreate');
  },
  activated: function () {



  },
  deactivated: function () {
      //alert('停用');
  }
}
</script>
