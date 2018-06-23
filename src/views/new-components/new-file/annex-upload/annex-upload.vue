<style scoped lang="less">
@import './annex-upload.less';
</style>
<template>
    <div class="basicInfo">
      <file-header text="附件上传"></file-header>
      <annex-upload-content ref="child_auc"></annex-upload-content>
    </div>        


</template>
<script>
import fileHeader from '../file-basic-info/file-header/file-header.vue';
import annexUploadContent from './annex-upload-content/annex-upload-content.vue';
export default {
  data: function () {
    return {};
  },
  components: {
    fileHeader,
    annexUploadContent
  },
  methods: {

  }
}
</script>

