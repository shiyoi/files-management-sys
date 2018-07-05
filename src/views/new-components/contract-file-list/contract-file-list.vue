<style scoped lang="less">
@import './contract-file-list.less';
</style>
<template>
<!-- 档案列表组件 -->
  <div>
    <!-- 头部操作和表格部分 -->
    <div class="right-main-page">
      <fileListsTop ref="fileListTop" :checkedNum="checkedNum" @refreshList="refreshList" @handleBatchImport="handleBatchImport" @exportExcelData="exportExcelData" @searchFile="searchFile" @printPage="printPage" @migrate="migrate" @migrateSubmit="migrateSubmit" @moveInBatchOperating="moveInBatchOperating"></fileListsTop>
      <Table class="aaa" highlight-row @on-current-change="handleRowChange" @on-row-dblclick="showFileDetails" @on-select="selectOneRow" @on-select-all="selectAllRow" @on-selection-change="selectionChange" border ref="selection" :columns="columns4" :data="fileListData" :size="tableSize"></Table>
      <div class="page-container-div">
        <Page :total="totalCount" size="small" :page-size="currentPageSize" show-elevator show-sizer show-total  @on-change="handlePage" @on-page-size-change='handlePageSize' :page-size-opts="pageSizeOpts"></Page>
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
                            <Table height="200" border :columns="columns2" :data="data2" :size="tableSize"></Table>
                          </div>
                      </TabPane>
                      <TabPane label="借阅信息">
                          <div class="tab-info-con">
                            <Table height="200" border :columns="columns3" :data="data3" :size="tableSize"></Table>
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
    import common from '@/libs/common';//bus 总线
    import {groupCompany,enteringType,status,borrowFlag} from '@/libs/select_config';//配置信息
    export default {
        name: 'contract-file',
        props: ['path'],
        data: function () {
            return {
                tableSize: 'small',//表格size
                pageSizeOpts: [30],//每页条数
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
                        key: 'businessBrief',
                        render: (h,params) => {
                            return h(
                                'Poptip',
                                {props:{trigger: 'hover'}},
                                'ddd');
                       
                        }
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
                        key: 'borrowFlag'
                    }              
                ],
                fileListData: [],
                columns2: [
                    {
                        title: '操作次数',
                        key: 'operatingFrequency'
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
                data2: [],
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
                data3: [],
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
                checkBoxSelectedData: [],//已选  复选框 的合同数组
                // batchOperatingArr: []//批量操作的数组
            };
        },
        computed: {
            checkedNum () {
                return this.checkBoxSelectedData.length;
            }
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
                formData.append('page','1');
                formData.append('pageSize','5');

                this.$axios.all([
                    this.$axios.post('/common/log/find',formData),
                    this.$axios.post('/common/borrow/find',formData),
                    ]).then(this.$axios.spread( (log,borrowInfo) => {
                    console.log('日志信息',log.data.data);
                    console.log('借阅信息',borrowInfo.data.data);
                    this.data2 = log.data.data;
                    this.data3 = borrowInfo.data.data;
                })).catch( (err) => {
                    console.log('读取日志或借阅信息出错'+err);
                });
              



                //console.log('当前选中行的数据：',this.toBriefInfo);
            },
            //双击一行，显示详情页面
            showFileDetails () {
                this.$router.push({name:'contractFileDetails'});
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
                    //显示前，处理数据
                    res.data.data.forEach((item,index,arr)=>{
                        //有效期时间的拼接
                        item.validityPeriod = `${item.effectiveStartDate}-${item.effectiveEndDate}`;
                        //档案归属编码转为汉字
                        for (let obj of groupCompany) {
                            if(obj.value === item.groupCompany) {
                                item.groupCompany = obj.label;
                            } 
                        }
                        //类别编码转汉字
                        item.enteringType = item.enteringType.split(',').map( item => {
                            for (let v of enteringType) {if (item === v.value) {return v.label;}}
                        }).join('，');
                        //收文时间格式化显示
                        if (item.enteringDate) item.enteringDate = new Date(item.enteringDate).Format("yyyy-MM-dd");
                        //借阅情况转换
                        for (let obj of borrowFlag) {
                            if(obj.value == item.borrowFlag) {
                                item.borrowFlag = obj.label;
                            } 
                        }                        
                    });
                }
                this.fileListData = res.data.data;
                console.log('本次从服务器接收的数据：',this.fileListData);
                // console.log('总条数：',res.data.count);
                this.totalCount = res.data.count;

                //赋初始值   (考虑到后台不一定可靠，拿不到数据时 this.fileListData 为空数组时------显示暂无数据)
                this.toBriefInfo.contractName = this.fileListData[0] === undefined ? "" : this.fileListData[0].contractName;//档案名称
                this.toBriefInfo.creatorId = this.fileListData[0] === undefined ? "" : this.fileListData[0].creatorId;//创建者
                this.toBriefInfo.createTm = this.fileListData[0] === undefined ? "" : this.fileListData[0].createTm;//创建时间
                if (this.fileListData[0] != undefined && this.fileListData[0].hasOwnProperty('archiveMaterialStock')) {
                    this.toBriefInfo.archiveMaterialStock = this.fileListData[0].archiveMaterialStock;//储存位置
                } else {
                    for (let i of Object.keys(this.toBriefInfo.archiveMaterialStock)) {
                        this.toBriefInfo.archiveMaterialStock[i] = '';
                    }
                }
            },
            getCheckedDataLength () {
                return this.checkBoxSelectedData.length;
            },
            //复选框选中任意一行时触发，参数一表示：所有选中的行数据，参数二表示：当前选中行的数据
            selectOneRow (selection,row) {
                this.checkBoxSelectedData = selection;
            },
            //全选
            selectAllRow (selection) {
                this.checkBoxSelectedData = selection;
            },
            //选中项发生变化
            selectionChange (selection) {
                this.checkBoxSelectedData = selection;
            },
            //获取列表最新数据（刷新列表）
            refreshList () {
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
            //处理批量导入
            handleBatchImport (file) {
                let formdate = new FormData();                             
                formdate.append('importFile',file[0]);
                this.$axios.post('/company/contract/import',formdate).then( res => {
                    this.$refs.fileListTop.batchImportFields.batchFiles.pop();//导入成功后清空已选文件
                    this.$refs.fileListTop.batchImportFields.importBatchSuccess = true;//打开导出成功弹窗
                }).catch( err => {
                    console.log('批量导入失败' , err);  
                });                 
            },
            //批量导出
            exportExcelData () {
                let formdata = new FormData();
                formdata.append('archiveType',this.checkBoxSelectedData[0].archiveBarcode.archiveType);
                let arr = [];
                for (let v of this.checkBoxSelectedData) {
                    arr.push(v.archiveNo);
                }
                formdata.append('archiveNos',arr);
                formdata.append('operateDesc','LIST');
                this.$axios({
                    method: 'post',
                    url: '/common/export',
                    data: formdata,
                    responseType: 'blob'
                }).then( res => {
                    console.log(res);
                    let blob = res.data
                    let reader = new FileReader()
                    reader.readAsDataURL(blob)
                    reader.onload = (e) => {
                        let a = document.createElement('a')
                        a.download = 'excel.xlsx';//fileName
                        a.href = e.target.result
                        document.body.appendChild(a)
                        a.click()
                        document.body.removeChild(a)
                    }
                }).catch( err => {
                    console.log('下载文件失败'+err);
                });                
            },
            //搜索
            searchFile (msg) {
               let obj = Object.assign({},msg);
                
                delete(obj['searchBoxTitle']);
                delete(obj['search']);
                console.log(obj);
                //loading 中
                let msgTxt = this.$Message.loading({
                    content: 'Loading...',
                    duration: 0
                }); 
                let formdate = new FormData();
                for (let index of Object.keys(obj)) {
                    formdate.append(index,obj[index]);
                }
                formdate.append('page',this.currentPage.toString());
                formdate.append('pageSize',this.currentPageSize.toString());                
                this.$axios.post('company/contract/find',formdate).then( res => {
                    // console.log('总条数：',res.data.count,'d当前查询条数'+res.data.data.length);
                    this.preProcessingData(res);//数据预处理
                    setTimeout(msgTxt, 0);//取消loading
                }).catch( err => {
                    console.log('异步请求合同档案/档案列表失败',err);  
                    setTimeout(msgTxt, 0);//取消loading   
                });                  
            },
            //移入批量操作
            moveInBatchOperating () {
                let checkedLength = this.checkBoxSelectedData.length;
                if (checkedLength <= 0) {
                    let msg = this.$Message.loading({
                        content: '没有选中任何数据！',
                        duration: 1
                    });
                    return ;
                } else {
                    // this.batchOperatingArr.push(this.checkBoxSelectedData)
                    console.log(this.checkBoxSelectedData);
                }               
            },
            //打印
            printPage () {
                let checkedLength = this.checkBoxSelectedData.length;
                if (checkedLength <= 0) {
                    let msg = this.$Message.loading({
                        content: '没有选中任何数据！',
                        duration: 1
                    });
                    return ;
                }
                let str = `
                    <table border="0" style="width:100%;border-collapse:collapse">
                        <tr style="width:100%;height:40px;">
                            <th style="border:1px solid #000;">合同编号</th>
                            <th style="border:1px solid #000;">合同名称</th>
                            <th style="border:1px solid #000;">腾邦签署主体</th>
                            <th style="border:1px solid #000;">档案归属</th>
                            <th style="border:1px solid #000;">对方公司名称</th>
                            <th style="border:1px solid #000;">业务内容摘要</th>
                            <th style="border:1px solid #000;">有效期</th>
                            <th style="border:1px solid #000;">类别</th>
                            <th style="border:1px solid #000;">状态</th>
                            <th style="border:1px solid #000;">收文时间</th>
                            <th style="border:1px solid #000;">借阅情况</th>
                        </tr>
                `;
                
                console.log(this.checkBoxSelectedData[0]);
                for (let i = 0; i < checkedLength; i++) {
                    str += `<tr style="width:100%;text-indent:5px;">
                                <td style="border:1px solid #000;">${this.checkBoxSelectedData[i].contractNo}</td>
                                <td style="border:1px solid #000;">${this.checkBoxSelectedData[i].contractName}</td>
                                <td style="border:1px solid #000;">${this.checkBoxSelectedData[i].signedSubject}</td>
                                <td style="border:1px solid #000;">${this.checkBoxSelectedData[i].groupCompany}</td>
                                <td style="border:1px solid #000;">${this.checkBoxSelectedData[i].oppositeCompany}</td>
                                <td style="border:1px solid #000;">${this.checkBoxSelectedData[i].businessBrief}</td>
                                <td style="border:1px solid #000;">${this.checkBoxSelectedData[i].validityPeriod}</td>
                                <td style="border:1px solid #000;">${this.checkBoxSelectedData[i].stockType}</td>
                                <td style="border:1px solid #000;">${this.checkBoxSelectedData[i].statusDesc}</td>
                                <td style="border:1px solid #000;">${this.checkBoxSelectedData[i].enteringDate}</td>
                                <td style="border:1px solid #000;">${this.checkBoxSelectedData[i].borrowFlag}</td>
                    </tr>`;
                }
                str += `</table>`;


                let newstr = str;
                console.log(newstr);
                // 3. 还原：将旧的页面储存起来，当打印完成后返给给页面。
                let oldstr = document.body.innerHTML;
                // 2. 复制给body，并执行window.print打印功能
                document.body.innerHTML = newstr;
                window.print();
                window.location.reload();
                document.body.innerHTML = oldstr;
                return false;
            },
            migrate () {
                let checkedLength = this.getCheckedDataLength();
                
            },
            migrateSubmit (obj) {
                let formdata = new FormData();
                let tempObj = Object.assign({},obj);
                tempObj.archiveType = this.checkBoxSelectedData[0].archiveBarcode.archiveType;
                let arr = [];
                for (let v of this.checkBoxSelectedData) {
                    arr.push(v.archiveNo);
                }
                tempObj.archiveNos = arr;
                for (let i of Object.keys(tempObj)) {
                    formdata.append(i,tempObj[i]);
                }
                console.log(tempObj);
                this.$axios.post('common/migrate/migrate', formdata)
                .then( res => {
                    console.log(res);
                    if (res.data.code != '0') {
                        let msg = this.$Message.loading({
                            content: '迁移失败',
                            duration: 2
                        }); 
                    } else {
                        this.$refs.fileListTop.migrateFields.migrateSuccess = true;//迁移成功弹窗
                    }
                })
                .catch(err => {
                    console.log('档案迁移失败',err);  
                });
            }
        },
        //生命周期钩子函数
        created: function () {   
            this.refreshList();
        }       
    }
</script>
