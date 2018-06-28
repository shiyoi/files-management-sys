<style scoped lang="less">
@import './contract-file-list.less';
</style>
<template>
<!-- 档案列表组件 -->
  <div>
    <!-- 头部操作和表格部分 -->
    <div class="right-main-page">
      <fileListsTop></fileListsTop>
      <Table highlight-row @on-current-change="handleRowChange" @on-select="selectOneRow" border ref="selection" :columns="columns4" :data="fileListData"></Table>
      <div class="page-container-div">
        <Page :total="totalCount" size="small" :page-size="currentPageSize" show-elevator show-sizer show-total  @on-change="handlePage" @on-page-size-change='handlePageSize'></Page>
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
    import common from '@/libs/common.js';//bus 总线
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
                fileListData: [],
                columns2: [
                    {
                        title: '操作次数',
                        key: 'operating_frequency'
                    },
                    {
                        title: '操作人',
                        key: 'operattionUser'
                    },
                    {
                        title: '类型',
                        key: 'operationType'
                    },
                    {
                        title: '时间',
                        key: 'operattionDate'
                    },
                    {
                        title: '操作',
                        key: 'operating',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            alert('df');
                                        }
                                    }
                                }, '查看操作日志')
                            ]);
                        }                        
                    }                        
                ],
                data2: [
                    {
                        operating_frequency: '5',
                        operattionUser: '张三',
                        operationType: '修改',
                        operattionDate: '2018-05-06',
                        operating: ''
                    },
                    {
                        operating_frequency: '5',
                        operattionUser: '张三',
                        operationType: '修改',
                        operattionDate: '2018-05-06',
                        operating: '查看操作日志'
                    },
                    {
                        operating_frequency: '5',
                        operattionUser: '张三',
                        operationType: '修改',
                        operattionDate: '2018-05-06',
                        operating: '查看操作日志'
                    },
                    {
                        operating_frequency: '5',
                        operattionUser: '张三',
                        operationType: '修改',
                        operattionDate: '2018-05-06',
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
                shrink: false,
                totalCount: 0,
                currentPage: 1,
                currentPageSize: 30,
                checkBoxSelectedData: []//已选  复选框 的合同数组
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
            //my methods  单击一行
            handleRowChange (currentRow, oldCurrentRow) {
                this.toBriefInfo = currentRow;//更新简要信息
                
                //调操作日志接口
                let formData = new FormData();
                formData.append('archiveNo',this.toBriefInfo.archiveNo);
                formData.append('page','0');
                formData.append('pageSize','5');

                this.$axios.post('/common/log/find',formData).then( res => {
                    console.log(res);
                }).catch( err => {
                    console.log('获取操作日志失败' + err);
                });
                console.log('当前选中行的数据：',this.toBriefInfo);
                console.log(this.toBriefInfo.archiveNo,typeof this.toBriefInfo.archiveNo);
            },
            //改变页码
            handlePage (newPage) {
                //loading 中
                let msg = this.$Message.loading({
                    content: 'Loading...',
                    duration: 0
                });     
                // console.log('变化至页码：'+a,typeof a,'每页条数'+this.currentPageSize,typeof this.currentPageSize);    //page
                let formdate = new FormData();
                //构建查询字段
                this.currentPage = newPage;//当前页码
                formdate.append('page',this.currentPage.toString());
                formdate.append('pageSize',this.currentPageSize.toString());

                this.$axios.post('company/contract/find',formdate).then( res => {
                    // console.log('总条数：',res.data.count,'d当前查询条数'+res.data.data.length);
                    this.preProcessingData(res);//数据预处理
                    setTimeout(msg, 0);//取消loading
                }).catch( err => {
                    console.log('异步请求合同档案/档案列表失败',err);  
                    setTimeout(msg, 0);//取消loading   
                });
            },
            //改变每页条数
            handlePageSize (newPageSize) {
                //loading 中
                let msg = this.$Message.loading({
                    content: 'Loading...',
                    duration: 0
                });                
                this.currentPage = 1;//改变每页条数时默认去第一页
                // console.log('页码：' + this.currentPage, typeof this.currentPage,'每页条数变化至'+a,typeof a);    //page
                let formdate = new FormData();
                {
                    //构建查询字段
                    this.currentPageSize = newPageSize;
                    formdate.append('page',this.currentPage.toString());
                    formdate.append('pageSize',this.currentPageSize.toString());
                }
                this.$axios.post('company/contract/find',formdate).then( res => {
                    // console.log('总条数：',res.data.count,'d当前查询条数'+res.data.data.length);
                    this.preProcessingData(res);//数据预处理
                    setTimeout(msg, 0);//取消loading
                }).catch( err => {
                    console.log('异步请求合同档案/档案列表失败',err);  
                    setTimeout(msg, 0);//取消loading   
                });
            },
            //显示列表数据前的预处理 传入一个 服务器响应数据 res
            preProcessingData (res) {
                if(0 != res.data.data.length) {
                    //显示前，处理数据（有效期时间的拼接）
                    res.data.data.forEach((item,index,arr)=>{
                        item.validityPeriod = `${item.effectiveStartDate}-${item.effectiveEndDate}`;
                    });
                }
                this.fileListData = res.data.data;
                console.log('本次从服务器接收的数据：',this.fileListData);
                // console.log('总条数：',res.data.count);
                this.totalCount = res.data.count;

                //赋初始值   (考虑到后台不一定可靠，拿不到数据时 this.fileListData 为空数组时------显示暂无数据)
                this.toBriefInfo.contractName = this.fileListData[0] === undefined ? "暂无数据" : this.fileListData[0].contractName;//档案名称
                this.toBriefInfo.creatorId = this.fileListData[0] === undefined ? "暂无数据" : this.fileListData[0].creatorId;//创建者
                this.toBriefInfo.createTm = this.fileListData[0] === undefined ? "暂无数据" : this.fileListData[0].createTm;//创建时间
                if (this.fileListData[0] != undefined && this.fileListData[0].hasOwnProperty('archiveMaterialStock')) {
                    this.toBriefInfo.archiveMaterialStock = this.fileListData[0].archiveMaterialStock;//储存位置
                }
            },
            //复选框选中任意一行时触发，参数一表示：所有选中的行数据，参数二表示：当前选中行的数据
            selectOneRow (selection,row) {
                console.log(selection);
                console.log('---------------------------');
                console.log(row);
                this.checkBoxSelectedData = selection;

            }

        },

        //生命周期钩子函数
        created: function () {   
            //loading 中
            let msg = this.$Message.loading({
                content: 'Loading...',
                duration: 0
            });     
            let formdate = new FormData();
            //构建查询字段
            formdate.append('page',this.currentPage.toString());
            formdate.append('pageSize',this.currentPageSize.toString());
                             
            // 异步请求  合同档案-档案列表接口
            this.$axios.post('company/contract/find', formdate)
            .then( res => {
                this.preProcessingData(res);
                setTimeout(msg, 0);//取消loading
            })
            .catch(err => {
                console.log('异步请求合同档案/档案列表失败',err);  
                setTimeout(msg, 0);//取消loading           
            });
        },
        mounted () {
            //接收导出弹窗的确定事件
            common.bus.$on('exportExcelData', (msg) => {
                // let formdata = new FormData();
                // console.log(this.checkBoxSelectedData[0].archiveBarcode.archiveType);//取第一个的档案类型
                // formdata.append();
                // for (let v of this.checkBoxSelectedData) {
                //     console.log(v.archiveNo);
                // }
                
                //archiveType   string
                //archiveNos

            });
        },
        beforeCreate: function () {
            //alert('beforeCreate');
        },
        activated: function () {
        },
        deactivated: function () {
            //alert('停用');
        }       
    }
</script>
