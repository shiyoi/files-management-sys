<style scoped lang="less">
@import './file-lists-top.less';
</style>
<template>
  <div class="list-top">
    <ul>
      <li @click="searchFields.search = !searchFields.search;"><Icon size="14" type="search"></Icon><span>搜索</span></li>
      <li @click="openNewFiles"><Icon size="14" type="plus"></Icon><span>新建</span></li>
      <li @click="batchImportFields.importBatch = !batchImportFields.importBatch;" style="width:90px;"><Icon size="14" type="reply-all"></Icon><span>批量导入</span></li>
      <li @click="gotoExport"><Icon size="14" type="share"></Icon><span>导出</span></li>
      <li><Icon size="14" type="android-sync"></Icon><span>刷新</span></li>
      <li style="width:110px;"><Icon size="14" type="forward"></Icon><span>移入批量操作</span></li>
      <li><Icon size="14" type="android-print"></Icon><span>打印</span></li>
      <li @click="migrateFields.migrate = !migrateFields.migrate;"><Icon size="14" type="social-dropbox"></Icon><span>迁移</span></li>
    </ul>
    <!-- 搜索弹窗 -->
    <Modal v-model="searchFields.search" :title="searchFields.searchBoxTitle" :mask-closable="false" @on-ok="ok" @on-cancel="cancel" width="620">
      <div class="searchBox">
        <div class="rows">
          <div class="l">
            <div class="txt">腾邦签署主体</div>
            <div class="in"><Input placeholder="" v-model="searchFields.signedSubject" style="width:190px"></Input></div>
          </div>
          <div class="r">
            <div class="txt">档案归属</div>
            <div class="in">
              <Select v-model="searchFields.groupCompany" style="width:190px">
                <Option v-for="item in fileAttribution" :value="item.value" :key="item.value">{{ item.label }}</Option>
              </Select>
            </div>
          </div>
        </div>

        <div class="rows">
          <div class="l">
            <div class="txt">业务内容摘要</div>
            <div class="in"><Input placeholder="" v-model="searchFields.businessBrief" style="width:190px"></Input></div>
          </div>
          <div class="r">
            <div class="txt">类别</div>
            <div class="in">
              <Select v-model="searchFields.enteringType" style="width:190px">
                <Option v-for="item in fileType" :value="item.value" :key="item.value">{{ item.label }}</Option>
              </Select>                
            </div>
          </div>
        </div> 

        <div class="rows">
          <div class="l">
            <div class="txt">合同编号</div>
            <div class="in"><Input placeholder="" v-model="searchFields.contractNo" style="width:190px"></Input></div>
          </div>
          <div class="r">
            <div class="txt">有效期</div>
            <div class="in">
              <DatePicker type="daterange" v-model="effectiveDate" placement="bottom-end" placeholder="Select date" style="width: 190px"></DatePicker>
            </div>
          </div>
        </div>  

        <div class="rows">
          <div class="l">
            <div class="txt">收文时间</div>
            <div class="in">
              <DatePicker type="date" v-model="enteringDate" placeholder="Select date" style="width: 190px"></DatePicker>
            </div>
          </div>
          <div class="r">
            <div class="txt">状态</div>
            <div class="in">
              <Select v-model="searchFields.status" style="width:190px">
                <Option v-for="item in fileStatus" :value="item.value" :key="item.value">{{ item.label }}</Option>
              </Select>                 
            </div>
          </div>
        </div> 

        <div class="rows">
          <div class="l">
            <div class="txt">对方公司名称</div>
            <div class="in"><Input placeholder="" v-model="searchFields.oppositeCompany" style="width:190px"></Input></div>
          </div>
          <div class="r">
            <div class="txt">借阅情况</div>
            <div class="in">
              <Select v-model="searchFields.borrowFlag" style="width:190px">
                <Option v-for="item in fileSituation" :value="item.value" :key="item.value">{{ item.label }}</Option>
              </Select>                 
            </div>
          </div>
        </div>                        
      </div>

      <div slot="footer">
        <Button type="primary" @click="searchFile">查询</Button>
        <Button @click="reset">重置</Button>
      </div>
    </Modal>
    <!-- 批量导出弹窗 -->
    <Modal v-model="exportsExcel.exportExcel" :title="exportsExcel.exportBoxTitle" :mask-closable="false" @on-ok="ok" @on-cancel="cancel" width="620">
      <div class="searchBox">
        <div>您确定要将选定项导出Excel表格吗</div>     
      </div>

      <div slot="footer">
        <Button @click="exportExcelData" type="primary">确定</Button>
        <Button @click="exportsExcel.exportExcel = false">取消</Button>
      </div>
    </Modal>   
    <!-- 批量导出成功弹窗 -->
    <Modal v-model="exportsExcel.exportExcelSuccess" :title="exportsExcel.exportBoxSuccessTitle" :mask-closable="false" @on-ok="ok" @on-cancel="cancel" width="620">
      <div class="searchBox">
        <div>导出成功</div>     
      </div>

      <div slot="footer">
        <Button @click="exportsExcel.exportExcelSuccess = false">完成</Button>
      </div>
    </Modal>   
    <!-- 批量导入弹窗  -->
    <Modal v-model="batchImportFields.importBatch" :title="batchImportFields.importBatchTitle" :mask-closable="false" @on-ok="ok" @on-cancel="cancel" width="620">
      <div class="searchBox" style="text-align:center;">
        <!-- multiple -->
        <Upload action="" :before-upload="handleUpload">
          <Button type="ghost" icon="ios-cloud-upload-outline">请选择导入文件</Button>
        </Upload>               
      </div>
      <!-- 显示 已选文件的文件名 -->
      <div v-for="(value,index) in batchImportFields.batchFiles" class="searchBox">
        <span style="display:inline-block;margin-right:50px;">{{ value.name }}</span>
        <span @click="batchImportFields.batchFiles.splice(batchImportFields.batchFiles.indexOf(value),1)" style="display:inline-block;cursor:pointer;">移除</span>
      </div>
      <div slot="footer">
        <Button @click="handleBatchImport" type="primary">确定</Button>
      </div>
    </Modal> 
    <!-- 批量导入成功弹窗 -->
    <Modal v-model="batchImportFields.importBatchSuccess" :title="batchImportFields.importBatchTitle" :mask-closable="false" @on-ok="ok" @on-cancel="cancel" width="620">
      <div class="searchBox">
        <div>批量导入数据成功！</div>     
      </div>

      <div slot="footer">
        <Button>完成</Button>
        <Button>查看</Button>
      </div>
    </Modal>     
    <!-- 迁移弹窗   -->
    <Modal v-model="migrateFields.migrate" :title="migrateFields.migrateTitle" :mask-closable="false" @on-ok="ok" @on-cancel="cancel" width="620">
      <div class="searchBox">
        <div style="margin-bottom:10px;">将档案迁移至 ：</div>
        <div class="rows">
          <div class="l">
            <div class="txt">档案室</div>
            <div class="in">
              <Select v-model="migrateFields.fileRoom" style="width:190px">
                <Option v-for="item in migrateFields.fileRoomsData" :value="item.value" :key="item.value">{{ item.label }}</Option>
              </Select>
            </div>

          </div>
          <div class="r">
            <div class="txt">柜号</div>
            <div class="in">
              <Input placeholder="" v-model="migrateFields.cabinet" style="width:190px"></Input>
            </div>
          </div>
        </div> 
        <div class="rows">
          <div class="l">
            <div class="txt">列号</div>
            <div class="in">
              <Input placeholder="" v-model="migrateFields.columnNo" style="width:190px"></Input>
            </div>
          </div>
          <div class="r">
            <div class="txt">行号</div>
            <div class="in">
              <Input placeholder="" v-model="migrateFields.rowNo" style="width:190px"></Input>
            </div>
          </div>
        </div>     
        <div class="rows">
          <div class="l">
            <div class="txt">件号</div>
            <div class="in">
              <Input placeholder="" v-model="migrateFields.piece" style="width:190px"></Input>
            </div>
          </div>
          <div class="r">
          </div>
        </div>                     
      </div>
     
      <div slot="footer">
        <Button @click="migrateFields.migrate = false" type="primary">确定</Button>
        <Button @click="migrateFields.migrate = false">取消</Button>
      </div>
    </Modal>      
  </div>
