<style scoped lang="less">
@import './new-file.less';
</style>


<template>
  <div>
    <div class="new-file-con">
      <!-- 档案基本信息组件 -->
      <file-basic-info></file-basic-info>
    </div>
    <div class="new-file-con">
      <!-- 移交信息组件 -->
      <transfer-info></transfer-info>
    </div>
    <div class="new-file-con">
      <!-- 入库情况组件 -->
      <storage-situation></storage-situation>
    </div>  
    <div class="new-file-con">
      <!-- 附件长传组件 -->
      <annex-upload></annex-upload>
    </div>       
  </div>
</template>
<script>
// 引入档案基本信息组件
import fileBasicInfo from './file-basic-info/file-basic-info.vue';
// 引入移交信息组件
import transferInfo from './transfer-info/transfer-info.vue';
// 引入入库情况组件
import storageSituation from './storage-situation/storage-situation.vue';
// 附件长传组件
import annexUpload from './annex-upload/annex-upload.vue';
export default {
  data: function () {
    return {

    };
  },
  components: {
    fileBasicInfo,
    transferInfo,
    storageSituation,
    annexUpload

  }

}
</script>

