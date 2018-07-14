<style scoped lang="less">
@import './contract-file-borrow.less';
</style>
<template>
  <div>
    <!-- 借阅信息 -->
    <div class="file-details-con">    
      <file-header text="借阅信息"></file-header>
      <div class="basic-info-con">
        <div class="basics-rows">
          <div class="basics-rows-l">
            <div class="text"><span class="color-red">* </span>借阅人：</div>
            <div><Input v-model="registerData.archiveName" style="width:100%;" :maxlength="30"></Input></div>
          </div>
          <div class="basics-rows-r">
            <div class="r-f"><Input v-model="registerData.borrowNo" style="width:100%;" :maxlength="30"></Input></div>        
            <div class="text"><span class="color-red">* </span>借阅人工号：</div>
          </div>
        </div>
        <div class="basics-rows">
          <div class="basics-rows-l">
            <div class="text"><span class="color-red">* </span>是否需要正本：</div>
            <div>
              <Select v-model="registerData.needOrginFile" style="width:100%">
                <Option v-for="(item,index) in orginFileList" :value="item.value" :key="item.value">{{ item.label }}</Option>
              </Select>           
            </div>
          </div>
          <div class="basics-rows-r">
            <div class="r-f">
              <Select v-model="registerData.needReturn" style="width:100%">
                <Option v-for="(item,index) in needReturnList" :value="item.value" :key="item.value">{{ item.label }}</Option>
              </Select>            
            </div>        
            <div class="text"><span class="color-red">* </span>是否需要归还：</div>
          </div>
        </div>   
        <div class="basics-rows">
          <div class="basics-rows-l">
            <div class="text"><span class="color-red">* </span>借阅日期：</div>
            <div>
              <DatePicker v-model="registerData.borrowDate" type="date" :editable="constFalse" placement="bottom-end" placeholder="Select date" style="width: 100%"></DatePicker>          
            </div>
          </div>
          <div class="basics-rows-r">
            <div class="r-f"><DatePicker v-model="registerData.planReturnDate" type="date" :editable="constFalse" placement="bottom-end" placeholder="Select date" style="width: 100%"></DatePicker></div>        
            <div class="text"><span class="color-red">* </span>预计归还日期：</div>
          </div>
        </div>   
      </div>  
    </div>
    <!-- 备注 -->
    <div class="file-details-con">   
      <file-header text="备注"></file-header>
      <div class="basic-info-con">
        <div class="basics-rows" style="height:110px;padding-bottom:20px;">
            <div style="width:12.5%;float:left;text-align:right;padding-right:8px;">备注：</div>
            <div style="width:87.5%;float:left;">
              <Input v-model="registerData.remark" type="textarea" :rows="4" :maxlength="200"></Input>                      
            </div> 
        </div>
      </div>
    </div>
    <!-- 选择附件 -->
    <div class="file-details-con">    
      <file-header text="选择附件"></file-header>
      <div class="basic-info-con">
        <Table border :columns="annexColumns" :data="annexData" size="small"></Table>
      </div>  
    </div>   

    <div style="margin-bottom:50px;width:100%;min-width:890px;max-width:1220px;">
      <div style="height:32px;width:252px;margin:0 auto;">
        <div style="width:116px;height:32px;float:left;margin-right:10px;"><Button long type="primary" @click="registerSubmit">提交</Button></div>  
        <div style="width:116px;height:32px;float:left;margin-right:10px;"><Button long>返回</Button></div>  
      </div>
    </div>                                   
  </div>
