<style scoped lang="less">
@import './annex-upload-content.less';
</style>

<template>
<!-- 附件上传的body 组件 -->
  <div class="basic-info-con">
    <Upload
        multiple
        type="drag"
        action="//jsonplaceholder.typicode.com/posts/">
        <div style="padding: 20px 0">
            <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
            <p>点击或拖拽文件完成上传</p>
        </div>
    </Upload>                        
  </div>
</template>
<script>
export default {
  data: function () {
    return {

    };
  },
  components: {

  },
  methods: {

  }
}
</script>

