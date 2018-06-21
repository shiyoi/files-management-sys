<style scoped lang="less">
@import './remark-content.less';
</style>

<template>
<!-- 备注的body 组件 -->
  <div class="basic-info-con">
    <Input v-model="remarkInfo.remark" type="textarea" :rows="4" autosize="remarkInfo.obj" :maxlength="400" placeholder="Enter something..."></Input>                      
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      remarkInfo: {
        remark: "some text",
        obj: { minRows: 2, maxRows: 6 }
      }
    };
  },
  components: {

  },
  methods: {

  }
}
</script>

