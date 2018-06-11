<style scoped lang="less">
@import './new-file.less';
</style>


<template>
<!-- 新建档案组件 -->
  <div class="new-file-con">
    <!-- 档案基本信息组件 -->
    <file-basic-info></file-basic-info>
  </div>
</template>
<script>
// 引入档案基本信息组件
import fileBasicInfo from './file-basic-info/file-basic-info.vue';
export default {
  data: function () {
    return {

    };
  },
  components: {
    fileBasicInfo
  }

}
</script>

