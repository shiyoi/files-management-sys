<style scoped lang="less">
@import './file-basic-info-content.less';
</style>

<template>
  <div class="basic-info-con">
    <div class="basics-rows">
      <div class="basics-rows-l">
        <div class="text"><span class="color-red">* </span>合同名称：</div>
        <div><Input ref="contractName" v-model="basicInfo.contractName" placeholder="请输入合同名称" name="email" style="width:100%;" :maxlength="30"></Input></div>
        <span>{{ errors.first('email') }}</span>
      </div>
      <div class="basics-rows-r">
        <div class="r-f"><Input ref="signedSubject" v-model="basicInfo.signedSubject" placeholder="请输入腾邦签署主体" style="width:100%;" :maxlength="30"></Input></div>        
        <div class="text"><span class="color-red">* </span>腾邦签署主体：</div>
      </div>
    </div>
    <div class="basics-rows" style="height:90px;">
        <div style="width:12.5%;float:left;text-align:right;padding-right:8px;">业务内容摘要：</div>
        <div style="width:87.5%;float:left;">
          <Input ref="businessBrief" v-model="basicInfo.businessBrief" type="textarea" :rows="4" placeholder="请输入业务内容摘要，限制200字符。（非必填）" :maxlength="200"></Input>                      
        </div>  
    </div>
    <div class="basics-rows">
      <div class="basics-rows-l">
        <div class="text"><span class="color-red">* </span>档案归属：</div>
        <div>
          <Select v-model="basicInfo.groupCompany" style="width:100%">
            <Option v-for="(item,index) in fileAttribution" :value="item.value" :key="index">{{ item.label }}</Option>
          </Select>          
        </div>
      </div>
      <div class="basics-rows-r">

      </div>
    </div>
    <div class="basics-rows">
      <div class="basics-rows-l">
        <div class="text"><span class="color-red">* </span>对方公司名称：</div>
        <div><Input ref="oppositeCompany" v-model="basicInfo.oppositeCompany" placeholder="请输入对方公司名称" style="width:100%;" :maxlength="30"></Input></div>
      </div>
      <div class="basics-rows-r">
        <div class="r-f"><DatePicker ref="effectiveDate" v-model="effectiveDate" type="daterange" :editable="constFalse" placement="bottom-end" placeholder="Select date" style="width: 100%"></DatePicker></div>        
        <div class="text"><span class="color-red">* </span>有效期：</div>
      </div>
    </div>
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
          <!-- <Select v-model="basicInfo.signedUser" style="width:100%">
            <Option v-for="item in fileTypeShow" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>            -->
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
    </div>                            
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      constFalse: false,
      //档案归属数据
      fileAttribution: [
        {value: "TG",label: "腾邦集团"},
        {value: "TT",label: "商业集团"},
        {value: "TL",label: "物流集团"},
        {value: "TBCL",label: "差旅集团"},
        {value: "TZ",label: "资产集团"},
        {value: "TBTZ",label: "投资集团"},
        {value: "TBLY",label: "旅游集团"},
        {value: "TBJK",label: "金控集团5"}
      ],   
      //合同类型数据
      fileTypeShow: [
        {value: "10",label: "销售合同"},
        {value: "20",label: "采购合同"},
        {value: "30",label: "服务合同"}
      ],    
      enteringTypeShow: [
          {value: "10",label: "原件"},
          {value: "20",label: "复印件"},
          {value: "30",label: "电子档"}          
      ],  
      //状态数据
      statusShow: [
        {value: "10",label: "未收文"},
        {value: "20",label: "已收文"},
        {value: "30",label: "已注销"}
      ],   
      effectiveDate: "",//有效期时间   
      enteringDate: "", //收文时间            
      basicInfo: {
        contractName: "",//合同名称
        signedSubject: "",//腾邦签署主体
        businessBrief: "",//业务内容摘要
        groupCompany: "TT",//档案归属      
        oppositeCompany: "",//对方公司名称
        effectiveStartDate: "",//有效期开始时间
        effectiveEndDate: "",//有效期结束时间
        contractType: "20",//合同类型
        contractNo: "",//合同编号
        signedUser: "",//签署人
        enteringType: ["10"],//收文类别
        status: "10",//状态
        enteringDate: "",//收文时间
        enteringUser: "某某某",//收文人
      }

    };
  },
  computed: {
    //有效时间
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
  watch: {
    effective (newVal,oldVal) {
      if (Object.keys(newVal).length === 2) {
        //有效期时间分开为开始  和  结束时间 并格式化为  2018-06-02 格式
        this.basicInfo.effectiveStartDate = newVal[0].Format("yyyy-MM-dd");
        this.basicInfo.effectiveEndDate = newVal[1].Format("yyyy-MM-dd");
      }
    },
    entering (newVal,oldVal) {
      this.basicInfo.enteringDate = newVal.Format("yyyy-MM-dd");
    }
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
  directives: {
      focus: {
          inserted: function (el, {value}) {
              if (value) {
                  el.focus();
              }
          }
      }
  },  
  created () {
    //请求表单下拉框的  配置信息
    this.$axios.post('/common/init-base-data').then( res => {
        this.initOptions(res.data.data.contractType,this.fileTypeShow);//初始化  合同类型 options
        this.initOptions(res.data.data.status,this.statusShow);//初始化  状态 options
        this.initOptions(res.data.data.groupCompany,this.fileAttribution);//初始化  档案归属 options
        this.initOptions(res.data.data.enteringType,this.enteringTypeShow);//初始化  档案类别 复选框
      }
    ).catch( err => {"合同类型接口调用失败" + console.log(err)});
  }
}
</script>

