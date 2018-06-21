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
          <Select v-model="transferInfo.resource" style="width:100%">
            <Option v-for="item in transferInfo.dataSourceShow" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>           
        </div>
      </div>
      <div class="basics-rows-r">
        <div class="r-f"><Input v-model="transferInfo.processNo" placeholder="请输入OA单号后，系统自动关联" style="width:100%;" :maxlength="30"></Input></div>        
        <div class="text">OA单号</div>
      </div>
    </div>
    <div class="basics-rows">
      <div class="basics-rows-l">
        <div class="text">移交人</div>
        <div><Input v-model="transferInfo.transferNo" placeholder="请输入工号，系统自动关联人员信息" style="width:100%;" :maxlength="30"></Input></div>
      </div>
      <div class="basics-rows-r">
        <div class="r-f" style="text-indent:8px;">{{ transferInfo.department }}</div>        
        <div class="text">所属部门</div>
      </div>
    </div>   
    <div class="basics-rows">
      <div class="basics-rows-l">
        <div class="text">直属上级</div>
        <div style="text-indent:8px;">
          {{ transferInfo.leaderNo }}        
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
      transferInfo: {
        resource: "20",//数据来源
        //数据来源 的选项数据
        dataSourceShow: [
          {value: "10",label: "OA系统"},
          {value: "20",label: "手动录入"},
          {value: "30",label: "其他"}
        ],
        processNo: "",//流程单号
        transferNo: "",//移交人
        department: "xxxx/xx/xxxx/xxxxxxxx",//所属部门
        leaderNo: "某某某",//直属上级
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
    this.$axios.post('/common/init-transfer-data').then( res => {
        this.initOptions(res.data.data.resource,this.transferInfo.dataSourceShow);
      }
    ).catch( err => {"init-transfer-data接口调用失败" + console.log(err)});
  }    
}
</script>

