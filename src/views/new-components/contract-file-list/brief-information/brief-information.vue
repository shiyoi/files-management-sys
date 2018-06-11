<style scoped lang="less">
@import './brief-information.less';
</style>
<template>
  <div class="brief-info-con">
    <div>
      <div>档案名称：</div>
      <div>{{ info.contractName }}</div>
    </div>
    <div>
      <div>创建者：</div>
      <div>{{ info.creatorId }}</div>      
    </div>
    <div>
      <div>储存：</div>
      <div>{{ savePosition }}</div>      
    </div>
    <div>
      <div>路径：</div>
      <div>集团档案/合同档案</div>      
    </div>
    <div>
      <div>创建时间：</div>
      <div>{{ info.createTm }}</div>      
    </div>
  </div>
</template>
<script>
export default {
  name: 'brief-informateion',
  props: ['info'],
  data: function () {
    return {};
  },
  computed: {
    //储存
    savePosition: function () {
      return `${this.info.archiveMaterialStock.archiveRoom} /
              ${this.info.archiveMaterialStock.cabinet} /
              ${this.info.archiveMaterialStock.columnNo} /
              ${this.info.archiveMaterialStock.rowNo} /
              ${this.info.archiveMaterialStock.piece}
      `;
    }
  },
  created: function () {
    console.log('-------------------------------------------');
  },
  actived: function () {
    console.log('+++++++++++++++++++++++++++++++++++++++++++++');
  }
}
</script>
