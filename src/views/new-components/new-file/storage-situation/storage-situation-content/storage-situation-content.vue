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
          <Select v-model="storageInfo.stockType" style="width:100%">
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
          <Select v-model="storageInfo.archiveRoom" style="width:100%">
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
          <div style="width:40%;float:left;"><Input v-model="storageInfo.cabinet" placeholder="" style="width:100%;" :maxlength="10"></Input></div>
          <div style="width:20%;float:left;text-align:right;padding-right:8px;">列号</div>
          <div style="width:40%;float:left;"><Input v-model="storageInfo.columnNo" placeholder="" style="width:100%;" :maxlength="10"></Input></div>
        </div>
      </div>
      <div class="basics-rows-r">
        <div class="r-f">
          <div style="width:40%;float:left;"><Input v-model="storageInfo.rowNo" placeholder="" style="width:100%;" :maxlength="10"></Input></div>
          <div style="width:20%;float:left;text-align:right;padding-right:8px;">件号</div>
          <div style="width:40%;float:left;"><Input v-model="storageInfo.piece" placeholder="" style="width:100%;" :maxlength="10"></Input></div>      
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
        {value: "10",label: "腾邦总部/腾邦大厦/5楼档案室"},
        {value: "20",label: "腾邦总部/腾邦大厦/4楼档案室"},
        {value: "30",label: "腾邦总部/腾邦大厦/3楼档案室"}          
      ],        
      storageInfo: {
        stockStatus: "10",//入库状态

        stockType: "30",//入库类型

        archiveRoom: "10",//档案位置

        cabinet: "",//     柜号         
        columnNo: "",//    列号          
        rowNo: "",//       行号       
        piece: ""//        件号      
      }
    };
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
      }
    ).catch( err => {"init-stock-statu接口调用失败" + console.log(err)});
  }    
}
</script>

