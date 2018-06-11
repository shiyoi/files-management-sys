const nav = [
  {
    name: "首页"
  },
  {
    name: "集团档案",
    childs: [
      {name: "合同档案", "childs": [{"name": "档案列表"},{"name": "新建档案"},{"name": "批量操作"}]},
      {name: "文书档案", "childs": [{"name": "档案列表"},{"name": "新建档案"},{"name": "批量操作"}]},
      {name: "实物档案", "childs": [{"name": "档案列表"},{"name": "新建档案"},{"name": "批量操作"}]},
      {name: "资料档案", "childs": [{"name": "档案列表"},{"name": "新建档案"},{"name": "批量操作"}]},
      {name: "会计档案", "childs": [{"name": "档案列表"},{"name": "新建档案"},{"name": "批量操作"}]},
      {name: "声像档案", "childs": [{"name": "档案列表"},{"name": "新建档案"},{"name": "批量操作"}]},
      {name: "设备档案", "childs": [{"name": "档案列表"},{"name": "新建档案"},{"name": "批量操作"}]},
      {name: "基建档案", "childs": [{"name": "档案列表"},{"name": "新建档案"},{"name": "批量操作"}]},
    ]
  },
  {
    name: "人事档案",
    childs: [
      {name: "人事档案",childs: [{"name": "档案列表"},{"name": "新建档案"},{"name": "批量操作"}]}
    ]
  },
  {
    name: "档案管理",
    childs: [
      {name: "集团档案管理"},
      {name: "人事档案管理"},
      {name: "借阅管理"},
      {name: "档案储存管理"},
    ]
  },
  {
    name: "系统设置",
    childs: [
      {name: "系统设置",childs: [{name: "菜单管理"},{name: "角色管理"},{name: "用户角色配置"}]},
      {name: "水印"},
      {name: "条形码",childs: [{name: "打印任务"}]},
      {name: "公司信息维护",childs: [{name: "公司列表"},{name: "新增公司"}]}
    ]
  }
];
export default nav;
