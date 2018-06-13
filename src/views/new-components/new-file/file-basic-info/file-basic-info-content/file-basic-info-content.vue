<style scoped lang="less">
@import './file-basic-info-content.less';
</style>

<template>
  <div class="basic-info-con">
    <div class="basics-rows">
      <div class="basics-rows-l">
        <div class="text"><span class="color-red">* </span>合同名称</div>
        <div><Input placeholder="" style="width:100%;"></Input></div>
      </div>
      <div class="basics-rows-r">
        <div class="r-f"><Input placeholder="" style="width:100%;"></Input></div>        
        <div class="text"><span class="color-red">* </span>腾邦签署主体</div>
      </div>
    </div>
    <div class="basics-rows">
        <div style="width:11%;float:left;text-align:right;padding-right:8px;"><span class="color-red">* </span>业务内容摘要</div>
        <div style="width:89%;float:left;"><Input placeholder="请输入业务类型，限制200字符" style="width: 100%;"></Input></div>  
    </div>
    <div class="basics-rows">
      <div class="basics-rows-l">
        <div class="text"><span class="color-red">* </span>档案归属</div>
        <div>
          <Select v-model="fileAttri" style="width:100%">
            <Option v-for="item in fileAttribution" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>          
        </div>
      </div>
      <div class="basics-rows-r">

      </div>
    </div>
    <div class="basics-rows">
      <div class="basics-rows-l">
        <div class="text"><span class="color-red">* </span>对方公司名称</div>
        <div><Input placeholder="" style="width:100%;"></Input></div>
      </div>
      <div class="basics-rows-r">
        <div class="r-f"><DatePicker type="daterange" placement="bottom-end" placeholder="Select date" style="width: 100%"></DatePicker></div>        
        <div class="text"><span class="color-red">* </span>有效期</div>
      </div>
    </div>
    <div class="basics-rows">
      <div class="basics-rows-l">
        <div class="text">合同类型</div>
        <div>
          <Select v-model="fileType" style="width:100%">
            <Option v-for="item in fileTypeShow" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>           
        </div>
      </div>
      <div class="basics-rows-r">
        <div class="r-f"><Input placeholder="请输入合同编号" style="width:100%;"></Input></div>        
        <div class="text">合同编号</div>
      </div>
    </div>
    <div class="basics-rows">
      <div class="basics-rows-l">
        <div class="text">签署人</div>
        <div>
          <Select v-model="fileType" style="width:100%">
            <Option v-for="item in fileTypeShow" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>           
        </div>
      </div>
      <div class="basics-rows-r">
        <div class="r-f">
          <CheckboxGroup v-model="social">
            <Checkbox label="twitter">
                <span>原件</span>
            </Checkbox>
            <Checkbox label="facebook">
                <span>复印件</span>
            </Checkbox>
            <Checkbox label="github">
                <span>电子档</span>
            </Checkbox>
            </CheckboxGroup>        
        </div>        
        <div class="text">类别</div>
      </div>
    </div>
    <div class="basics-rows">
      <div class="basics-rows-l">
        <div class="text">状态</div>
        <div>
          <Select v-model="status" style="width:100%">
            <Option v-for="item in statusShow" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>           
        </div>
      </div>
      <div class="basics-rows-r">
        <div class="r-f"><DatePicker type="date" placeholder="Select date" style="width: 100%"></DatePicker></div>        
        <div class="text">收文时间</div>
      </div>
    </div>
    <div class="basics-rows">
      <div class="basics-rows-l">
        <div class="text">收文人</div>
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
      social: ['facebook', 'github'],
      fileAttri: "0",//档案归属 select 默认全部
      fileAttribution: [
        {value: "0",label: "全部"},
        {value: "1",label: "腾邦集团"},
        {value: "2",label: "商业集团"},
        {value: "3",label: "物流集团"},
        {value: "4",label: "差旅集团"},
        {value: "5",label: "资产集团"},
        {value: "6",label: "投资集团"},
        {value: "7",label: "旅游集团"},
        {value: "8",label: "金控集团"}
      ],
      fileType: "0",//合同类型
      fileTypeShow: [
        {value: "0",label: "销售合同"},
        {value: "1",label: "采购合同"},
        {value: "2",label: "服务合同"}
      ],
      status: "0",
      statusShow: [
        {value: "0",label: "未收文"},
        {value: "1",label: "已收文"},
        {value: "2",label: "已注销"}
      ]

    };
  },
  components: {

  },
  methods: {

  }
}
</script>

