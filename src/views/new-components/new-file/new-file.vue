<style scoped lang="less">
@import './new-file.less';
</style>

<template>
  <div>
    <div class="new-file-con"><file-basic-info></file-basic-info></div><!-- 档案基本信息组件 -->
    <div class="new-file-con"><transfer-info></transfer-info></div><!-- 移交信息组件 -->
    <div class="new-file-con"><storage-situation></storage-situation></div><!-- 入库情况组件 -->
    <div class="new-file-con"><annex-upload></annex-upload></div><!-- 附件上传组件 -->   
    <div class="new-file-con"><remark></remark></div><!-- 备注组件 -->   
    <div class="new-file-con" style="margin-bottom:150px;"><bottomBotton></bottomBotton></div><!-- 底部按钮组件 -->            
  </div>
</template>

<script>
  import fileBasicInfo from './file-basic-info/file-basic-info.vue';// 引入档案基本信息组件
  import transferInfo from './transfer-info/transfer-info.vue';// 引入移交信息组件
  import storageSituation from './storage-situation/storage-situation.vue';// 引入入库情况组件
  import annexUpload from './annex-upload/annex-upload.vue';// 引入附件长传组件
  import remark from './remark/remark.vue';// 引入备注组件
  import bottomBotton from './bottom-botton/bottom-botton.vue';// 引入底部按钮组件
  export default {
    data: function () {
      return {

      };
    },
    components: {
      fileBasicInfo,
      transferInfo,
      storageSituation,
      annexUpload,
      remark,
      bottomBotton

    }

  }
</script>

