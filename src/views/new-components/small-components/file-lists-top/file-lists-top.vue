<style scoped lang="less">
@import './file-lists-top.less';
</style>
<template>
  <div class="list-top">
    <ul>
      <li @click="search = !search;"><Icon size="14" type="search"></Icon><span>搜索</span></li>
      <li @click="openNewFiles"><Icon size="14" type="plus"></Icon><span>新建</span></li>
      <li style="width:90px;"><Icon size="14" type="reply-all"></Icon><span>批量导入</span></li>
      <li @click="exportExcel = !exportExcel;"><Icon size="14" type="share"></Icon><span>导出</span></li>
      <li><Icon size="14" type="android-sync"></Icon><span>刷新</span></li>
      <li style="width:110px;"><Icon size="14" type="forward"></Icon><span>移入批量操作</span></li>
      <li><Icon size="14" type="android-print"></Icon><span>打印</span></li>
      <li><Icon size="14" type="social-dropbox"></Icon><span>迁移</span></li>
    </ul>
    <Modal v-model="search" :title="searchBoxTitle" :mask-closable="false" @on-ok="ok" @on-cancel="cancel" width="620">
      <div class="searchBox">
       
          <div class="rows">
            <div class="l">
              <div class="txt">腾邦签署主体</div>
              <div class="in"><Input placeholder="" style="width:190px"></Input></div>
            </div>
            <div class="r">
              <div class="txt">档案归属</div>
              <div class="in">
                <Select v-model="fileAttri" style="width:190px">
                  <Option v-for="item in fileAttribution" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
              </div>
            </div>
          </div>

          <div class="rows">
            <div class="l">
              <div class="txt">业务内容摘要</div>
              <div class="in"><Input placeholder="" style="width:190px"></Input></div>
            </div>
            <div class="r">
              <div class="txt">类别</div>
              <div class="in">
                <Select v-model="type" style="width:190px">
                  <Option v-for="item in fileType" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>                
              </div>
            </div>
          </div> 

          <div class="rows">
            <div class="l">
              <div class="txt">合同编号</div>
              <div class="in"><Input placeholder="" style="width:190px"></Input></div>
            </div>
            <div class="r">
              <div class="txt">有效期</div>
              <div class="in">
                <DatePicker type="daterange" placement="bottom-end" placeholder="Select date" style="width: 190px"></DatePicker>
              </div>
            </div>
          </div>  

          <div class="rows">
            <div class="l">
              <div class="txt">收文时间</div>
              <div class="in">
                <DatePicker type="date" placeholder="Select date" style="width: 190px"></DatePicker>
              </div>
            </div>
            <div class="r">
              <div class="txt">状态</div>
              <div class="in">
                <Select v-model="status" style="width:190px">
                  <Option v-for="item in fileStatus" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>                 
              </div>
            </div>
          </div> 

          <div class="rows">
            <div class="l">
              <div class="txt">对方公司名称</div>
              <div class="in"><Input placeholder="" style="width:190px"></Input></div>
            </div>
            <div class="r">
              <div class="txt">借阅情况</div>
              <div class="in">
                <Select v-model="situation" style="width:190px">
                  <Option v-for="item in fileSituation" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>                 
              </div>
            </div>
          </div>                        
      </div>

      <div slot="footer">
        <Button type="primary">查询</Button>
        <Button @click="search = false">重置</Button>
      </div>
    </Modal>
    <Modal v-model="exportExcel" :title="exportBoxTitle" :mask-closable="false" @on-ok="ok" @on-cancel="cancel" width="620">
      <div class="searchBox">
          <div>您确定要将选定项导出Excel表格吗</div>     
      </div>

      <div slot="footer">
        <Button @click="exportExcel = false;exportExcelSuccess = true" type="primary">确定</Button>
        <Button @click="exportExcel = false">取消</Button>
      </div>
    </Modal>   
    <Modal v-model="exportExcelSuccess" :title="exportBoxSuccessTitle" :mask-closable="false" @on-ok="ok" @on-cancel="cancel" width="620">
      <div class="searchBox">
          <div>导出成功</div>     
      </div>

      <div slot="footer">
        <Button @click="exportExcelSuccess = false">完成</Button>
      </div>
    </Modal>       
  </div>
</template>
<script>
import common from '@/libs/common.js';//bus 总线
//引入配置文件
import config from '@/libs/config.js';
export default {
  name: 'file-lists-top',
  data: function () {
    return {
      search: false,//搜索弹窗
      exportExcel: false,//导出弹窗
      exportExcelSuccess: false,//导出成功弹窗
      searchBoxTitle: "搜索",
      exportBoxTitle: "批量导出",
      exportBoxSuccessTitle: "导出成功",
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
      type: "0",//类别 select 默认全部
      fileType: [
        {value: "0",label: "全部"},
        {value: "1",label: "原件"},
        {value: "2",label: "复印件"},
        {value: "3",label: "电子扫描件"}    
      ],
      status: "0",//状态 默认全部
      fileStatus: [
        {value: "0",label: "全部"},
        {value: "1",label: "未收文"},
        {value: "2",label: "已收文"},
        {value: "3",label: "已注销"}
      ],
      situation: "0",//借阅情况 默认全部
      fileSituation: [
        {value: "0",label: "全部"},
        {value: "1",label: "未借阅"},
        {value: "2",label: "未归还"},
        {value: "3",label: "超时未还"},
      ]
      
    };
  },

  methods: {
    ok: function () {
      
    },
    cancel: function () {

    },
    openNewFiles : function () {
      console.log(config[1].childs[0].childs[1].to);
      // common.bus.$emit('on-NewFiles',config[1].childs[0].childs[1].to);
      this.$router.push(config[1].childs[0].childs[1].to);
    }
  }
}
</script>

