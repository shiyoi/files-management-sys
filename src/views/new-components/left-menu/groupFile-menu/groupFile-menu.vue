<style>
   @import './groupFile-menu.less';
</style>

<template>
  <div :class="shrink ? 'small' : 'long'">
    <div class="sidebar-menu-con" :style="{width: shrink ? '60px' : '200px', overflow: shrink ? 'visible' : 'auto'}">
        <Row>
        <Col span="24">
            <Menu :theme="theme2" accordion >
                <div v-show="!shrink">
                    <!-- 合同档案 -->
                    <Submenu name="合同档案">
                        <template slot="title">
                            <Icon type="ios-paper"></Icon>
                            合同档案
                        </template>
                        <MenuItem name="档案列表" @click.native="changeWhich(dataNav.top_nav[1].childs[0].childs[0].to)">档案列表</MenuItem>
                        <MenuItem name="新建档案" @click.native="changeWhich(dataNav.top_nav[1].childs[0].childs[1].to)">新建档案</MenuItem>
                        <MenuItem name="批量操作" @click.native="changeWhich(dataNav.top_nav[1].childs[0].childs[2].to)">批量操作</MenuItem>
                    </Submenu>
                    <!-- 合同档案 -->
                    <Submenu name="文书档案">
                        <template slot="title">
                            <Icon type="ios-paper"></Icon>
                            文书档案
                        </template>
                        <MenuItem name="档案列表" @click.native="changeWhich(dataNav.top_nav[1].childs[1].childs[0].to)">档案列表</MenuItem>
                        <MenuItem name="新建档案" @click.native="changeWhich(dataNav.top_nav[1].childs[1].childs[1].to)">新建档案</MenuItem>
                        <MenuItem name="批量操作" @click.native="changeWhich(dataNav.top_nav[1].childs[1].childs[2].to)">批量操作</MenuItem>
                    </Submenu>                    
                </div>
                <div v-show="shrink">
                    <div>
                        <left-small-icon type="ios-paper" title="合同档案"></left-small-icon>
                    </div>
                    <div>
                        <left-small-icon type="ios-paper" title="文书档案"></left-small-icon>
                    </div>
                    <div>
                        <left-small-icon type="ios-paper" title="实物档案"></left-small-icon>
                    </div>
                    <div>
                        <left-small-icon type="ios-paper" title="资料档案"></left-small-icon>
                    </div>   
                    <div>
                        <left-small-icon type="ios-paper" title="会计档案"></left-small-icon>
                    </div>    
                    <div>
                        <left-small-icon type="ios-paper" title="声像档案"></left-small-icon>
                    </div>    
                    <div>
                        <left-small-icon type="ios-paper" title="设备档案"></left-small-icon>
                    </div>     
                    <div>
                        <left-small-icon type="ios-paper" title="基建档案"></left-small-icon>
                    </div> 
                </div>                                                                     -->
            </Menu>
        </Col>
        </Row>
    </div>
  </div>
</template>
<script>
  import common from '@/libs/common.js';//bus 总线
  import leftSmallIcon from '@/views/new-components/left-small-icon/left-small-icon.vue';
  export default {
    name: "groupFileMenu",
    props: ['dataNav'],
    components: {
        leftSmallIcon
    },
    data () {
        return {
            shrink: false,
            theme2: 'dark'
        };
    },
    methods: {
        changeWhich: function (...to) {
          console.log(...to);
          this.$router.push(...to);//跳转路由
      }
    },
    mounted () {
      common.bus.$on('toggleMenu', shrink => {
          this.shrink = shrink;
          //console.log(this.shrink);
      });
    }
  }
</script>
