<style scoped lang="less">
@import './batch-operating.less';
</style>
<template>
<!-- 批量操作组件 -->
  <div class="right-main-page">
    <fileListsTop :checkedNum="checkedNum" ref="batchFileListTop" @clearSuccess="clearSuccess" @moveOut="moveOut" @refresh="refreshBatchList" @exportExcelData="exportExcelData"></fileListsTop>
      <Table highlight-row @on-current-change="handleRowChange" @on-select="selectOneRow" @on-select-all="selectAllRow" @on-selection-change="selectionChange" border ref="selection" :columns="columns4" :data="batchOperationData"></Table>
  </div>

</template>
<script>
import fileListsTop from './file-lists-top/file-lists-top.vue';
import {archiveType} from '@/libs/archive_type';//引入档案类型
export default {

  data: function () {
    return {
        columns4: [
            {
                type: 'selection',
                width: 60,
                align: 'center',
                fixed: 'left'
            },
            {
                title: '合同编号',
                key: 'contractNo',
                width: 100
            },
            {
                title: '合同名称',
                key: 'contractName',
                width: 100
            },
            {
                title: '腾邦签署主体',
                key: 'signedSubject',
                width: 110
            },
            {
                title: '档案归属',
                key: 'groupCompany',
                width: 100
            },
            {
                title: '业务内容摘要',
                key: 'businessBrief',
                width: 110
            },
            {
                title: '对方公司名称',
                key: 'oppositeCompany',
                width: 110
            },            
            {
                title: '类别',
                key: 'enteringType',
                width: 110
            },
            {
                title: '状态',
                key: 'statusDesc',
                width: 80
            },
            {
                title: '档案室',
                key: 'archiveRoom',
                width: 100
            },
            {
                title: ' 柜号',
                key: 'cabinet',
                width: 60
            },   
            {
                title: ' 列号',
                key: 'columnNo',
                width: 60
            }, 
            {
                title: ' 行号',
                key: 'rowNo',
                width: 60
            }, 
            {
                title: ' 件号',
                key: 'piece',
                width: 60
            },                                                
        ],      
        batchOperationData: [],   
        checkBoxSelectedData: [],//已选  复选框 的数组           
    };
  },
    computed: {
        checkedNum () {
        return this.checkBoxSelectedData.length;
    }
},  
  components: {
    fileListsTop
  },
  methods: {
    handleSelectAll (statusDesc) {
      this.$refs.selection.selectAll(statusDesc);
    },
    handleRowChange () {

    },
    getSelectedDataLength () {
        return this.checkBoxSelectedData.length;
    },
    selectOneRow (selection,row) {
        this.checkBoxSelectedData = selection;
    },
    selectAllRow (selection) {
        this.checkBoxSelectedData = selection;
    },
    selectionChange (selection) {
        this.checkBoxSelectedData = selection;
    },
    getBatchOperatingData () {
        let formdata = new FormData();
        formdata.append('archiveType',archiveType[0].value);
        //loading 中
        let msgTxt = this.$Message.loading({
            content: 'Loading...',
            duration: 0
        });
        this.$axios.post('/common/batch/find',formdata).then( (res) => {
            this.batchOperationData = res.data.data;
            for (let v of this.batchOperationData) {
                v.archiveRoom = v.hasOwnProperty('archiveMaterialStock') ? v.archiveMaterialStock.archiveRoom : '';
                v.cabinet = v.hasOwnProperty('archiveMaterialStock') ? v.archiveMaterialStock.cabinet : '';
                v.columnNo = v.hasOwnProperty('archiveMaterialStock') ? v.archiveMaterialStock.columnNo : '';
                v.rowNo = v.hasOwnProperty('archiveMaterialStock') ? v.archiveMaterialStock.rowNo : '';
                v.piece = v.hasOwnProperty('archiveMaterialStock') ? v.archiveMaterialStock.piece : '';
            }
            setTimeout(msgTxt, 0);//取消loading
            console.log(this.batchOperationData);
        }).catch( (err) => {
            setTimeout(msgTxt, 0);//取消loading
            console.log('获取批量操作接口数据失败',err);
        });
    },
    clearSuccess () {
        this.batchOperationData = [];
    },
    moveOut () {
        if (this.getSelectedDataLength() <= 0) {
            this.$Message.info({content: '请选择要移出的数据',duration:3,closable: true});
        } else {
            let formdata = new FormData();
            formdata.append('archiveType',archiveType[0].value);
            for (let v of this.checkBoxSelectedData) {
                formdata.append('archiveNos',v.archiveNo);
            }
            this.$axios.post('/common/batch/delete',formdata).then( (res) => {
                this.getBatchOperatingData();
                this.checkBoxSelectedData = [];
                this.$refs.batchFileListTop.clearData.moveOutBatchModal = true; 
            }).catch( (err) => {

            });
        }
    },
    //刷新批量操作列表
    refreshBatchList () {
        this.getBatchOperatingData();
    },
    //批量导出
    exportExcelData () {
        let formdata = new FormData();
        formdata.append('archiveType',this.checkBoxSelectedData[0].archiveBarcode.archiveType);
        let arr = [];
        for (let v of this.checkBoxSelectedData) {
            arr.push(v.archiveNo);
        }
        formdata.append('archiveNos',arr);
        formdata.append('operateDesc','BATCH');
        this.$axios({
            method: 'post',
            url: '/common/export',
            data: formdata,
            responseType: 'blob'
        }).then( res => {
            console.log(res);
            let blob = res.data
            let reader = new FileReader()
            reader.readAsDataURL(blob)
            reader.onload = (e) => {
                let a = document.createElement('a')
                a.download = 'excel.xlsx';//fileName
                a.href = e.target.result
                document.body.appendChild(a)
                a.click()
                document.body.removeChild(a)
            }
        }).catch( err => {
            console.log('下载文件失败'+err);
        });          
    }
  },


  //生命周期钩子函数
  created: function () {
      this.getBatchOperatingData();
  },
  beforeCreate: function () {
      //alert('beforeCreate');
  },
  activated: function () {



  },
  deactivated: function () {
      //alert('停用');
  }
}
</script>
