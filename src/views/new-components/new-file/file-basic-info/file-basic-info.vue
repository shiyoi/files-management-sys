<style scoped lang="less">
@import './file-basic-info.less';
</style>
<template>
    <div class="basicInfo">
      <file-header text="合同档案基本信息"></file-header>
      <file-basic-info-content ref="child_fbic"></file-basic-info-content>
    </div>        
</template>
<script>
import fileHeader from './file-header/file-header.vue';//导入列表头的操作功能
import fileBasicInfoContent from './file-basic-info-content/file-basic-info-content.vue';
export default {
  data: function () {
    return {};
  },
  components: {
    fileHeader,
    fileBasicInfoContent
  },
  methods: {

  }
}
</script>

