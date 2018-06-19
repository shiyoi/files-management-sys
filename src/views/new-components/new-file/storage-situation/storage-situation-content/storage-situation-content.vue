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
            <Option v-for="item in storageInfo.storageStatusShow" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>           
        </div>
      </div>
      <div class="basics-rows-r">
        <div class="r-f">
          <Select v-model="storageInfo.stockType" style="width:100%">
            <Option v-for="item in storageInfo.storageTypeShow" :value="item.value" :key="item.value">{{ item.label }}</Option>
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
            <Option v-for="item in storageInfo.archiveRoomShow" :value="item.value" :key="item.value">{{ item.label }}</Option>
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
          <div style="width:40%;float:left;"><Input v-model="storageInfo.cabinet" placeholder="" style="width:100%;"></Input></div>
          <div style="width:20%;float:left;text-align:right;padding-right:8px;">列号</div>
          <div style="width:40%;float:left;"><Input v-model="storageInfo.columnNo" placeholder="" style="width:100%;"></Input></div>
        </div>
      </div>
      <div class="basics-rows-r">
        <div class="r-f">
          <div style="width:40%;float:left;"><Input v-model="storageInfo.rowNo" placeholder="" style="width:100%;"></Input></div>
          <div style="width:20%;float:left;text-align:right;padding-right:8px;">件号</div>
          <div style="width:40%;float:left;"><Input v-model="storageInfo.piece" placeholder="" style="width:100%;"></Input></div>      
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
      storageInfo: {
        stockStatus: "0",//入库状态
        //入库状态 数据
        storageStatusShow: [
          {value: "0",label: "已入库"},
          {value: "1",label: "未入库"}
        ],
        stockType: "0",//入库类型
        //入库类型 数据
        storageTypeShow: [
          {value: "0",label: "实物库"},
          {value: "1",label: "电子库"},
          {value: "2",label: "实物库+电子库"}
        ],
        archiveRoom: "0",//档案位置
        //档案位置 数据
        archiveRoomShow: [
          {value: "0",label: "腾邦总部/腾邦大厦/5楼档案室"},
          {value: "1",label: "腾邦总部/腾邦大厦/4楼档案室"},
          {value: "2",label: "腾邦总部/腾邦大厦/3楼档案室"}          
        ],
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

  }
}
</script>

