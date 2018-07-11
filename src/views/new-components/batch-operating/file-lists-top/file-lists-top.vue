<style scoped lang="less">
@import './file-lists-top.less';
</style>
<template>
  <div class="list-top">
    <ul>
      <li @click="gotoExport"><Icon size="14" type="share"></Icon><span>导出</span></li>
      <li @click="refresh"><Icon size="14" type="android-sync"></Icon><span>刷新</span></li>
      <li><Icon size="14" type="android-print"></Icon><span>打印</span></li>
      <li @click="moveOutBatchOperation" style="width:120px;"><Icon size="14" type="forward"></Icon><span>移出批量操作</span></li>
      <li @click="clearList"><Icon size="14" type="trash-a"></Icon><span>清空</span></li>
    </ul>
    <!-- 清空列表成功弹窗 -->
    <Modal v-model="batchData.clearSuccessModal" :title="batchData.clearSuccessTitle" :mask-closable="false" width="620">
      <div class="searchBox">
        <div>列表清空成功！</div>     
      </div>

      <div slot="footer">
        <Button type="primary" @click="clearSuccess">确定</Button>
      </div>
    </Modal>   
    <!-- 移出批量操作成功弹窗 -->
    <Modal v-model="batchData.moveOutBatchModal" :title="batchData.moveOutBatchOperationTitle" :mask-closable="false" width="620">
      <div class="searchBox">
        <div>移出批量操作成功！</div>     
      </div>

      <div slot="footer">
        <Button type="primary" @click="moveOutBatchSuccess">确定</Button>
      </div>
    </Modal>     
    <!-- 批量导出弹窗 -->
    <Modal v-model="batchData.exportExcel" :title="batchData.exportBoxTitle" :mask-closable="false" width="620">
      <div class="searchBox">
        <div>您确定要将选定项导出Excel表格吗</div>     
      </div>

      <div slot="footer">
        <Button @click="exportExcelData" type="primary">确定</Button>
        <Button @click="batchData.exportExcel = false">取消</Button>
      </div>
    </Modal>    
  </div>
</template>

<script>
import {archiveType} from '@/libs/archive_type';
export default {
  props: ['checkedNum'],
  data: function () {
    return {
      batchData: {
        clearSuccessModal: false,
        clearSuccessTitle: '清空列表',
        moveOutBatchModal: false,
        moveOutBatchOperationTitle: '移出批量操作',
        exportExcel: false,
        exportBoxTitle: '批量导出'

      }
    };
  },
  methods: {
    clearList () {
      let formdata = new FormData();
      formdata.append('archiveType',archiveType[0].value);
      this.$axios.post('/common/batch/delete',formdata).then( (res) => {
        this.$emit('clearSuccess');
        this.batchData.clearSuccessModal = true;
      }).catch( (err) => {
      });
    },
    //移出批量操作
    moveOutBatchOperation () {
      this.$emit('moveOut');
    },
    //清空成功的确定按钮
    clearSuccess () {
      this.batchData.clearSuccessModal = false;
    },
    //移出批量操作成功的确定按钮
    moveOutBatchSuccess () {
      this.batchData.moveOutBatchModal = false;
    },
    //刷新
    refresh () {
      this.$emit('refresh');
    },
    //去导出（打开确认弹窗）
    gotoExport () {
      if (this.checkedNum === 0) {
        this.$Message.info({content: '请选择要导出的数据',duration:3,closable: true});
      } else {
        this.batchData.exportExcel =  true;        
      }
    },
    //导出
    exportExcelData () {
      this.batchData.exportExcel = false;
      this.$emit('exportExcelData');
    }


  }
}
</script>
