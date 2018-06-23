<style scoped lang="less">
@import './annex-upload-content.less';
</style>

<template>
<!-- 附件上传的body 组件 -->
  <div class="basic-info-con">
    <Upload
        multiple
        type="drag"
        action=""
        :before-upload="handleUpload">
        <div style="padding: 20px 0">
            <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
            <p>点击或拖拽文件完成上传</p>
        </div>
    </Upload> 
    <div v-for="(value,index) in files.uploadFile" :key="index">{{value.name}}<span style="display:inline-block;width:30px;height:20px;margin-left:50px;line-height:20px;cursor:pointer;" @click="cancel(files.uploadFile.indexOf(value))">移除</span></div>                       
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      files: {
        uploadFile: []
      }
    };
  },
  components: {

  },
  methods: {
    handleUpload (files) {
      this.files.uploadFile.push(files);
      console.log(this.files.uploadFile);
      return false;
    },
    cancel (index) {
      console.log(index);
      this.files.uploadFile.splice(index,1);
    }
  }
}
</script>

