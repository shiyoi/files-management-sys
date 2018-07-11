<style scoped lang="less">
@import './contract-file-details.less';
</style>
<template>
<div style="">
  <!-- 操作按钮 -->
  <!-- #eaeff0 -->
  <div class="file-details-con" style="margin-top:0px;position:fixed;top:60px;padding-bottom:20px;padding-top:20px;z-index:9999;border:none;background-color:#eaeff0;">
    <div>
      <Row type="flex" justify="center">
        <Col span="2"><Button type="primary">修改</Button></Col>
        <Col span="2"><Button type="primary">刷新</Button></Col>
        <Col span="2"><Button type="primary">借阅</Button></Col>
        <Col span="2"><Button type="primary">打印</Button></Col>
        <Col span="2"><Button type="primary">导出表格</Button></Col>
      </Row>    
    </div>
  </div>  
  <!-- 合同档案基本信息 -->
  <div class="file-details-con" style="margin-top:52px;">    
    <div class="basic-info-header">
      <div style="width:50%;float:left;">合同档案基本信息</div> 
      <div style="width:50%;float:left;text-align:right;padding-right:20px;">流程单号：454545856258456</div>
    </div>
    <div class="basic-info-con">
      <div class="basics-rows">
        <div class="basics-rows-l">
          <div class="text">合同名称：</div>
          <div>{{ data.archiveBarcode.archiveName }}</div>
        </div>
        <div class="basics-rows-r">
          <div class="r-f">{{ data.signedSubject }}</div>        
          <div class="text">腾邦签署主体：</div>
        </div>
      </div>
      <div class="basics-rows" style="height:90px;">
          <div style="width:12.5%;float:left;text-align:right;padding-right:8px;">业务内容摘要：</div>
          <div style="width:87.5%;float:left;">
            <Input v-model="data.businessBrief" type="textarea" :rows="4" readonly></Input>                      
          </div>  
      </div>    
      <div class="basics-rows">
        <div class="basics-rows-l">
          <div class="text">档案归属：</div>
          <div>
            {{ data.groupCompany }}
          </div>
        </div>
        <div class="basics-rows-r">
        </div>
      </div>
      
      <div class="basics-rows">
        <div class="basics-rows-l">
          <div class="text">对方公司名称：</div>
          <div>{{ data.oppositeCompany }}</div>
        </div>
        <div class="basics-rows-r">
          <div class="r-f">{{ data.effectiveStartDate }}-{{ data.effectiveEndDate }}</div>        
          <div class="text">有效期：</div>
        </div>
      </div>
      <div class="basics-rows">
        <div class="basics-rows-l">
          <div class="text">合同类型：</div>
          <div>
             {{ data.contractType }}
          </div>
        </div>
        <div class="basics-rows-r">
          <div class="r-f">{{ data.contractNo }}</div>        
          <div class="text">合同编号：</div>
        </div>
      </div>
      
      <div class="basics-rows">
        <div class="basics-rows-l">
          <div class="text">签署人：</div>
          <div>
            {{ data.signedUser }}
          </div>
        </div>
        <div class="basics-rows-r">
          <div class="r-f">
            {{ data.enteringType }}
          </div>        
          <div class="text">类别：</div>
        </div>
      </div>
      
      <div class="basics-rows">
        <div class="basics-rows-l">
          <div class="text">状态：</div>
          <div>
            {{ data.status }}
          </div>
        </div>
        <div class="basics-rows-r">
          <div class="r-f">{{ data.enteringDate }}</div>        
          <div class="text">收文时间：</div>
        </div>
      </div>  
      <div class="basics-rows">
        <div class="basics-rows-l">
          <div class="text">收文人：</div>
          <div>
            {{ data.enteringUser }}
          </div>
        </div>
        <div class="basics-rows-r">
          <div class="r-f">{{ data.modifyTm }}</div>        
          <div class="text">最后修改时间：</div>        
        </div>
      </div>   
      <div class="basics-rows">
        <div class="basics-rows-l">
          <div class="text">借阅情况：</div>
          <div>
            {{ data.borrowFlag }}
          </div>
        </div>
        <div class="basics-rows-r">
          <div class="r-f">{{ data.createTm }}</div>        
          <div class="text">新建时间：</div>        
        </div>
      </div>                                
    </div>    
  </div>
  <!-- 移交信息 -->
  <div class="file-details-con">
    <file-header text="移交信息"></file-header>
    <div class="basic-info-con">
      <div class="basics-rows">
        <div class="basics-rows-l">
          <div class="text">数据来源：</div>
          <div>
            {{ data.borrowFlag }}         
          </div>
        </div>
        <div class="basics-rows-r">
          <div class="r-f">{{ data.processNo }}</div>        
          <div class="text">流程单号：</div>
        </div>
      </div>
      
      <div class="basics-rows">
        <div class="basics-rows-l">
          <div class="text">移交人：</div>
          <div>{{ data.transferNo }}</div>
        </div>
        <div class="basics-rows-r">
          <div class="r-f">{{ data.department }}</div>        
          <div class="text">所属部门：</div>
        </div>
      </div>  
      <div class="basics-rows">
        <div class="basics-rows-l">
          <div class="text">直属上级：</div>
          <div>
             {{ data.leaderNo }}       
          </div>
        </div>
        <div class="basics-rows-r">

        </div>
      </div>                  
    </div>    
  </div>
  <!-- 入库情况 -->
  <div class="file-details-con">
    <file-header text="入库情况"></file-header>
    <div class="basic-info-con">
      <div class="basics-rows">
        <div class="basics-rows-l">
          <div class="text">入库状态：</div>
          <div>
            {{ data.stockStatus }}
          </div>
        </div>
        <div class="basics-rows-r">
          <div class="r-f">
            {{ data.stockType }}    
          </div>        
          <div class="text">入库类型：</div>
        </div>
      </div>  
      <div class="basics-rows">
        <div class="basics-rows-l">
          <div class="text">档案位置：</div>
          <div>
            {{ data.archiveMaterialStock.archiveRoom }}                    
          </div>
        </div>
        <div class="basics-rows-r">
          <div class="r-f">
  
          </div>        
          <div class="text"></div>
        </div>
      </div>   
      <div class="basics-rows">
        <div class="basics-rows-l">
          <div class="text">柜号：</div>
          <div>
            <div style="width:36%;float:left;margin-right:8px;">
              {{ data.archiveMaterialStock.cabinet }}

            </div>
            <div style="width:20%;float:left;text-align:right;padding-right:8px;">列号：</div>
            <div style="width:36%;float:left;">
              {{ data.archiveMaterialStock.columnNo }}

            </div>
          </div>
        </div>
        <div class="basics-rows-r">
          <div class="r-f">
            <div style="width:36%;float:left;margin-right:8px;">
              {{ data.archiveMaterialStock.rowNo }}

            </div>
            <div style="width:20%;float:left;text-align:right;padding-right:8px;">件号：</div>
            <div style="width:36%;float:left;">
              {{ data.archiveMaterialStock.piece }}

            </div>      
          </div>        
          <div class="text">行号：</div>
        </div>
      </div>
      <div class="basics-rows" style="height:150px;">
        <div class="basics-rows-l">
          <div class="text">条形码：</div>
          <div>
            <div style="width:36%;float:left;margin-right:8px;">
              <canvas id="barcode"></canvas>

            </div>
            <div style="width:20%;float:left;text-align:right;padding-right:8px;"></div>
            <div style="width:36%;float:left;">
              

            </div>
            
          </div>
        </div>
        <div class="basics-rows-r">
          <div class="r-f">
            
          </div>        
          <div class="text"><div style="height:100px;width:20%;float:left;padding-top:60px;"><Button type="ghost" icon="printer">打印条形码</Button></div></div>
        </div>        
      </div>                      
    </div>
  </div>
  <!-- 备注 -->
  <div class="file-details-con">
    <file-header text="备注"></file-header>
    <div class="basic-info-con">
      <div class="basics-rows" style="height:90px;">
          <div style="width:12.5%;float:left;text-align:right;padding-right:8px;">备注：</div>
          <div style="width:87.5%;float:left;">
            <Input v-model="data.remark" type="textarea" :rows="4" readonly></Input>                      
          </div>  
      </div>                  
    </div>    
  </div>  
  <!-- 附件上传 -->
  <div class="file-details-con">
    <file-header text="附件上传"></file-header>
    <div class="basic-info-con">
      <Table border :columns="electronicColumns" :data="electronicData" size="small"></Table>  
                         
    </div>    
  </div>   
  <!-- 借阅记录 -->
  <div class="file-details-con">
    <div class="basic-info-header">
      <div style="width:50%;float:left;">借阅记录</div> 
      <div style="width:50%;float:left;text-align:right;padding-right:20px;">more》</div>
    </div>    
    <div class="basic-info-con">
      <Table border :columns="borrowRecordColumns" :data="borrowRecordData" size="small"></Table>            
    </div>    
  </div>   
  <!-- 操作日志 -->
  <div class="file-details-con">
    <div class="basic-info-header">
      <div style="width:50%;float:left;">操作日志</div> 
      <div style="width:50%;float:left;text-align:right;padding-right:20px;">more》</div>
    </div>    
    <div class="basic-info-con">
      <Table border :columns="operatingLogColumns" :data="operatingLogData" size="small"></Table>            
    </div>    
  </div>  
  <!-- 迁移记录 -->
  <div class="file-details-con">
    <div class="basic-info-header">
      <div style="width:50%;float:left;">迁移记录</div> 
      <div style="width:50%;float:left;text-align:right;padding-right:20px;">more》</div>
    </div>    
    <div class="basic-info-con">
      <Table border :columns="migrateRecordColumns" :data="migrateRecordData" size="small"></Table>            
    </div>    
  </div>    
  <!-- <div style="margin-bottom:110px;">
    <Row type="flex" justify="center">
      <Col span="2"><Button type="primary">修改</Button></Col>
      <Col span="2"><Button type="primary">刷新</Button></Col>
      <Col span="2"><Button type="primary">借阅</Button></Col>
      <Col span="2"><Button type="primary">打印</Button></Col>
      <Col span="2"><Button type="primary">导出表格</Button></Col>
    </Row>    
  </div>  -->
