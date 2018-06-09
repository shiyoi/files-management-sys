<style scoped lang="less">
@import './file-lists-top.less';
</style>
<template>
  <div class="list-top">
    <ul>
      <li><Icon size="14" type="search"></Icon><span>搜索</span></li>
      <li><Icon size="14" type="plus"></Icon><span>新建</span></li>
      <li style="width:90px;"><Icon size="14" type="reply-all"></Icon><span>批量导入</span></li>
      <li><Icon size="14" type="share"></Icon><span>导出</span></li>
      <li><Icon size="14" type="android-sync"></Icon><span>刷新</span></li>
      <li><Icon size="14" type="android-print"></Icon><span>打印</span></li>
      <li><Icon size="14" type="social-dropbox"></Icon><span>迁移</span></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'file-lists-top'
}
</script>

