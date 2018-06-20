<style>
   @import './groupFile-menu.less';
</style>

<template>
  <div class="long">
    <div class="sidebar-menu-con" :style="{width: dataNav.shrink?'60px':'200px', overflow: dataNav.shrink ? 'visible' : 'auto'}">
        <Row>
        <Col span="24">
            <Menu :theme="theme2" :open-names="[dataNav.top_nav[dataNav.top_nav_active].childs[0].path]" :active-name="whichclick" accordion>
                <template v-show="!dataNav.shrink">
                    <!-- 合同档案 -->
                    <Submenu :name="dataNav.top_nav[dataNav.top_nav_active].childs[0].path" v-show="!dataNav.shrink">
                        <template slot="title">
                            <Icon type="ios-paper"></Icon>
                            {{ dataNav.top_nav[dataNav.top_nav_active].childs[0].name }}
                        </template>
                        <MenuItem :name="dataNav.top_nav[dataNav.top_nav_active].childs[0].childs[0].path" @click.native="changeWhich(dataNav.top_nav[dataNav.top_nav_active].childs[0].childs[0].to)">{{ dataNav.top_nav[dataNav.top_nav_active].childs[0].childs[0].name }}</MenuItem>
                        <MenuItem :name="dataNav.top_nav[dataNav.top_nav_active].childs[0].childs[1].path" @click.native="changeWhich(dataNav.top_nav[dataNav.top_nav_active].childs[0].childs[1].to)">{{ dataNav.top_nav[dataNav.top_nav_active].childs[0].childs[1].name }}</MenuItem>
                        <MenuItem :name="dataNav.top_nav[dataNav.top_nav_active].childs[0].childs[2].path" @click.native="changeWhich(dataNav.top_nav[dataNav.top_nav_active].childs[0].childs[2].to)">{{ dataNav.top_nav[dataNav.top_nav_active].childs[0].childs[2].name }}</MenuItem>
                    </Submenu>
                    
                </template>
                <template v-show="dataNav.shrink">
                    <div v-show="dataNav.shrink">
                        <left-small-icon type="ios-paper" title="合同档案"></left-small-icon>
                    </div>
                    <div v-show="dataNav.shrink">
                        <left-small-icon type="ios-paper" title="文书档案"></left-small-icon>
                    </div>
                    <div v-show="dataNav.shrink">
                        <left-small-icon type="ios-paper" title="实物档案"></left-small-icon>
                    </div>
                    <div v-show="dataNav.shrink">
                        <left-small-icon type="ios-paper" title="资料档案"></left-small-icon>
                    </div>   
                    <div v-show="dataNav.shrink">
                        <left-small-icon type="ios-paper" title="会计档案"></left-small-icon>
                    </div>    
                    <div v-show="dataNav.shrink">
                        <left-small-icon type="ios-paper" title="声像档案"></left-small-icon>
                    </div>    
                    <div v-show="dataNav.shrink">
                        <left-small-icon type="ios-paper" title="设备档案"></left-small-icon>
                    </div>     
                    <div v-show="dataNav.shrink">
                        <left-small-icon type="ios-paper" title="基建档案"></left-small-icon>
                    </div>  
                </template>                                                                     
            </Menu>
        </Col>
        </Row>
    </div>
  </div>
</template>
<script>
  import common from '@/libs/common.js';//bus 总线
  export default {
    name: "groupFileMenu",

    mounted () {
      common.bus.$on('toggleMenu',function (shrink) {
          console.log(shrink);
      });
    }
  }
</script>
