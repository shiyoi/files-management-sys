<style scoped lang="less">
  @import './contract-file-borrow-annex-ope.less';
</style>
<template>
  <!-- 借阅信息 -->
<div>
  <div style="background:#eaeff0;margin-bottom:20px;height:20px;line-height:20px;color:#02aadb;text-indent:20px;">借阅登记成功！请打印或下载您需要的附件。（打印的数量不可大于填单页填写的数量）</div>
  <div class="file-details-con">    
    
    <file-header text="附件操作"></file-header>
    <div class="basic-info-con">
      <Table border :columns="annexOperationColumns" :data="annexOperationData" size="small"></Table>
    </div>  
  </div>
</div>  
</template>
<script>
import fileHeader from '../new-file/file-basic-info/file-header/file-header.vue';
export default {
  name:"contract-file-borrow-annex-ope", 
  data: function () {
    return {
      annexOperationColumns: [
        {
          title: '附件名称',
          key: 'fileName'
        },
        {
          title: '附件格式',
          key: 'annexFormat'
        },
        {
          title: '打印份数',
          key: 'annexPrintNum'
        }               
      ],
      annexOperationData: [{
        fileName: "档案内附件1",
        annexFormat: "jpg",
        annexPrintNum: "2",
      }]      
    }
  },
  components: {
    fileHeader
  },
  created: function () {
    // this.$axios({
    //     url: "/common/borrow/borrow-register",
    //     method: "post",
    //     data: t
    // }).then( res => {
    //   console.log(res);
    //   this.$router.push({
    //     path: '/groupFile/contractFile/fileBorrowAnnexOperating',
    //     name: 'contractFileBorrowAnnexOperating',
    //     params: {id:1}
    //   });
    // }).catch( err => {

    // });
    //拿水印
    this.$axios({
        url: "/sys/water-mark/query",
        method: "post"
    }).then( res => {
      console.log(res);
    }).catch( err => {

    });
    let storage = window.localStorage;
    console.log('localStorage111',JSON.parse(storage.getItem('annexArr')));
    //console.log('route',this.$route);
  }
}
</script>
