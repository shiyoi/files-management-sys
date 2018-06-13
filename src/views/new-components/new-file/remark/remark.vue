<style scoped lang="less">
@import './remark.less';
</style>
<template>
    <div class="basicInfo">
      <file-header text="备注"></file-header>
      <remark-content></remark-content>
    </div>        


</template>
<script>
import fileHeader from '../file-basic-info/file-header/file-header.vue';
import remarkContent from './remark-content/remark-content.vue';
export default {
  data: function () {
    return {};
  },
  components: {
    fileHeader,
    remarkContent
  },
  methods: {

  }
}
</script>

