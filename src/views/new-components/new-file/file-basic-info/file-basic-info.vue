<style lang="less">
@import './file-basic-info.less';
</style>
<template>
  <div>
    <file-basic-info-header text="合同档案基本信息"></file-basic-info-header>
    <file-basic-info-content></file-basic-info-content>
  </div>
</template>
<script>
import fileBasicInfoHeader from './file-basic-info-header/file-basic-info-header.vue';
import fileBasicInfoContent from './file-basic-info-content/file-basic-info-content.vue';
export default {
  data: function () {
    return {};
  },
  components: {
    fileBasicInfoHeader,
    fileBasicInfoContent
  },
  methods: {

  }
}
</script>

