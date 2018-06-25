<style scoped lang="less">
@import './new-file.less';
</style>

<template>
  <div>  
    <div class="new-file-con"><file-basic-info ref="child_fbi"></file-basic-info></div><!-- 档案基本信息组件 -->
    <div class="new-file-con"><transfer-info ref="child_ti"></transfer-info></div><!-- 移交信息组件 -->
    <div class="new-file-con"><storage-situation ref="child_ss"></storage-situation></div><!-- 入库情况组件 -->
    <div class="new-file-con"><annex-upload ref="child_au"></annex-upload></div><!-- 附件上传组件 -->   
    <div class="new-file-con"><remark ref="child_r"></remark></div><!-- 备注组件 -->   
    <div class="new-file-con" style="margin-bottom:150px;"><bottomBotton @submit="submitForm"></bottomBotton></div><!-- 底部按钮组件 -->            
  </div>
</template>

<script>
  import fileBasicInfo from './file-basic-info/file-basic-info.vue';// 引入档案基本信息组件
  import transferInfo from './transfer-info/transfer-info.vue';// 引入移交信息组件
  import storageSituation from './storage-situation/storage-situation.vue';// 引入入库情况组件
  import annexUpload from './annex-upload/annex-upload.vue';// 引入附件长传组件
  import remark from './remark/remark.vue';// 引入备注组件
  import bottomBotton from './bottom-botton/bottom-botton.vue';// 引入底部按钮组件
  export default {
    data: function () {
      return {
        newFileFields: {
          contractName: "",//合同名称
          signedSubject: "",//腾邦签署主题
          businessBrief: "",//业务内容摘要
          groupCompany: "",//档案归属
          oppositeCompany: "",//对方公司名称
          effectiveStartDate: "",//有效期开始时间
          effectiveEndDate: "",//有效期结束时间
          contractType: "",//合同类型
          contractNo: "",//合同编号
          signedUser: "",//签署人
          enteringType: "",//收文类别
          status: "",//状态
          enteringDate: "",//收文时间
          enteringUser: "",//收文人

          resource: "",//数据来源
          processNo: "",//流程单号
          transferNo: "",//移交人
          department: "",//所属部门
          leaderNo: "",//直属上级
          stockStatus: "",//入库状态
          stockType: "",//入库类型
          archiveRoom: "",//档案位置
          cabinet: "",//柜号
          columnNo: "",//列号
          rowNo: "",//行号
          piece: "",//件号
          remark: "",//备注
        }
      };
    },
    components: {
      fileBasicInfo,
      transferInfo,
      storageSituation,
      annexUpload,
      remark,
      bottomBotton
    },
    methods: {
      submitForm(msg) {
        //构建表单数据（非文件）
        let resultJson = Object.assign({},
          this.$refs.child_fbi.$refs.child_fbic.basicInfo,       //合同档案基本信息
          this.$refs.child_ti.$refs.child_tic.transferInfo,      //移交信息组件的数据
          this.$refs.child_ss.$refs.child_ssc.storageInfo,       //入库情况组件的数据           
          this.$refs.child_r.$refs.child_rc.remarkInfo           //备注信息的数据
        );
        let files = this.$refs.child_au.$refs.child_auc.files.uploadFile;// 上传文件(文件数组)
        let formData = new FormData();
        formData.append('data',JSON.stringify(resultJson));//字符串化
        console.log(JSON.stringify(resultJson));
        //将文件添加进去
        for (let i=0;i<files.length;i++) {
          formData.append('uploadFile',files[i]);
        }
        console.log( formData.get('uploadFile'));
        //配置http请求头
        let config = {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        };
        this.$axios.post('/company/contract/submit',formData,config).then( res => {
          console.log("新增档案提交表单成功：",res.data);
        }).catch( err => {
          console.log("新增档案提交表单失败：",err);
        });
      }
    }   
  }
</script>

