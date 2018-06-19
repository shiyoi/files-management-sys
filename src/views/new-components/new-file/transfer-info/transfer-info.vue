<style scoped lang="less">
@import './transfer-info.less';
</style>
<template>
    <div class="basicInfo">
      <file-header text="移交信息"></file-header>
      <transfer-info-content ref="child_tic"></transfer-info-content>
    </div>        


</template>
<script>
import fileHeader from '../file-basic-info/file-header/file-header.vue';
import transferInfoContent from './transfer-info-content/transfer-info-content.vue';
export default {
  data: function () {
    return {

    };
  },
  components: {
    fileHeader,
    transferInfoContent
  },
  methods: {

  }
}
</script>

