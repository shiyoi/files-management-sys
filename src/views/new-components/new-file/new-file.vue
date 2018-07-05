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
    <!-- 创建档案成功弹窗 -->
    <Modal v-model="createdSuccess" :title="createdSuccessTitle" :mask-closable="false" width="620">
      <div class="searchBox" style="text-align:center;margin-top:20px;">
        <div style="font-size:14px;">创建档案成功！系统已自动生成条形码，请选择您需要的操作！</div>     
      </div>
      <div class="searchBox" style="margin-top:20px;height:150px;">
        <div style="height:100px;width:10%;float:left;text-align:right;margin-left:20px;padding-top:30px;">条形码：</div>
        <div style="width:calc(70% - 40px);height:auto;float:left;text-align:center;background:#fff">
          <div style="width:100%;height:20px;background:#fff;font-size:14px;">
            xxxxxxxxxx合同
          </div>
          <div style="width:100%;background:#fff;">
            <canvas id="barcode"></canvas>
          </div>
          
        </div>
        <div style="height:100px;width:20%;float:left;padding-top:60px;"><Button type="ghost" icon="printer">打印条形码</Button></div>
      </div>
      <div slot="footer">
        <Button type="primary" @click="successCreated">完成</Button>
      </div>
    </Modal>    
  </div>
</template>

<script>
  import jsbarcode from 'jsbarcode';
  import fileBasicInfo from './file-basic-info/file-basic-info.vue';// 引入档案基本信息组件
  import transferInfo from './transfer-info/transfer-info.vue';// 引入移交信息组件
  import storageSituation from './storage-situation/storage-situation.vue';// 引入入库情况组件
  import annexUpload from './annex-upload/annex-upload.vue';// 引入附件长传组件
  import remark from './remark/remark.vue';// 引入备注组件
  import bottomBotton from './bottom-botton/bottom-botton.vue';// 引入底部按钮组件
  import commonValidate from '@/libs/common_validate';// 引入公共的验证方法
  import config from '@/libs/config';//引人路由配置文件
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
        },
        commonValidate,//公共的验证方法
        jsbarcode,//条形码包
        config,//路由配置文件
        createdSuccess: false,//档案创建成功弹窗
        createdSuccessTitle: '创建成功'
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
      submitForm (msg) {
        //构建表单数据（非文件）
        let resultJson = Object.assign({},
          this.$refs.child_fbi.$refs.child_fbic.basicInfo,       //合同档案基本信息
          this.$refs.child_ti.$refs.child_tic.transferInfo,      //移交信息组件的数据
          this.$refs.child_ss.$refs.child_ssc.storageInfo,       //入库情况组件的数据           
          this.$refs.child_r.$refs.child_rc.remarkInfo           //备注信息的数据
        );
        //提交前的 数据处理（为了符合后台数据格式）
        resultJson.enteringType = resultJson.enteringType.join(',');//档案基本信息-类别复选框数组转字符串
        //未入库状态，后续都为空串
        if (resultJson.stockStatus === '10') {
          resultJson.stockType = '';
          resultJson.archiveRoom = '';
          resultJson.cabinet = '';
          resultJson.columnNo = '';
          resultJson.rowNo = '';
          resultJson.piece = '';
        }
        //柜、列、行、件字符串化
        resultJson.cabinet = String(resultJson.cabinet);
        resultJson.columnNo = String(resultJson.columnNo);
        resultJson.rowNo = String(resultJson.rowNo);
        resultJson.piece = String(resultJson.piece);

        let files = this.$refs.child_au.$refs.child_auc.files.uploadFile;// 上传文件(文件数组)
        if (!this.formValidate(resultJson)) {return ;}//表单验证，没通过则不提交，保留当前表单状态


        let formData = new FormData();
        //将表单数据添加到 formdata
        for (let index in resultJson) {
            formData.append(index,resultJson[index]);
        }
        //将文件添加进去
        for (let i=0;i<files.length;i++) {
          formData.append('uploadFile',files[i]);
        }

        this.$axios.post('/company/contract/submit',formData).then( res => {
          console.log("新增档案提交表单成功：",res.data);
          JsBarcode("#barcode", res.data.data.barcodeNo);
          this.createdSuccess = true;
        }).catch( err => {
          console.log("新增档案提交表单失败：",err);
        });
      },
      successCreated () {
        this.createdSuccess=false;
        this.$router.push(config[1].childs[0].childs[0].to);
      },
      formValidate (resultJson) {
        console.log(resultJson);
        //验证合同名称
         if (this.commonValidate.isEmpty(resultJson.contractName)) {
          this.$Message.info({content: '合同名称不能为空',duration:3,closable: true}); 
          this.$refs.child_fbi.$refs.child_fbic.$refs.contractName.focus();//自动聚焦
          return false;          
         }
        //验证腾邦签署主体
         if (this.commonValidate.isEmpty(resultJson.signedSubject)) {
          this.$Message.info({content: '腾邦签署主体不能为空',duration:3,closable: true}); 
          this.$refs.child_fbi.$refs.child_fbic.$refs.signedSubject.focus();//自动聚焦
          return false;          
         }    
        //验证业务内容摘要
        //  if (this.commonValidate.isEmpty(resultJson.businessBrief)) {
        //   this.$Message.info({content: '业务内容摘要不能为空',duration:3,closable: true}); 
        //   this.$refs.child_fbi.$refs.child_fbic.$refs.businessBrief.focus();//自动聚焦
        //   return false;          
        //  }   
        //对方公司名称
         if (this.commonValidate.isEmpty(resultJson.oppositeCompany)) {
          this.$Message.info({content: '对方公司名称不能为空',duration:3,closable: true}); 
          this.$refs.child_fbi.$refs.child_fbic.$refs.oppositeCompany.focus();//自动聚焦
          return false;          
         }     
        //有效期开始时间
         if (this.commonValidate.isEmpty(resultJson.effectiveStartDate)) {
          this.$Message.info({content: '有效期不能为空',duration:3,closable: true}); 
          return false;          
         } 
        //有效期结束时间
         if (this.commonValidate.isEmpty(resultJson.effectiveEndDate)) {
          this.$Message.info({content: '有效期不能为空',duration:3,closable: true}); 
          return false;          
         }   
         //已入库状态，后续得填完整
         if (resultJson.stockStatus === '20') {
           if (resultJson.cabinet === '-1') {
             this.$Message.info({content: '请填写柜号',duration:3,closable: true}); 
             this.$refs.child_ss.$refs.child_ssc.$refs.cabinet.focus();//自动聚焦
             return false;   
           }
           if (resultJson.columnNo === '-1') {
             this.$Message.info({content: '请填写列号',duration:3,closable: true}); 
             this.$refs.child_ss.$refs.child_ssc.$refs.columnNo.focus();//自动聚焦
             return false;   
           }     
           if (resultJson.rowNo === '-1') {
             this.$Message.info({content: '请填写行号',duration:3,closable: true}); 
             this.$refs.child_ss.$refs.child_ssc.$refs.rowNo.focus();//自动聚焦
             return false;   
           }  
           if (resultJson.piece === '-1') {
             this.$Message.info({content: '请填写件号',duration:3,closable: true}); 
             this.$refs.child_ss.$refs.child_ssc.$refs.piece.focus();//自动聚焦
             return false;   
           }                              
         }
         





         return true;
      }
    }

  }
</script>

