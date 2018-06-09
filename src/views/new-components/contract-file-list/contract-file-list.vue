<style scoped lang="less">
@import './contract-file-list.less';
</style>
<template>
<!-- 档案列表组件 -->
  <div>
    <!-- 头部操作和表格部分 -->
    <div class="right-main-page">
      <fileListsTop></fileListsTop>
      <Table border ref="selection" :columns="columns4" :data="data1"></Table>
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
                          <brief-information></brief-information>
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
export default {
  name: 'contract-file',
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
            key: 'contract_number'
        },
        {
            title: '合同名称',
            key: 'contract_name'
        },
        {
            title: '腾邦签署主体',
            key: 'tempus_signing_subject'
        },
        {
            title: '档案归属',
            key: 'file_attribution'
        },
        {
            title: '对方公司名称',
            key: 'partner_company_name'
        },
        {
            title: '业务内容摘要',
            key: 'summary_of_content'
        },
        {
            title: '有效期',
            key: 'validity_period'
        },
        {
            title: '类别',
            key: 'category'
        },
        {
            title: '状态',
            key: 'status'
        },
        {
            title: '收文时间',
            key: 'receipt_time'
        },
        {
            title: '借阅情况',
            key: 'borrowing_situation'
        }              
    ],
    data1: [
        {
            contract_number: 'AHU889001231',
            contract_name: 'xxxxx公司xxxx业务合同',
            tempus_signing_subject: 'xxxxx单位名称',
            file_attribution: '腾邦国际',
            partner_company_name: 'xxxxxx公司',
            summary_of_content:'这是内容摘要这是内...',
            validity_period:'20180401-20190401',
            category:'电子扫描件',
            status:'已收文',
            receipt_time:'20180401',
            borrowing_situation:'超时未还'
        },
        {
            contract_number: 'AHU889001231',
            contract_name: 'xxxxx公司xxxx业务合同',
            tempus_signing_subject: 'xxxxx单位名称',
            file_attribution: '腾邦国际',
            partner_company_name: 'xxxxxx公司',
            summary_of_content:'这是内容摘要这是内...',
            validity_period:'20180401-20190401',
            category:'电子扫描件',
            status:'已收文',
            receipt_time:'20180401',
            borrowing_situation:'超时未还'
        },
        {
            contract_number: 'AHU889001231',
            contract_name: 'xxxxx公司xxxx业务合同',
            tempus_signing_subject: 'xxxxx单位名称',
            file_attribution: '腾邦国际',
            partner_company_name: 'xxxxxx公司',
            summary_of_content:'这是内容摘要这是内...',
            validity_period:'20180401-20190401',
            category:'电子扫描件',
            status:'已收文',
            receipt_time:'20180401',
            borrowing_situation:'超时未还'
        },
        {
            contract_number: 'AHU889001231',
            contract_name: 'xxxxx公司xxxx业务合同',
            tempus_signing_subject: 'xxxxx单位名称',
            file_attribution: '腾邦国际',
            partner_company_name: 'xxxxxx公司',
            summary_of_content:'这是内容摘要这是内...',
            validity_period:'20180401-20190401',
            category:'电子扫描件',
            status:'已收文',
            receipt_time:'20180401',
            borrowing_situation:'超时未还'
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
    ]            
    };
  },
  components: {
    fileListsTop,
    briefInformation
  },
  methods: {
    handleSelectAll (status) {
      this.$refs.selection.selectAll(status);
    }
  }
}
</script>