</div>
</template>
<script>
import jsbarcode from 'jsbarcode';
import fileHeader from '../new-file/file-basic-info/file-header/file-header.vue';
export default {
  name: 'contract-file-details',
  components: {
    fileHeader
  },
  data: function () {
    return {
      data: 
        {
            "archiveBarcode":{
            "archiveName":"",
            "archiveNo":"Y2018070600001",
            "archiveType":"Y",
            "barcodeNo":"YTTAg06001",
            "createTm":1530848554000,
            "creatorId":"某某某",
            "delFlag":0,
            "id":1232,
            "modifierId":"某某某",
            "modifyTm":1530848557000,
            "printCount":0
          },
          "archiveBorrows":[],
          "archiveElectronicStocks":[],
          "archiveMaterialStock":{
            "archiveRoom":"5楼档案室",
            "cabinet":"3",
            "columnNo":"2",
            "createTm":1530848554000,
            "creatorId":"某某某",
            "delFlag":0,
            "id":1282,
            "modifierId":"某某某",
            "modifyTm":1530848556000,
            "piece":"2",
            "remark":"3233232",
            "rowNo":"2",
            "stockNo":"STOCK_Y_2018070600001"
          },
          "archiveMigrates":[],
          "archiveNo":"Y2018070600001",
          "archiveOperationLogs":[
            {
              "archiveNo":"Y2018070600001",
              "batchNo":"BN2018070600001",
              "createTm":1530848554000,
              "creatorId":"某某某",
              "delFlag":0,
              "id":1319,
              "modifierId":"某某某",
              "modifyTm":1530848557000,
              "operationType":10,
              "operattionDate":1530848554000,
              "operattionUser":"某某某"
            }
          ],
          "barcodeNo":"YTTAg06001",
          "borrowFlag":10,
          "borrowFlagDesc":"未借阅",
          "businessBrief":"3233232",
          "contractName":"辅导费",
          "contractNo":"3233232",
          "contractType":20,
          "createTm":1530848554000,
          "creatorId":"某某某",
          "delFlag":0,
          "department":"xxxx/xx/xxxx/xxxxxxxx",
          "effectiveEndDate":"2018-08-06",
          "effectiveStartDate":"2018-07-06",
          "enteringDate":1530460800000,
          "enteringType":"10,20",
          "enteringTypeDesc":"原件/复印件",
          "enteringUser":"某某某",
          "groupCompany":"TT",
          "groupCompanyDesc":"商业集团",
          "id":1185,
          "leaderNo":"某某某",
          "modifierId":"某某某",
          "modifyTm":1530848557000,
          "oppositeCompany":"3233232",
          "processNo":"3233232",
          "remark":"3233232",
          "resource":20,
          "resourceDesc":"手动录入",
          "signedSubject":"3233232",
          "signedUser":"3233232",
          "status":20,
          "statusDesc":"已收文",
          "stockNo":"STOCK_Y_2018070600001",
          "stockStatus":20,
          "stockType":30,
          "stockTypeDesc":"实物和电子库",
          "transferNo":"3233232"
      },
      borrowRecordColumns: [
        {
          title: '借阅人',
          key: 'borrowOutName'
        },
        {
          title: '是否需要归还',
          key: 'needReturn'
        },  
        {
          title: '借出时间',
          key: 'borrowDate'
        }, 
        {
          title: '预计归还时间',
          key: 'planReturnDate'
        }, 
        {
          title: '实际归还时间',
          key: 'actualReturnDate'
        }, 
        {
          title: '续借',
          key: 'renewDate'
        }, 
        {
          title: '操作',
          key: 'operating',
          render: (h, params) => {
                  return h('div', [
                      h('Icon', {
                          props: {
                              type: 'person'
                          }
                      }),
                      h('strong', params.row.name)
                  ]);
          }                    
        }                                                                                                          
      ],   
      borrowRecordData: [
        {
            borrowOutName: 'John Brown',
            needReturn: 18,
            borrowDate: 'New York No. 1 Lake Park',
            planReturnDate: 'fdfds',
            actualReturnDate: 'fdfds',
            renewDate: 'fdfds',
            operating: 'fdfds',
        }    
      ],   
      operatingLogColumns: [
        {
          title: '操作次数',
          key: 'operatingNum'
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
          key: 'operating'
        }                                
      ],
      operatingLogData: [
        {
          operatingNum: 2,
          operattionUser: 'zhangsan',
          operationType: '1',
          operattionDate: '2018-8-23',
          operating: ''
        }
      ],
      migrateRecordColumns: [
        {
          title: '操作次数',
          key: 'operatingNum'
        },    
        {
          title: '操作人',
          key: 'migrateUser'
        }, 
        {
          title: '时间',
          key: 'migrateDate'
        }, 
        {
          title: '档案室',
          key: 'archiveRoom'
        }, 
        {
          title: '柜号',
          key: 'cabinet'
        }, 
        {
          title: '行号',
          key: 'rowNo'
        }, 
        {
          title: '列号',
          key: 'columnNo'
        }, 
        {
          title: '件号',
          key: 'piece'
        }                                                            
      ],
      migrateRecordData: [
        {
          operatingNum: 2,
          migrateUser: 'zhangsan',
          migrateDate: '1',
          archiveRoom: '2018-8-23',
          cabinet: '5',
          rowNo: '6',
          columnNo: '5',
          piece: '6'
        }        
      ],
      electronicColumns: [
        {
          title: '文件名',
          key: 'fileName'
        }, 
        {
          title: '类型',
          key: 'fileType'
        },
        {
          title: '大小',
          key: 'fileSize'
        },
        {
          title: '上传人',
          key: 'modifierId'
        },
        {
          title: '上传时间',
          key: 'modifyTm'
        },        
        {
          title: '操作',
          key: 'operating'
        }                                        
      ],
      electronicData: [
        {
          fileName: 2,
          fileType: 'zhangsan',
          fileSize: '1',
          modifierId: '2018-8-23',
          modifyTm: '5',
          operating: '6'
        } 
      ],
      someText: "fdsfdsjfodsjfdsifjdsiofjdiofjidsfjiodsjfiodsj43335353535454fiodsfdsiofjdsiofjdsiofjodijoidsjfoidsjfoidsjfiodsjfoidsjiodsjfoidsjfoidsjfoidsjfoidsj"

    };
  },
  methods: {

  },
  created: function () {
    let formData = new FormData();
    formData.append('archiveNo',this.$store.state.fileDetails);
    this.$axios.post('/company/contract/detail',formData).then( res => {
      console.log(res.data.data);
      this.data = res.data.data;
      JsBarcode("#barcode", this.data.archiveBarcode.barcodeNo);
    }).catch( err => {
      console.log('档案详情接口失败',err);
    });
  }
}
</script>


