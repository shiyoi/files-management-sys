<style scoped lang="less">
@import './contract-file-list.less';
</style>
<template>
<!-- 档案列表组件 -->
  <div>
    <!-- 头部操作和表格部分 -->
    <div class="right-main-page">
      <fileListsTop></fileListsTop>
      <Table highlight-row @on-current-change="handleRowChange" border ref="selection" :columns="columns4" :data="data1"></Table>
      <div class="page-container-div">
        <Page :total="40" size="small" show-elevator show-sizer></Page>
      </div>
    </div>
    <!-- 下面tab部门 -->
    <div class="tab-info">
      <Row :gutter="32">
              <Col span="24" class="demo-tabs-style1">
                  <Tabs type="line" size="small">
                      <TabPane label="简要信息">
                          <brief-information :path="path" :info="toBriefInfo"></brief-information>
                      </TabPane>
                      <TabPane label="操作日志">
                          <div class="tab-info-con">
                            <Table height="200" border :columns="columns2" :data="data2"></Table>
                          </div>
                      </TabPane>
                      <TabPane label="借阅信息">
                          <div class="tab-info-con">
                            <Table height="200" border :columns="columns3" :data="data3"></Table>
                          </div>                          
                      </TabPane>
                  </Tabs>
              </Col>
        </Row>
      
    </div>
  </div>
