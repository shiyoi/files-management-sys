<style scoped lang="less">
@import './storage-situation.less';
</style>
<template>
    <div class="basicInfo">
      <file-header text="入库情况"></file-header>
      <storage-situation-content ref="child_ssc"></storage-situation-content>
    </div>        


</template>
<script>
import fileHeader from '../file-basic-info/file-header/file-header.vue';
import storageSituationContent from './storage-situation-content/storage-situation-content.vue';
export default {
  data: function () {
    return {};
  },
  components: {
    fileHeader,
    storageSituationContent
  },
  methods: {

  }
}
</script>

