<style scoped lang="less">
@import './batch-operating.less';
</style>
<template>
<!-- 批量操作组件 -->
  <div class="right-main-page">
    <fileListsTop></fileListsTop>
      <Table highlight-row @on-current-change="handleRowChange" border ref="selection" :columns="columns4" :data="data1"></Table>
  </div>

</template>
<script>
import fileListsTop from './file-lists-top/file-lists-top.vue';
export default {

  data: function () {
    return {
        columns4: [
            {
                type: 'selection',
                width: 60,
                align: 'center'
            },
            {
                title: '合同编号',
                key: 'contractNo'
            },
            {
                title: '合同名称',
                key: 'contractName'
            },
            {
                title: '腾邦签署主体',
                key: 'signedSubject'
            },
            {
                title: '档案归属',
                key: 'groupCompany'
            },
            {
                title: '业务内容摘要',
                key: 'businessBrief'
            },
            {
                title: '对方公司名称',
                key: 'oppositeCompany'
            },            
            {
                title: '类别',
                key: 'enteringType'
            },
            {
                title: '状态',
                key: 'statusDesc'
            },
            {
                title: '档案室',
                key: 'archiveRoom'
            },
            {
                title: ' 柜号',
                key: 'cabinet'
            },   
            {
                title: ' 列号',
                key: 'columnNo'
            }, 
            {
                title: ' 行号',
                key: 'rowNo'
            }, 
            {
                title: ' 件号',
                key: 'piece'
            },                                                
        ],      
        data1: [
            {
                contractNo: 'AHU889001231',
                contractName: 'xxxxx公司xxxx业务合同',
                signedSubject: 'xxxxx单位名称',
                groupCompany: '腾邦国际',
                businessBrief:'这是内容摘要这是内...',
                oppositeCompany: 'xxxxxx公司',
                enteringType:'电子扫描件',
                statusDesc:'已收文',
                archiveRoom: "五楼档案室",
                cabinet: "2",
                columnNo: "3",
                rowNo: "3",
                piece: "22"
            },
            {
                contractNo: 'AHU889001231',
                contractName: 'xxxxx公司xxxx业务合同',
                signedSubject: 'xxxxx单位名称',
                groupCompany: '腾邦国际',
                businessBrief:'这是内容摘要这是内...',
                oppositeCompany: 'xxxxxx公司',
                enteringType:'电子扫描件',
                statusDesc:'已收文',
                archiveRoom: "五楼档案室",
                cabinet: "2",
                columnNo: "3",
                rowNo: "3",
                piece: "22"
            },                         
        
        ],      
    };
  },
  components: {
    fileListsTop
  },
  methods: {
    handleSelectAll (statusDesc) {
      this.$refs.selection.selectAll(statusDesc);
    },
    handleRowChange () {

    }
  },


  //生命周期钩子函数
  created: function () {
    
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
