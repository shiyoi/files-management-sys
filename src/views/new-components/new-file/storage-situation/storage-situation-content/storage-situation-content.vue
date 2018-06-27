<style scoped lang="less">
@import './storage-situation-content.less';
</style>

<template>
<!-- 入库情况的body 组件 -->
  <div class="basic-info-con">
    <div class="basics-rows">
      <div class="basics-rows-l">
        <div class="text">入库状态</div>
        <div>
          <Select v-model="storageInfo.stockStatus" style="width:100%">
            <Option v-for="item in storageStatusShow" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>           
        </div>
      </div>
      <div class="basics-rows-r">
        <div class="r-f">
          <Select :disabled="isDisabled" v-model="storageInfo.stockType" style="width:100%">
            <Option v-for="item in storageTypeShow" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>          
        </div>        
        <div class="text">入库类型</div>
      </div>
    </div>  
    <div class="basics-rows">
      <div class="basics-rows-l">
        <div class="text">档案位置</div>
        <div>
          <Select :disabled="isDisabled" v-model="storageInfo.archiveRoom" style="width:100%">
            <Option v-for="item in archiveRoomShow" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>                     
        </div>
      </div>
      <div class="basics-rows-r">
        <div class="r-f">
 
        </div>        
        <div class="text"></div>
      </div>
    </div>   
    <div class="basics-rows">
      <div class="basics-rows-l">
        <div class="text">柜号</div>
        <div>
          <div style="width:40%;float:left;">
            <InputNumber ref="cabinet" :disabled="isDisabled" :min="min" v-model="storageInfo.cabinet" placeholder="" style="width:100%;" :maxlength="10"></InputNumber>
          </div>
          <div style="width:20%;float:left;text-align:right;padding-right:8px;">列号</div>
          <div style="width:40%;float:left;">
            <InputNumber ref="columnNo" :disabled="isDisabled || cabinet === min" :min="min" v-model="storageInfo.columnNo" placeholder="" style="width:100%;" :maxlength="10"></InputNumber>
          </div>
        </div>
      </div>
      <div class="basics-rows-r">
        <div class="r-f">
          <div style="width:40%;float:left;">
            <InputNumber ref="rowNo" :min="min" :disabled="isDisabled || cabinet === min || columnNo === min" v-model="storageInfo.rowNo" placeholder="" style="width:100%;" :maxlength="10"></InputNumber>
          </div>
          <div style="width:20%;float:left;text-align:right;padding-right:8px;">件号</div>
          <div style="width:40%;float:left;">
            <InputNumber ref="piece" :min="min" :disabled="isDisabled || cabinet === min || columnNo === min || rowNo === min" v-model="storageInfo.piece" placeholder="" style="width:100%;" :maxlength="10"></InputNumber>
          </div>      
        </div>        
        <div class="text">行号</div>
      </div>
    </div>                         
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      //柜列行件   数字  >=1
      min: -1,
      isDisabled: true,//是否显示入库状态后面的表单，默认false 显示，true为disabled
      //入库状态 数据
      storageStatusShow: [
        {value: "20",label: "已入库"},
        {value: "10",label: "未入库"}
      ],      
      //入库类型 数据
      storageTypeShow: [
        {value: "10",label: "实物库"},
        {value: "20",label: "电子库"},
        {value: "30",label: "实物库+电子库"}
      ],    
      //档案位置 数据
      archiveRoomShow: [
        {value: "4楼档案室",label: "腾邦总部/腾邦大厦/4楼档案室"},
        {value: "5楼档案室",label: "腾邦总部/腾邦大厦/5楼档案室"}          
      ],        
      storageInfo: {
        stockStatus: "10",        // 入库状态
        stockType: "30",          // 入库类型
        archiveRoom: "5楼档案室",         // 档案位置
        cabinet: -1,              // 柜号         
        columnNo: -1,             // 列号          
        rowNo: -1,                // 行号       
        piece: -1                 // 件号 
      } 
    };
  },
  computed: {
    stockStatus: {
      get () {
        return this.storageInfo.stockStatus;
      },
      set (newValus) {
      }
    },
    //柜号
    cabinet: {
      get () {
        return this.storageInfo.cabinet;
      },
      set () {

      }
    },
    //列号
    columnNo: {
     get () {
        return this.storageInfo.columnNo;
      },
      set () {

      }      
    },
    //行号
    rowNo: {
     get () {
        return this.storageInfo.rowNo;
      },
      set () {

      }         
    },
    piece: {
      get () {

      },
      set () {

      }
    }

    
  },
  watch: {
    stockStatus (newValue,oldValue) {
      //如果改为未入库状态，则清空柜、列、行、件
      if ('10' === newValue) {
        this.storageInfo.cabinet = this.min;
        this.storageInfo.columnNo = this.min;
        this.storageInfo.rowNo = this.min;
        this.storageInfo.piece = this.min;
        this.isDisabled = true;
      } else if ('20' === newValue) {
        this.isDisabled = false;
      }
    },
    //监控柜号
    cabinet (newValue,oldValue) {
      if (newValue === -1){
        this.storageInfo.columnNo = this.min;
        this.storageInfo.rowNo = this.min;
        this.storageInfo.piece = this.min;        
      }
    },
    //监控列号
    columnNo (newValue,oldValue) {
      if (newValue === -1){
        this.storageInfo.rowNo = this.min;
        this.storageInfo.piece = this.min;        
      }
    },   
    //监控行号
    rowNo (newValue,oldValue) {
      if (newValue === -1){
        this.storageInfo.piece = this.min;        
      }
    },      
  },
  components: {

  },
  methods: {
   //初始化 表单的  select 控件，参数1：arg[0]表示从后台获取的对象，参数2：arg[1]表示VUE data里面对应的变量
    initOptions (obj,arr) {
      if (Object.keys(obj).length > 0) {
        arr.length = 0;
        for (let key in obj) {
          arr.push({value: key,label: obj[key]});
        }
      }    
    }
  },
  created () {
    //请求表单下拉框的  配置信息
    this.$axios.post('/common/init-stock-statu').then( res => {
        this.initOptions(res.data.data.stockStatus,this.storageStatusShow);//入库状态
        this.initOptions(res.data.data.stockType,this.storageTypeShow);//入库类型
        this.initOptions(res.data.data.archiveRoom,this.archiveRoomShow);//档案位置
      }
    ).catch( err => {"init-stock-statu接口调用失败" + console.log(err)});
  }    
}
</script>