</template>
<script>
import fileListsTop from '../small-components/file-lists-top/file-lists-top.vue';
import briefInformation from './brief-information/brief-information.vue';
import axios from 'axios';
export default {
  name: 'contract-file',
  props: ['path'],
  data: function () {
    return {
        columns4: [
            {
                type: 'selection',
                width: 60,
                align: 'center'
            },
            {
                title: '合同编号',
                key: 'contractNo'
            },
            {
                title: '合同名称',
                key: 'contractName'
            },
            {
                title: '腾邦签署主体',
                key: 'signedSubject'
            },
            {
                title: '档案归属',
                key: 'groupCompany'
            },
            {
                title: '对方公司名称',
                key: 'oppositeCompany'
            },
            {
                title: '业务内容摘要',
                key: 'businessBrief'
            },
            {
                title: '有效期',
                key: 'validityPeriod'
            },
            {
                title: '类别',
                key: 'enteringType'
            },
            {
                title: '状态',
                key: 'statusDesc'
            },
            {
                title: '收文时间',
                key: 'enteringDate'
            },
            {
                title: '借阅情况',
                key: 'borrowingSituation'
            }              
        ],
        data1: [
            {
                contractNo: 'AHU889001231',
                contractName: 'xxxxx公司xxxx业务合同',
                signedSubject: 'xxxxx单位名称',
                groupCompany: '腾邦国际',
                oppositeCompany: 'xxxxxx公司',
                businessBrief:'这是内容摘要这是内...',
                validityPeriod:'20180401-20190401',
                enteringType:'电子扫描件',
                statusDesc:'已收文',
                enteringDate:'20180401',
                borrowingSituation:'超时未还'
            },
                        {
                contractNo: 'AHU889001231',
                contractName: 'xxxxx公司xxxx业务合同',
                signedSubject: 'xxxxx单位名称',
                groupCompany: '腾邦国际',
                oppositeCompany: 'xxxxxx公司',
                businessBrief:'这是内容摘要这是内...',
                validityPeriod:'20180401-20190401',
                enteringType:'电子扫描件',
                statusDesc:'已收文',
                enteringDate:'20180401',
                borrowingSituation:'超时未还'
            }                           
        
        ],
        columns2: [
            {
                title: '操作次数',
                key: 'operating_frequency'
            },
            {
                title: '操作人',
                key: 'operating_people'
            },
            {
                title: '类型',
                key: 'type'
            },
            {
                title: '时间',
                key: 'time'
            },
            {
                title: '操作',
                key: 'operating'
            }                        
        ],
        data2: [
            {
                operating_frequency: '5',
                operating_people: '张三',
                type: '修改',
                time: '2018-05-06',
                operating: ''
            },
            {
                operating_frequency: '5',
                operating_people: '张三',
                type: '修改',
                time: '2018-05-06',
                operating: '查看操作日志'
            },
            {
                operating_frequency: '5',
                operating_people: '张三',
                type: '修改',
                time: '2018-05-06',
                operating: '查看操作日志'
            },
            {
                operating_frequency: '5',
                operating_people: '张三',
                type: '修改',
                time: '2018-05-06',
                operating: '查看操作日志'
            }
        ],
        columns3: [
            {
                title: '借出人',
                key: 'lend_people'
            },
            {
                title: '借阅人',
                key: 'borrowed_people'
            },
            {
                title: '借出时间',
                key: 'lend_time'
            },
            {
                title: '预计归还时间',
                key: 'expected_return_time'
            },
            {
                title: '实际归还时间',
                key: 'actual_return_time'
            },
            {
                title: '续借',
                key: 'renew'
            },
            {
                title: '操作',
                key: 'operating'
            }                                 
        ],
        data3: [
            {
                lend_people: '王子扬',
                borrowed_people: '张三',
                lend_time: '2018-05-06',
                expected_return_time: '2018-05-06',
                actual_return_time: '2018-05-06',
                renew:'2018-05-06',
                operating: ''
            },
            {
                lend_people: '王子扬',
                borrowed_people: '张三',
                lend_time: '2018-05-06',
                expected_return_time: '2018-05-06',
                actual_return_time: '2018-05-06',
                renew:'2018-05-06',
                operating: ''
            },
            {
                lend_people: '王子扬',
                borrowed_people: '张三',
                lend_time: '2018-05-06',
                expected_return_time: '2018-05-06',
                actual_return_time: '2018-05-06',
                renew:'2018-05-06',
                operating: ''
            },
            {
                lend_people: '王子扬',
                borrowed_people: '张三',
                lend_time: '2018-05-06',
                expected_return_time: '2018-05-06',
                actual_return_time: '2018-05-06',
                renew:'2018-05-06',
                operating: ''
            },
            {
                lend_people: '王子扬',
                borrowed_people: '张三',
                lend_time: '2018-05-06',
                expected_return_time: '2018-05-06',
                actual_return_time: '2018-05-06',
                renew:'2018-05-06',
                operating: ''
            }                        
        ],
        toBriefInfo:{
            contractName: '',//档案名称
            creatorId: '',//创建者工号
            createTm: '',//创建时间
            archiveMaterialStock: {
                archiveRoom: '',
                cabinet: '',
                columnNo: '',
                rowNo: '',
                piece: '',
            }
        },
    };
  },
  components: {
    fileListsTop,
    briefInformation
  },
  methods: {
    handleSelectAll (statusDesc) {
      this.$refs.selection.selectAll(statusDesc);
    },


    //my methods
    handleRowChange (currentRow, oldCurrentRow) {
        this.toBriefInfo = currentRow;
        console.log('当前选中行的数据：',this.toBriefInfo);
        // console.log(oldCurrentRow);
    }
  },


  //生命周期钩子函数
  created: function () {
    
  },
  beforeCreate: function () {
      //alert('beforeCreate');
  },
  activated: function () {
    let that =this;
    axios.post('http://10.2.104.201:8989/company/contract/find', {})
    .then(function (response) {
        // console.log(response);
        response.data.data.forEach((item,index,arr)=>{
            item.validityPeriod = `${item.effectiveEndDate}-${item.effectiveStartDate}`;
        });
        // console.log(response.data.data);
        // console.log(that.data1);
        that.data1 = response.data.data;
        console.log('从服务器接收的数据：',that.data1);


        //赋值第一条数据为初始值
        that.toBriefInfo.contractName = that.data1[0].contractName;//档案名称
        that.toBriefInfo.creatorId = that.data1[0].creatorId;//创建者
        that.toBriefInfo.createTm = that.data1[0].createTm;//创建时间
        that.toBriefInfo.archiveMaterialStock = that.data1[0].archiveMaterialStock;//创建时间


        console.log(this.toBriefInfo);



    })
    .catch(function (error) {
        console.log(error);
    });


  },
  deactivated: function () {
      //alert('停用');
  }
}
</script>
