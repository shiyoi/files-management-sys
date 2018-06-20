<style scoped lang="less">
@import './file-basic-info-content.less';
</style>

<template>
  <div class="basic-info-con">
    <div class="basics-rows">
      <div class="basics-rows-l">
        <div class="text"><span class="color-red">* </span>合同名称</div>
        <div><Input v-model="basicInfo.contractName" placeholder="" name="email" style="width:100%;"></Input></div>
        <span>{{ errors.first('email') }}</span>
      </div>
      <div class="basics-rows-r">
        <div class="r-f"><Input v-model="basicInfo.signedSubject" placeholder="" style="width:100%;"></Input></div>        
        <div class="text"><span class="color-red">* </span>腾邦签署主体</div>
      </div>
    </div>
    <div class="basics-rows">
        <div style="width:11%;float:left;text-align:right;padding-right:8px;"><span class="color-red">* </span>业务内容摘要</div>
        <div style="width:89%;float:left;"><Input v-model="basicInfo.businessBrief" placeholder="请输入业务类型，限制200字符" style="width: 100%;"></Input></div>  
    </div>
    <div class="basics-rows">
      <div class="basics-rows-l">
        <div class="text"><span class="color-red">* </span>档案归属</div>
        <div>
          <Select v-model="basicInfo.groupCompany" style="width:100%">
            <Option v-for="item in basicInfo.fileAttribution" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>          
        </div>
      </div>
      <div class="basics-rows-r">

      </div>
    </div>
    <div class="basics-rows">
      <div class="basics-rows-l">
        <div class="text"><span class="color-red">* </span>对方公司名称</div>
        <div><Input v-model="basicInfo.oppositeCompany" placeholder="" style="width:100%;"></Input></div>
      </div>
      <div class="basics-rows-r">
        <div class="r-f"><DatePicker v-model="basicInfo.effectiveDate" type="daterange" placement="bottom-end" placeholder="Select date" style="width: 100%"></DatePicker></div>        
        <div class="text"><span class="color-red">* </span>有效期</div>
      </div>
    </div>
    <div class="basics-rows">
      <div class="basics-rows-l">
        <div class="text">合同类型</div>
        <div>
          <Select v-model="basicInfo.contractType" style="width:100%">
            <Option v-for="item in basicInfo.fileTypeShow" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>           
        </div>
      </div>
      <div class="basics-rows-r">
        <div class="r-f"><Input v-model="basicInfo.contractNo" placeholder="请输入合同编号" style="width:100%;"></Input></div>        
        <div class="text">合同编号</div>
      </div>
    </div>
    <div class="basics-rows">
      <div class="basics-rows-l">
        <div class="text">签署人</div>
        <div>
          <Input v-model="basicInfo.signedUser" placeholder="请输入签署人" style="width:100%;"></Input>
          <!-- <Select v-model="basicInfo.signedUser" style="width:100%">
            <Option v-for="item in fileTypeShow" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>            -->
        </div>
      </div>
      <div class="basics-rows-r">
        <div class="r-f">
          <CheckboxGroup v-model="basicInfo.enteringType">
            <Checkbox label="original">
                <span>原件</span>
            </Checkbox>
            <Checkbox label="copy">
                <span>复印件</span>
            </Checkbox>
            <Checkbox label="electronicDocument">
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
          <Select v-model="basicInfo.status" style="width:100%">
            <Option v-for="item in basicInfo.statusShow" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>           
        </div>
      </div>
      <div class="basics-rows-r">
        <div class="r-f"><DatePicker v-model="basicInfo.enteringDate" type="date" placeholder="Select date" style="width: 100%"></DatePicker></div>        
        <div class="text">收文时间</div>
      </div>
    </div>
    <div class="basics-rows">
      <div class="basics-rows-l">
        <div class="text">收文人</div>
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
      basicInfo: {
        contractName: "",//合同名称
        signedSubject: "",//腾邦签署主体
        businessBrief: "",//业务内容摘要
        groupCompany: "0",//档案归属
          //档案归属数据
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
        oppositeCompany: "",//对方公司名称
        effectiveDate: "",//有效期时间
        effectiveStartDate: "",//有效期开始时间
        effectiveEndDate: "",//有效期结束时间
        contractType: "0",//合同类型
          //合同类型数据
          fileTypeShow: [
            {value: "0",label: "销售合同"},
            {value: "1",label: "采购合同"},
            {value: "2",label: "服务合同"}
          ],        
        contractNo: "",//合同编号
        signedUser: "",//签署人
        enteringType: ['original'],//收文类别
        status: "0",//状态
          //状态数据
          statusShow: [
            {value: "0",label: "未收文"},
            {value: "1",label: "已收文"},
            {value: "2",label: "已注销"}
          ],        
        enteringDate: "",//收文时间
        enteringUser: "某某某",//收文人
      }
    };
  },
  components: {

  },
  methods: {

  },
  created () {
    //请求表单下拉框的  配置信息
    // this.$axios.post('/init-base-data', {})
    // .then((res)=>{
    //   console.log(res);
    //   //遍历合同类型对象
    //   for (let name in res.data.contractType) {
    //     basicInfo.fileTypeShow.push({"value": name,"label": res.data.contractType[name]});
    //   }
    //   console.log(basicInfo.fileTypeShow);
      
    //   }

    // )
    // .catch();
  }
}
</script>

