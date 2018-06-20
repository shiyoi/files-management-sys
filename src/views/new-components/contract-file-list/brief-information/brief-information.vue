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
      <div>{{ path }}</div>      
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
    props: ['info','path'],
    data: function () {
      return {};
    },
    computed: {
      //储存
      savePosition: function () {
        if (this.info.archiveMaterialStock.archiveRoom === '' || this.info.archiveMaterialStock.cabinet === '' || this.info.archiveMaterialStock.columnNo === '' || this.info.archiveMaterialStock.rowNo === '' || this.info.archiveMaterialStock.piece === '') {
          return '暂无数据';
        } else {
          return `${this.info.archiveMaterialStock.archiveRoom} /
                  ${this.info.archiveMaterialStock.cabinet} /
                  ${this.info.archiveMaterialStock.columnNo} /
                  ${this.info.archiveMaterialStock.rowNo} /
                  ${this.info.archiveMaterialStock.piece}
          `;
        }

      }
    },
    created: function () {
      
    },
    actived: function () {
      
    }
  };
</script>
