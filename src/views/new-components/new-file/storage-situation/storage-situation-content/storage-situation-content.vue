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
          <Select v-model="storageStatus" style="width:100%">
            <Option v-for="item in storageStatusShow" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>           
        </div>
      </div>
      <div class="basics-rows-r">
        <div class="r-f">
          <Select v-model="storageType" style="width:100%">
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
          <Select v-model="storageStatus" style="width:100%">
            <Option v-for="item in storageStatusShow" :value="item.value" :key="item.value">{{ item.label }}</Option>
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
          <div style="width:40%;float:left;"><Input placeholder="" style="width:100%;"></Input></div>
          <div style="width:20%;float:left;text-align:right;padding-right:8px;">列号</div>
          <div style="width:40%;float:left;"><Input placeholder="" style="width:100%;"></Input></div>
        </div>
      </div>
      <div class="basics-rows-r">
        <div class="r-f">
          <div style="width:40%;float:left;"><Input placeholder="" style="width:100%;"></Input></div>
          <div style="width:20%;float:left;text-align:right;padding-right:8px;">件号</div>
          <div style="width:40%;float:left;"><Input placeholder="" style="width:100%;"></Input></div>      
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
      storageStatus: "0",
      storageStatusShow: [
        {value: "0",label: "已入库"},
        {value: "1",label: "未入库"}
      ],
      storageType: "0",
      storageTypeShow: [
        {value: "0",label: "实物库"},
        {value: "1",label: "电子库"},
        {value: "2",label: "实物库+电子库"}
      ]

    };
  },
  components: {

  },
  methods: {

  }
}
</script>

