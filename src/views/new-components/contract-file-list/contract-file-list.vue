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
                      <TabPane label="简要信息">标签一的内容</TabPane>
                      <TabPane label="操作日志">
                          <div class="tab-info-con">
                            <Table border :columns="columns2" :data="data2"></Table>
                          </div>
                      </TabPane>
                      <TabPane label="借阅信息">标签三的内容</TabPane>
                  </Tabs>
              </Col>
        </Row>
      
    </div>
  </div>
</template>
<script>
import fileListsTop from '../small-components/file-lists-top/file-lists-top.vue';
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
                title: 'Name',
                key: 'name'
            },
            {
                title: 'Age',
                key: 'age'
            },
            {
                title: 'Address',
                key: 'address'
            }
        ],
        data2: [
        {
            name: 'John Brown',
            age: 18,
            address: 'New York No. 1 Lake Park',
            date: '2016-10-03'
        },
        {
            name: 'Jim Green',
            age: 24,
            address: 'London No. 1 Lake Park',
            date: '2016-10-01'
        },
        {
            name: 'Joe Black',
            age: 30,
            address: 'Sydney No. 1 Lake Park',
            date: '2016-10-02'
        },
        {
            name: 'Jon Snow',
            age: 26,
            address: 'Ottawa No. 2 Lake Park',
            date: '2016-10-04'
        }
    ]      
    };
  },
  components: {
    fileListsTop
  },
  methods: {
    handleSelectAll (status) {
      this.$refs.selection.selectAll(status);
    }
  }
}
</script>
