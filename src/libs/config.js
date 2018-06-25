const nav = [
  {
    name: "首页",
    to: "/home",
    status: 0,
    path: "首页"
  },
  {
    name: "集团档案",
    to: '/groupFile',
    status: 1,
    path: "集团档案",
    childs: [
      {name: "合同档案", path: "集团档案/合同档案", "childs": [{"name": "档案列表", to: "/groupFile/contractFile/fileList", path: "集团档案/合同档案/档案列表"},{"name": "新建档案", to: "/groupFile/contractFile/newFile", path: "集团档案/合同档案/新建档案"},{"name": "批量操作", to: "/groupFile/contractFile/batchOperation", path: "集团档案/合同档案/批量操作"}]},
      {name: "文书档案", path: "集团档案/文书档案", "childs": [{"name": "档案列表", to: "/groupFile/documentsFile/fileList", path: "集团档案/文书档案/档案列表"},{"name": "新建档案", to: "/groupFile/documentsFile/newFile", path: "集团档案/文书档案/新建档案"},{"name": "批量操作", to: "/groupFile/documentsFile/batchOperation", path: "集团档案/文书档案/批量操作"}]},
      {name: "实物档案", path: "集团档案/实物档案", "childs": [{"name": "档案列表", to: "/groupFile/physicalsFile/fileList", path: "集团档案/实物档案/档案列表"},{"name": "新建档案", to: "/groupFile/physicalsFile/newFile", path: "集团档案/实物档案/新建档案"},{"name": "批量操作", to: "/groupFile/physicalsFile/batchOperation", path: "集团档案/实物档案/批量操作"}]},
      {name: "资料档案", path: "集团档案/资料档案", "childs": [{"name": "档案列表", to: "/groupFile/dataFile/fileList", path: "集团档案/资料档案/档案列表"},{"name": "新建档案", to: "/groupFile/dataFile/newFile", path: "集团档案/资料档案/新建档案"},{"name": "批量操作", to: "/groupFile/dataFile/batchOperation", path: "集团档案/资料档案/批量操作"}]},
      {name: "会计档案", path: "集团档案/会计档案", "childs": [{"name": "档案列表", to: "/groupFile/accountingFile/fileList", path: "集团档案/会计档案/档案列表"},{"name": "新建档案", to: "/groupFile/accountingFile/newFile", path: "集团档案/会计档案/新建档案"},{"name": "批量操作", to: "/groupFile/accountingFile/batchOperation", path: "集团档案/会计档案/批量操作"}]},
      {name: "声像档案", path: "集团档案/声像档案", "childs": [{"name": "档案列表", to: "/groupFile/soundimageFile/fileList", path: "集团档案/声像档案/档案列表"},{"name": "新建档案", to: "/groupFile/soundimageFile/newFile", path: "集团档案/声像档案/新建档案"},{"name": "批量操作", to: "/groupFile/soundimageFile/batchOperation", path: "集团档案/声像档案/批量操作"}]},
      {name: "设备档案", path: "集团档案/设备档案", "childs": [{"name": "档案列表", to: "/groupFile/equipmentFile/fileList", path: "集团档案/设备档案/档案列表"},{"name": "新建档案", to: "/groupFile/equipmentFile/newFile", path: "集团档案/设备档案/新建档案"},{"name": "批量操作", to: "/groupFile/equipmentFile/batchOperation", path: "集团档案/设备档案/批量操作"}]},
      {name: "基建档案", path: "集团档案/基建档案", "childs": [{"name": "档案列表", to: "/groupFile/infrastructureFile/fileList", path: "集团档案/基建档案/档案列表"},{"name": "新建档案", to: "/groupFile/infrastructureFile/newFile", path: "集团档案/基建档案/新建档案"},{"name": "批量操作", to: "/groupFile/infrastructureFile/batchOperation", path: "集团档案/基建档案/批量操作"}]},
    ]
  },
  {
    name: "人事档案",
    to : '/personnelFile',
    status: 2,
    childs: [{
      name: "人事档案",
      childs: [{"name": "档案列表", to: "/personnelFile/fileList"},{"name": "新建档案", to: "/personnelFile/newFile"},{"name": "批量操作", to: "/personnelFile/batchOperation"}]}
    ]
  },
  {
    name: "档案管理",
    to : '/filesManagement',
    status: 3,
    childs: [
      {name: "集团档案管理", path: "/filesManagement/groupFile"},
      {name: "人事档案管理", path: "/filesManagement/personnelFile"},
      {name: "借阅管理", path: "/filesManagement/borrowed"},
      {name: "档案储存管理", path: "/filesManagement/store"},
    ]
  },
  {
    name: "系统设置",
    to : '/systemSettings',
    status: 4,
    childs: [
      {name: "系统设置",childs: [{name: "菜单管理"},{name: "角色管理"},{name: "用户角色配置"}]},
      {name: "水印"},
      {name: "条形码",childs: [{name: "打印任务"}]},
      {name: "公司信息维护",childs: [{name: "公司列表"},{name: "新增公司"}]}
    ]
  }
];
export default nav;