</template>
<script>
import common from '@/libs/common.js';//bus 总线
//引入配置文件
import config from '@/libs/config.js';
//引入下拉选项的配置
import {groupCompany,enteringType,status,borrowFlag} from '@/libs/select_config.js';
export default {
  name: 'file-lists-top',
  props: ['checkedNum'],
  data: function () {
    return {

      // fileAttri: "1",//档案归属 select 默认全部
      fileAttribution: [],
      // type: "0",//类别 select 默认全部
      fileType: [],
      // status: "0",//状态 默认全部
      fileStatus: [],
      // situation: "10",//借阅情况 默认全部
      fileSituation: [],
      effectiveDate: "",//有效期时间  
      enteringDate: "", //收文时间
      //搜索需要的字段 ---(最后一个借阅情况没有)
      searchFields: {
        search: false,//搜索弹窗
        searchBoxTitle: "搜索",
        signedSubject: "",//腾邦签署主体
        groupCompany: "TT",//档案归属  
        businessBrief: "",//业务内容摘要
        // contractType: "10",//合同类型
        enteringType: "10",//收文类别
        contractNo: "",//合同编号
        effectiveStartDate: "",//有效期开始时间
        effectiveEndDate: "",//有效期结束时间    
        enteringDate: "",//收文时间    
        status: "10",//状态
        oppositeCompany: "",//对方公司名称
        borrowFlag: "10"
      },
      //批量导入需要的字段
      batchImportFields: {
        batchFiles: [],//文件数组
        importBatch: false,//批量导入弹窗
        importBatchSuccess: false,//导入成功弹窗
        importBatchTitle: "批量导入",
      },
      //导出弹窗用到的变量字段
      exportsExcel: {
        exportExcel: false,//导出弹窗
        exportExcelSuccess: false,//导出成功弹窗
        exportBoxTitle: "批量导出",
        exportBoxSuccessTitle: "导出成功",
      },
      //迁移弹窗需要的字段
      migrateFields: {
        migrate: false,//迁移
        migrateTitle: "迁移档案",        
        fileRoom: "0",//档案室
        //档案室数据
        fileRoomsData: [
          {value: "0",label: "腾邦总部/腾邦大厦/5楼档案室"},
          {value: "1",label: "腾邦总部/腾邦大厦/4楼档案室"}
        ],
        //柜、列、行、件
        cabinet: "",                //  柜号 
        columnNo: "",               //  列号          
        rowNo: "",                  //  行号       
        piece: ""                   //  件号           
      }
      // groupCompany
    };
  },
  computed : {
    effective: {
      get () {
        return this.effectiveDate;
      },
      set (newValue) {

      }
    },
   //收文时间
    entering: {
      get () {
        return this.enteringDate;
      },
      set (newValue) {

      }      
    }        
  },
  watch : {
    effective (newVal,oldVal) {
      if (Object.keys(newVal).length === 2) {
        //有效期时间分开为开始  和  结束时间 并格式化为  2018-06-02 格式
        this.searchFields.effectiveStartDate = newVal[0].Format("yyyy-MM-dd");
        this.searchFields.effectiveEndDate = newVal[1].Format("yyyy-MM-dd");
      }
    },
    entering (newVal,oldVal) {
      this.searchFields.enteringDate = newVal.Format("yyyy-MM-dd");
    }    
  },
  methods: {
    ok: function () {
      
    },
    cancel: function () {

    },
    openNewFiles : function () {
      console.log(config[1].childs[0].childs[1].to);
      // common.bus.$emit('on-NewFiles',config[1].childs[0].childs[1].to);
      this.$router.push(config[1].childs[0].childs[1].to);
    },
    //重置搜索弹窗字段
    reset () {
      this.searchFields.signedSubject = '';
      this.searchFields.groupCompany = groupCompany[0].value;
      this.searchFields.businessBrief = '';
      this.searchFields.contractNo = '';
      this.searchFields.oppositeCompany = '';
      this.effectiveDate = '';
      this.enteringDate = '';
      this.searchFields.borrowFlag = '10';
      this.searchFields.status = '10';
      this.searchFields.enteringType = '10';
    },
    //手动上传
    handleUpload (file) {
      //  console.log(file);
       this.batchImportFields.batchFiles.push(file);
       return false;
    },
    //批量导入
    handleBatchImport () {
      if (this.batchImportFields.batchFiles.length === 1) {
        this.batchImportFields.importBatch = false;
        common.bus.$emit('handleBatchImport',this.batchImportFields.batchFiles);
      }
    },
    //即将打开导出弹窗
    gotoExport () {
      if (this.checkedNum === 0) {
        let msg = this.$Message.loading({
            content: '没有选中任何数据！',
            duration: 1
        });
      } else {
        this.exportsExcel.exportExcel = this.checkedNum >=1 ? true : false;        
      }
      
      
    },
    
    //批量导出的确定按钮
    exportExcelData () {
      this.exportsExcel.exportExcel = false;
      common.bus.$emit('exportExcelData','1234567890');
    },
    //搜索
    searchFile () {
      this.searchFields.search = false;
      // console.log(groupCompany);
      common.bus.$emit('searchFile',this.searchFields);
    }
  },
  created () {
    // console.log(groupCompany);
    this.fileAttribution = groupCompany;//初始化搜索弹窗的档案归属下拉列表
    this.fileType = enteringType;//初始化搜索弹窗的类别
    this.fileStatus = status;//初始化搜索弹窗的状态
    this.fileSituation = borrowFlag;//初始化搜索弹窗的  借阅情况
    // console.log(this.fileAttribution);
  }
}
</script>