</template>
<script>
import fileHeader from '../new-file/file-basic-info/file-header/file-header.vue';
import {archiveType} from '@/libs/archive_type.js'
export default {
  name: 'contract-file-borrow',
  data: function () {
    return {
      constFalse: false,
      files: [],//附件数组
      annexColumns: [],
      annexData: [{
        annexFormat: '',
        isDownload: false,
        isPrint: false,
        printNum: 0,
        filesNames: [],
        filesName: ""    
      }   
      ],
      rowOriginData: {
        annexFormat: "",
        isDownload: false,
        isPrint: false,
        printNum: 0,
        filesNames: [],
        filesName: "",
        operation: "",
        fileId: 0
      },    
      orginFileList: [
        {
          value: 1,
          label: '需要'
        },    
        {
          value: 0,
          label: '不需要'
        },             
      ],
      needReturnList: [
        {
          value: 1,
          label: '需要'
        },    
        {
          value: 0,
          label: '不需要'
        },         
      ],
      //注册所需数据
      archiveBorrowDetails:[],
      registerData: {
        archiveName: "",//借阅人
        borrowNo: "",//借阅人工号
        needOrginFile: 1,//是否需要正本
        needReturn: 1,//是否需要归还
        borrowDate: "",//借阅日期
        planReturnDate: "",//计划归还日期
        remark: "",//备注
        archiveNo: this.$store.state.fileDetails,//档案编号
        //operation: "",//操作类型 "10"  "20"  "30"表示下载  打印  下载和打印

      }
    };
  },
  components: {
    fileHeader
  },
  methods: {
    //初始化表格数据
    initTableData () {
      this.annexColumns = [
        {
          title: '附件名称',
          // key: 'fileName',
          render: (h, params) => {
            return h('Select',{
                props: {value: params.row.filesName},
                on: {
                  'on-change': (value) => {
                    params.row.annexFormat = value.slice(value.lastIndexOf('.') + 1);
                    this.annexData[params.index].filesName = params.row.filesName = value;
                    this.annexData[params.index].annexFormat = params.row.annexFormat;
                    this.annexData[params.index].fileId = this.files.filter( item => item.fileName === value ? true : false)[0].id;
                  }
                }
              },
              params.row.filesNames.map( (v) => {
                return h('Option', {props: {value: v}},v);
              })
            );
          }
        },
        {
          title: '附件格式',
          key: 'annexFormat'
        },
        {
          title: '操作',
          // key: 'annexOperation',
          render: (h, params) => {
            return h('div',[
              h('Checkbox',{
                props: {
                  value: params.row.isDownload
                },
                on: {
                  'on-change': (isChecked) => {
                    this.annexData[params.index].isDownload = params.row.isDownload = isChecked;
                  }
                }
              },'下载'),
              h('Checkbox',{
                props: {
                  value: params.row.isPrint
                },                
                on: {
                  'on-change': (isChecked) => {
                    this.annexData[params.index].isPrint = params.row.isPrint = isChecked;
                    if (isChecked === true) {
                      this.annexData[params.index].printNum = params.row.printNum = 1;
                    } else {
                      this.annexData[params.index].printNum = params.row.printNum = 0;
                    }
                  }
                }},'打印')
            ]);
          }  
        },
        {
          title: '打印份数',
          // key: 'annexPrintNum',
          render: (h, params) => {
              return h('InputNumber',{
                props:{
                  min:0,
                  disabled: !params.row.isPrint,
                  value: params.row.printNum
                },
                on: {
                  'on-change': (event) => {
                    this.annexData[params.index].printNum = params.row.printNum = event;
                  }
                }
              });
          }
        },
        {
          title: ' ',
          width: 60,
          // key: 'addOrDel',
          align: 'center',
          render: (h, params) => {
            return h('div',{},
            [ 
              h('Button',{
                props: {type: "primary",size: "small"},
                on: {
                  'click': () => {
                    if (params.index == 0) {
                      this.annexData.push(Object.assign({},this.rowOriginData));
                    } else if (params.index >= 1){
                      this.annexData.splice(params.index,1);
                    }
                  }
                }
              },
              [h('Icon',{
                props: {
                  type: params.index === 0 ? "plus-circled" : "minus-circled",
                  size: 18
                }})
              ])           
            ]
            );            
          }
        }
      ];
    },
    registerSubmit () {
      //
      for (let v of this.annexData) {
        if (v.isDownload && !v.isPrint) {v.operation = "10"}
        if (!v.isDownload && v.isPrint) {v.operation = "20"}
        if (v.isDownload && v.isPrint) {v.operation = "30"}
      }
      let arrTemp = [];
      for (let v of this.annexData) {
        let tempObj = {};
        tempObj.attachmentName = v.filesName;
        tempObj.attachmentFormat = v.annexFormat;
        tempObj.printCount = v.printNum;
        tempObj.operation = v.operation;
        tempObj.fileId = v.fileId;
        arrTemp.push(tempObj);
      }
      let t = [{
        archiveBorrowDetails:arrTemp,
        archiveNo: this.registerData.archiveNo,
        archiveName: this.registerData.archiveName,
        borrowNo: this.registerData.borrowNo,
        needOrginFile: this.registerData.needOrginFile,
        needReturn: this.registerData.needReturn,
        borrowDate: this.registerData.borrowDate,
        planReturnDate: this.registerData.planReturnDate,
        remark: this.registerData.remark
      }];
      this.$axios({
          url: "/common/borrow/borrow-register",
          method: "post",
          data: t
      }).then( res => {
        // console.log(res);
        let storage = window.localStorage;
        storage.setItem("annexArr",JSON.stringify(res.data.data));
        this.$router.push({
          path: '/groupFile/contractFile/fileBorrowAnnexOperating',
          name: 'contractFileBorrowAnnexOperating',
          params: {fileArr: res.data.data}
        });
      }).catch( err => {

      });
    }
  },
  created: function () {
    //获取附件列表数据
    let formdata = new FormData();
    formdata.append('stockNos',this.$store.state.stockNos);
    this.$axios.post('/common/archive-attachments',formdata).then( (res) => {
      this.files = res.data.data;//获取后台返回的数据
      // console.log(this.files);
      for (let v of this.files) {
        this.rowOriginData.filesNames.push(v.fileName);
      }
      this.rowOriginData.filesNames.unshift("请选择附件");
      this.annexData[0] = Object.assign({},this.rowOriginData);
      this.initTableData();
    }).catch( (err) => {

    });
    
  }
}
</script>


