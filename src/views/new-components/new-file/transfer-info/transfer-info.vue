<style scoped lang="less">
@import './transfer-info.less';
</style>
<template>

    <div class="basicInfo">
      <file-header text="合同档案基本信息"></file-header>
    </div>        


</template>
<script>
import fileHeader from '../file-basic-info/file-header/file-header.vue';
export default {
  data: function () {
    return {};
  },
  components: {
    fileHeader
  },
  methods: {

  }
}
</script>

