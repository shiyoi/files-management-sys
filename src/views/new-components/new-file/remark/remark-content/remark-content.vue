<style scoped lang="less">
@import './remark-content.less';
</style>

<template>
<!-- 备注的body 组件 -->
  <div class="basic-info-con">
    <Input type="textarea" v-model="remarkInfo.remark" :rows="4" placeholder="请输入备注信息" :maxlength="200"></Input>  
    <!-- <Input type="textarea" v-model="remarkInfo.remark" :rows="4" placeholder="请输入备注信息" :maxlength="200"></Input>                       -->
  </div>
</template>
<script>
export default {
  data: function () {
    return {  
      remarkInfo: {
        remark: ""
      }
    };
  },
  components: {

  },
  methods: {

  }
}
</script>

