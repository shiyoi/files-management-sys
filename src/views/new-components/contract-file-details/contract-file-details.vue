<style scoped lang="less">
@import './contract-file-details.less';
</style>
<template>
<div>
  <div class="file-details-con">
    <div class="basic-info-header">
      <div style="width:50%;float:left;">合同档案基本信息</div> 
      <div style="width:50%;float:left;text-align:right;padding-right:20px;">流程单号：454545856258456</div>
    </div>
    <div class="basic-info-con">
      <div class="basics-rows">
        <div class="basics-rows-l">
          <div class="text">合同名称：</div>
          <div>腾邦国际</div>
        </div>
        <div class="basics-rows-r">
          <div class="r-f">腾邦国际</div>        
          <div class="text">腾邦签署主体：</div>
        </div>
      </div>
       <div class="basics-rows" style="height:90px;">
          <div style="width:12.5%;float:left;text-align:right;padding-right:8px;">业务内容摘要：</div>
          <div style="width:87.5%;float:left;">
            <Input v-model="someText" type="textarea" :rows="4" readonly></Input>                      
          </div>  
      </div>    
      <div class="basics-rows">
        <div class="basics-rows-l">
          <div class="text">档案归属：</div>
          <div>
            腾邦国际
          </div>
        </div>
        <div class="basics-rows-r">
        </div>
      </div>
      
      <div class="basics-rows">
        <div class="basics-rows-l">
          <div class="text">对方公司名称：</div>
          <div>xxxxx公司</div>
        </div>
        <div class="basics-rows-r">
          <div class="r-f">2017年10月11日-2018年10月12日</div>        
          <div class="text">有效期：</div>
        </div>
      </div>
      <!--
      <div class="basics-rows">
        <div class="basics-rows-l">
          <div class="text">合同类型：</div>
          <div>
            <Select v-model="basicInfo.contractType" style="width:100%">
              <Option v-for="(item,index) in fileTypeShow" :value="item.value" :key="index">{{ item.label }}</Option>
            </Select>           
          </div>
        </div>
        <div class="basics-rows-r">
          <div class="r-f"><Input v-model="basicInfo.contractNo" placeholder="请输入合同编号" style="width:100%;"></Input></div>        
          <div class="text">合同编号：</div>
        </div>
      </div>
      <div class="basics-rows">
        <div class="basics-rows-l">
          <div class="text">签署人：</div>
          <div>
            <Input v-model="basicInfo.signedUser" placeholder="请输入签署人" style="width:100%;" :maxlength="30"></Input>

          </div>
        </div>
        <div class="basics-rows-r">
          <div class="r-f">
            <CheckboxGroup v-model="basicInfo.enteringType">
              <Checkbox v-for="(item,index) in enteringTypeShow" :key="index" :label="item.value">
                  <span>{{ item.label }}</span>
              </Checkbox>
            </CheckboxGroup>        
          </div>        
          <div class="text">类别：</div>
        </div>
       </div>
      <div class="basics-rows">
        <div class="basics-rows-l">
          <div class="text">状态：</div>
          <div>
            <Select v-model="basicInfo.status" style="width:100%">
              <Option v-for="(item,index) in statusShow" :value="item.value" :key="index">{{ item.label }}</Option>
            </Select>           
          </div>
        </div>
        <div class="basics-rows-r">
          <div class="r-f"><DatePicker v-model="enteringDate" type="date" :disabled="basicInfo.status === '20' ? false : true" :editable="constFalse" placement="bottom-end" placeholder="Select date" style="width: 100%"></DatePicker></div>        
          <div class="text">收文时间：</div>
        </div>
      </div>
      <div class="basics-rows">
        <div class="basics-rows-l">
          <div class="text">收文人：</div>
          <div style="text-indent:8px;">
            {{ basicInfo.enteringUser }}
          </div>
        </div>
        <div class="basics-rows-r">
        
        </div>
      </div>                            -->
    </div>    
  </div>
</div>
</template>
<script>
export default {
  name: 'contract-file-details',
  data: function () {
    return {
      someText: "fdsfdsjfodsjfdsifjdsiofjdiofjidsfjiodsjfiodsjfiodsfdsiofjdsiofjdsiofjodijoidsjfoidsjfoidsjfiodsjfoidsjiodsjfoidsjfoidsjfoidsjfoidsj"



 
    };
  },
  methods: {

  }
}
</script>


