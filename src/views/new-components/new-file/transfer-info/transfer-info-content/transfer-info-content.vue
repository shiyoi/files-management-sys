<style scoped lang="less">
@import './transfer-info-content.less';
</style>

<template>
<!-- 移交信息的body 组件 -->
  <div class="basic-info-con">
    <div class="basics-rows">
      <div class="basics-rows-l">
        <div class="text">数据来源</div>
        <div>
          <Select v-model="dataSource" style="width:100%">
            <Option v-for="item in dataSourceShow" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>           
        </div>
      </div>
      <div class="basics-rows-r">
        <div class="r-f"><Input placeholder="请输入OA单号后，系统自动关联" style="width:100%;"></Input></div>        
        <div class="text">OA单号</div>
      </div>
    </div>
    <div class="basics-rows">
      <div class="basics-rows-l">
        <div class="text">移交人</div>
        <div><Input placeholder="请输入工号，系统自动关联人员信息" style="width:100%;"></Input></div>
      </div>
      <div class="basics-rows-r">
        <div class="r-f" style="text-indent:8px;">xxxx/xx/xxxx/xxxxxxxx</div>        
        <div class="text">所属部门</div>
      </div>
    </div>   
    <div class="basics-rows">
      <div class="basics-rows-l">
        <div class="text">直属上级</div>
        <div style="text-indent:8px;">
          某某某          
        </div>
      </div>
      <div class="basics-rows-r">

      </div>
    </div>                     
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      dataSource: "0",
      dataSourceShow: [
        {value: "0",label: "OA系统"},
        {value: "1",label: "手动录入"},
        {value: "2",label: "其他"}
      ]

    };
  },
  components: {

  },
  methods: {

  }
}
</script>

